# Publishing to NPM

This guide will walk you through the process of publishing the YouTube Video Summarizer MCP to npm.

## Prerequisites

1. An npm account. If you don't have one, create it at [npmjs.com](https://www.npmjs.com/signup)
2. Log in to your npm account in your terminal:
   ```bash
   npm login
   ```

## Prepare for Publishing

1. Update the package.json with your information:
   - Set your name as the author
   - Update the repository URL to your GitHub repo
   - Make sure the version number is correct (start with 1.0.0)

2. Make sure you've built the latest version:
   ```bash
   npm run build
   ```

3. Test the package locally:
   ```bash
   npm link
   youtube-video-summarizer  # Should start the MCP server
   ```

## Publishing

1. Publish to npm:
   ```bash
   npm publish --access public
   ```

   If you prefer to use a scoped package (e.g., @yourusername/youtube-video-summarizer-mcp):
   ```bash
   # Update package.json name to "@yourusername/youtube-video-summarizer-mcp" first
   npm publish --access public
   ```

2. Verify the package is published:
   ```bash
   npm view youtube-video-summarizer-mcp
   ```

## Updating the Package

1. Make your changes to the code

2. Update the version in package.json:
   ```bash
   npm version patch  # For bug fixes
   npm version minor  # For new features
   npm version major  # For breaking changes
   ```

3. Build and publish:
   ```bash
   npm run build
   npm publish
   ```

## Integration with Claude Desktop

Once published, users can integrate with Claude Desktop by adding to their claude_desktop_config.json:

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["-y", "youtube-video-summarizer-mcp"],
      "env": {
        "YOUTUBE_API_KEY": "optional_youtube_api_key"
      }
    }
  }
}
```

## Common Issues

- **"You must be logged in to publish packages"**: Run `npm login` again
- **"Package name already exists"**: Choose a different package name in package.json
- **"Version already exists"**: Update the version number in package.json
- **Permission issues**: Ensure you're the owner of the package name or use a scoped package
