# YouTube Video Summarizer MCP

An MCP (Model Context Protocol) server that enables Claude to fetch and summarize YouTube videos by extracting titles, descriptions, and transcripts.

[![npm version](https://img.shields.io/npm/v/youtube-video-summarizer-mcp.svg)](https://www.npmjs.com/package/youtube-video-summarizer-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![smithery badge](https://smithery.ai/badge/@nabid-pf/youtube-video-summarizer-mcp)](https://smithery.ai/server/@nabid-pf/youtube-video-summarizer-mcp)

## Features

- Extract YouTube video metadata (title, description, duration)
- Retrieve and process video captions using youtube-caption-extractor
- Provide structured data to Claude for comprehensive video summarization
- Works with Claude Desktop through MCP integration

## Prerequisites
- Node.js (v18 or higher)

## Integrating with Claude Desktop

To add the MCP server to Claude Desktop:

1. Go to Settings > Developer > Edit config
2. Add the following to your claude_desktop_config.json file:

```json
{
  "mcpServers": {
    "youtube-video-summarizer": {
      "command": "npx",
      "args": ["-y", "youtube-video-summarizer-mcp"]
    }
  }
}
```

## Available MCP Commands

When integrated with Claude, the following commands become available:

- `get-video-info-for-summary-from-url`: Get basic information about a YouTube video

## Example Usage

Once integrated with Claude Desktop, you can use natural language to request video summaries:

- "Can you summarize this YouTube video for me? https://www.youtube.com/watch?v=dQw4w9WgXcQ"
- "What are the key points from this video: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
- "Create a comprehensive summary of this tutorial: https://www.youtube.com/watch?v=dQw4w9WgXcQ"

## For Developers

### Building from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/youtube-video-summarizer-mcp.git
cd youtube-video-summarizer-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Start the inspector
npx @modelcontextprotocol/inspector node dist/index.js
```
### Run tool
- Click connect
- Select the tool to run
- Put video url in the field
- Click run

## How It Works

This project uses:
- `youtube-caption-extractor` to extract video captions/transcripts
- The Model Context Protocol (MCP) to communicate with Claude

## License

MIT
