#!/bin/bash

# Set to exit on error
set -e

echo "YouTube Video Summarizer MCP - NPM Publish Helper"
echo "================================================"

# Check if user is logged in to npm
echo "Checking npm login status..."
npm whoami > /dev/null 2>&1 || { 
  echo "Error: You are not logged in to npm. Please run 'npm login' first."
  exit 1
}
echo "✅ Logged in to npm"

# Ensure we have the latest dependencies
echo "Installing dependencies..."
npm install
echo "✅ Dependencies installed"

# Build the project
echo "Building project..."
npm run build
echo "✅ Build complete"

# Verify the version
VERSION=$(node -e "console.log(require('./package.json').version)")
echo "Current version: $VERSION"
echo

# Ask for confirmation
read -p "Ready to publish version $VERSION to npm? (y/n) " CONFIRM
if [[ $CONFIRM != "y" && $CONFIRM != "Y" ]]; then
  echo "Publish canceled"
  exit 0
fi

# Publish to npm
echo "Publishing to npm..."
npm publish --access public
echo "✅ Published to npm"

echo
echo "YouTube Video Summarizer MCP v$VERSION has been published!"
echo "NPM package: https://www.npmjs.com/package/youtube-video-summarizer-mcp"
