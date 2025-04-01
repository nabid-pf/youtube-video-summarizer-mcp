# YouTube Video Summarizer MCP

An MCP (Model Context Protocol) server that enables Claude to fetch and summarize YouTube videos by extracting titles, descriptions, and transcripts.

[![npm version](https://img.shields.io/npm/v/youtube-video-summarizer-mcp.svg)](https://www.npmjs.com/package/youtube-video-summarizer-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- Extract YouTube video metadata (title, description, duration)
- Retrieve and process video captions using youtube-caption-extractor
- Provide structured data to Claude for comprehensive video summarization
- Works with Claude Desktop through MCP integration

## Installation

### Global Installation (Recommended for Claude Desktop)

```bash
# Install globally
npm install -g youtube-video-summarizer-mcp

# Run directly
youtube-video-summarizer
```

### Local Installation

```bash
# Install locally
npm install youtube-video-summarizer-mcp

# Run with npx
npx youtube-video-summarizer-mcp
```

## Integrating with Claude Desktop

To add the MCP server to Claude Desktop:

1. Go to Settings > Developer > Edit config
2. Add the following to your claude_desktop_config.json file:

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["-y", "youtube-video-summarizer-mcp"],
      "env": {
        "YOUTUBE_API_KEY": "your_youtube_api_key_here"  # Optional
      }
    }
  }
}
```

## Available MCP Commands

When integrated with Claude, the following commands become available:

- `get-video-info`: Get basic information about a YouTube video
- `get-video-captions`: Get the captions/transcript of a YouTube video
- `summarize-video`: Get video information and captions optimized for summarization

## Example Usage

Once integrated with Claude Desktop, you can use natural language to request video summaries:

- "Can you summarize this YouTube video for me? https://www.youtube.com/watch?v=dQw4w9WgXcQ"
- "What are the key points from this video: https://youtu.be/abc123"
- "Create a comprehensive summary of this tutorial: [YouTube URL]"

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

# Start the server
npm start
```

### Environment Variables

Create a `.env` file in the root directory with:

```
YOUTUBE_API_KEY=your_youtube_api_key_here  # Optional
```

## How It Works

This project uses:
- `ytdl-core` to extract video metadata
- `youtube-caption-extractor` to extract video captions/transcripts
- The Model Context Protocol (MCP) to communicate with Claude

## License

MIT
