import type { LLMClient, LLMMessage, LLMResponse, AgentMessage, ToolDefinition } from "../llm/provider.js";
import { chatCompletion, chatWithTools } from "../llm/provider.js";
import { searchWeb, fetchUrl } from "../utils/web-search.js";

export interface AgentContext {
  readonly client: LLMClient;
  readonly model: string;
  readonly projectRoot: string;
  readonly bookId?: string;
}

const SEARCH_TOOLS: ReadonlyArray<ToolDefinition> = [
  {
    name: "search_web",
    description: "搜索互联网验证事实。用于核实年代、人物、事件、地理等真实信息。",
    parameters: {
      type: "object",
      properties: {
        query: { type: "string", description: "搜索关键词" },
      },
      required: ["query"],
    },
  },
  {
    name: "fetch_url",
    description: "抓取指定URL的文本内容，用于读取搜索结果的详情页。",
    parameters: {
      type: "object",
      properties: {
        url: { type: "string", description: "要抓取的URL" },
      },
      required: ["url"],
    },
  },
];

export abstract class BaseAgent {
  protected readonly ctx: AgentContext;

  constructor(ctx: AgentContext) {
    this.ctx = ctx;
  }

  protected async chat(
    messages: ReadonlyArray<LLMMessage>,
    options?: { readonly temperature?: number; readonly maxTokens?: number },
  ): Promise<LLMResponse> {
    return chatCompletion(this.ctx.client, this.ctx.model, messages, options);
  }

  /**
   * Chat with web search tools enabled.
   * The agent can call search_web and fetch_url during the conversation.
   * Runs a tool-calling loop (max 5 rounds) until the model stops calling tools.
   */
  protected async chatWithSearch(
    messages: ReadonlyArray<LLMMessage>,
    options?: { readonly temperature?: number; readonly maxTokens?: number },
  ): Promise<LLMResponse> {
    const agentMessages: AgentMessage[] = messages.map(m => ({
      role: m.role,
      content: m.content,
    }));

    const maxRounds = 5;
    for (let round = 0; round < maxRounds; round++) {
      const result = await chatWithTools(
        this.ctx.client, this.ctx.model, agentMessages, SEARCH_TOOLS, options,
      );

      agentMessages.push({
        role: "assistant" as const,
        content: result.content || null,
        ...(result.toolCalls.length > 0 ? { toolCalls: result.toolCalls } : {}),
      });

      if (result.toolCalls.length === 0) {
        return { content: result.content, usage: { promptTokens: 0, completionTokens: 0, totalTokens: 0 } };
      }

      for (const toolCall of result.toolCalls) {
        const args = JSON.parse(toolCall.arguments) as Record<string, unknown>;
        let toolResult: string;
        try {
          if (toolCall.name === "search_web") {
            const searchResult = await searchWeb(args.query as string);
            toolResult = JSON.stringify(searchResult);
          } else if (toolCall.name === "fetch_url") {
            const text = await fetchUrl(args.url as string, 6000);
            toolResult = JSON.stringify({ url: args.url, content: text });
          } else {
            toolResult = JSON.stringify({ error: `Unknown tool: ${toolCall.name}` });
          }
        } catch (e) {
          toolResult = JSON.stringify({ error: String(e) });
        }
        agentMessages.push({ role: "tool" as const, toolCallId: toolCall.id, content: toolResult });
      }
    }

    // If we exhausted rounds, return the last assistant content
    const lastAssistant = [...agentMessages].reverse().find(m => m.role === "assistant");
    const content = (lastAssistant && "content" in lastAssistant && lastAssistant.content) || "";
    return { content, usage: { promptTokens: 0, completionTokens: 0, totalTokens: 0 } };
  }

  abstract get name(): string;
}
