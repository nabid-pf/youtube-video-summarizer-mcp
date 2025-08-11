import { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ZodRawShape } from "zod";

export interface ToolDefinition<Args extends ZodRawShape> {
  name: string;
  description: string;
  schema: Args;
  handler: ToolCallback<Args>;
}

export interface ToolResponse<T> {
  result: T | null;
  isError: boolean;
  error: string | null;
}