#!/bin/bash

# Set to exit on error
set -e

echo "Building YouTube Video Summarizer MCP..."
echo "========================================"

# Ensure we have the latest dependencies
echo "Installing dependencies..."
npm install
echo "✅ Dependencies installed"

# Clean previous build
echo "Cleaning previous build..."
rm -rf dist
echo "✅ Previous build cleaned"

# Build the project
echo "Building TypeScript project..."
npm run build
echo "✅ Build complete"

echo
echo "YouTube Video Summarizer MCP has been built successfully!"
echo "You can find the built files in the 'dist' directory."
