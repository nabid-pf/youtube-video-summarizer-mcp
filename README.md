[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/nabid-pf-youtube-video-summarizer-mcp-badge.png)](https://mseep.ai/app/nabid-pf-youtube-video-summarizer-mcp)

# YouTube Video Summarizer MCP Server

An MCP (Model Context Protocol) server that enables AI assistants to analyze and summarize YouTube videos by extracting captions, descriptions, and metadata.

## Features

- Extract video captions/subtitles in multiple languages
- Retrieve comprehensive video metadata (title, description, duration)
- Provide structured data to AI assistants for comprehensive video summarization
- Works with any MCP-compatible client through MCP integration
- Support for multiple YouTube URL formats
- Language-specific caption extraction

## Integrating with MCP Clients

To add the MCP server to your MCP client:

1. Install the package globally: `npm install -g youtube-video-summarizer-mcp`
2. Add the following to your MCP client configuration file:

```json
{
  "mcpServers": {
    "youtube-video-summarizer": {
      "command": "youtube-video-summarizer",
      "args": []
    }
  }
}
```

## Available Tools

When integrated with an MCP client, the following commands become available:

- **get-video-info-for-summary-from-url**: Extract video information and captions from a YouTube URL
- **get-video-captions**: Get captions/subtitles for a specific video
- **get-video-metadata**: Retrieve comprehensive video metadata

## Usage Examples

Once integrated with your MCP client, you can use natural language to request video summaries:

```
"Can you summarize this YouTube video: https://youtube.com/watch?v=VIDEO_ID"
"What are the main points from this video's captions?"
"Extract the key information from this YouTube link"
```

## Installation

```bash
npm install -g youtube-video-summarizer-mcp
```

## Development

```bash
git clone https://github.com/nabid-pf/youtube-video-summarizer-mcp.git
cd youtube-video-summarizer-mcp
npm install
npm run build
```

## How It Works

1. **URL Parsing**: Extracts video IDs from various YouTube URL formats
2. **Caption Extraction**: Uses youtube-caption-extractor to get subtitles
3. **Metadata Retrieval**: Fetches video title, description, and other details
4. **MCP Integration**: The Model Context Protocol (MCP) to communicate with AI assistants

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
