import { ZodRawShape } from "zod";

export interface ToolDefinition<Args extends ZodRawShape> {
  name: string;
  description: string;
  schema: Args;
  handler: (args: any, extra: any) => Promise<any>;
}

export interface ToolResponse<T> {
  result: T | null;
  isError: boolean;
  error: string | null;
}