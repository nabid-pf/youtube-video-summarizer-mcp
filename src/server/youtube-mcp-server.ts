import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export class YouTubeMcpServer {
  private static instance: McpServer | null = null;

  private constructor() {}

  public static GetServer(): McpServer {
    if (YouTubeMcpServer.instance === null) {
      YouTubeMcpServer.instance = new McpServer({
        name: "YouTube Video Summariser",
        version: "1.0.0",
        capabilities: {
          tools: {},
        },
      });
    }
    return YouTubeMcpServer.instance;
  }
}
