# Integrating with Claude Desktop

This guide will help you set up the YouTube Video Summariser MCP server with Claude Desktop.

## Prerequisites

1. Claude Desktop app installed
2. Node.js (v18 or higher) installed
3. YouTube Video Summariser repository cloned and built

## Configuration Steps

1. Build the YouTube Video Summariser:
   ```bash
   cd youtube-video-summariser
   npm install
   npm run build
   ```

2. Get the absolute path to the built index.js file:
   ```bash
   cd dist
   pwd
   ```
   This will return something like: `/Users/yourusername/Desktop/youtube-video-summariser/dist`

3. Open Claude Desktop

4. Go to Settings > Developer > Edit config

5. Add the following to your `claude_desktop_config.json` file:
   ```json
   {
     "mcpServers": {
       "youtube": {
         "command": "node",
         "args": ["/absolute/path/to/youtube-video-summariser/dist/index.js"],
         "env": {
           "YOUTUBE_API_KEY": "your_youtube_api_key_here"
         }
       }
     }
   }
   ```
   
   Replace `/absolute/path/to/youtube-video-summariser/dist/index.js` with the actual path from step 2.

6. Save the config file and restart Claude Desktop

## Usage

Once configured, you can ask Claude to summarize YouTube videos using prompts like:

- "Can you summarize this YouTube video for me? https://www.youtube.com/watch?v=dQw4w9WgXcQ"
- "What's the main point of this video? https://youtu.be/dQw4w9WgXcQ"
- "Give me the key takeaways from this YouTube video: https://www.youtube.com/watch?v=dQw4w9WgXcQ"

Claude will use the MCP server to extract the video information and captions, then generate a summary.

## Troubleshooting

If Claude doesn't recognize the YouTube summarization commands:

1. Check that the MCP server is properly configured in Claude Desktop
2. Ensure the path to the index.js file is correct
3. Verify that the YouTube API key is valid (if used)
4. Check Claude Desktop logs for any errors

For more detailed error messages, you can run the MCP server manually:
```bash
node /path/to/youtube-video-summariser/dist/index.js
```
