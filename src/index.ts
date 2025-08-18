#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { YouTubeMcpServer } from "./server/youtube-mcp-server.js";
import { GetVideoInfoTool } from "./tools/get-video-info.tool.js";
import { RegisterTool } from "./helpers/register-tool.js";
import { getPackageVersion } from "./helpers/get-package-version.js";

const main = async () => {
  // Create an MCP server
  const server = YouTubeMcpServer.GetServer();

  // Register all tools
  RegisterTool(server, GetVideoInfoTool);

  // Start receiving messages on stdin and sending messages on stdout
  const transport = new StdioServerTransport();
  await server.connect(transport);
};

main().catch((error) => {
  // Use process.stderr.write to avoid interfering with MCP protocol
  process.stderr.write(`Error: ${error}\n`);
  process.exit(1);
});
