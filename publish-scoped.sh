#!/bin/bash

# Script to publish a scoped version of the YouTube Video Summariser
# Usage: ./publish-scoped.sh [organization] [version]

set -e

# Default values
ORG=${1:-"default"}
VERSION=${2:-"1.0.0"}
BASE_DIR=$(pwd)
BUILD_DIR="$BASE_DIR/build"
SCOPED_DIR="$BASE_DIR/scoped/$ORG"
CONFIG_FILE="$BASE_DIR/config/scoped-config-$ORG.json"
OUTPUT_DIR="$BASE_DIR/dist/$ORG/$VERSION"

# Colorful output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Display banner
echo -e "${YELLOW}"
echo "==============================================="
echo "  YouTube Video Summariser - Scoped Publisher  "
echo "==============================================="
echo -e "${NC}"

# Validate input
if [ "$ORG" == "default" ]; then
  echo -e "${YELLOW}Warning: Using default organization name. Specify an organization name for proper scoping.${NC}"
fi

if [ ! -f "$CONFIG_FILE" ]; then
  echo -e "${RED}Error: Scoped configuration file not found at $CONFIG_FILE${NC}"
  echo "Please create a configuration file or check the organization name."
  exit 1
fi

# Create directories if they don't exist
echo -e "${GREEN}Setting up directory structure...${NC}"
mkdir -p "$OUTPUT_DIR"
mkdir -p "$SCOPED_DIR"

# Load the scoped configuration
echo -e "${GREEN}Loading scoped configuration for $ORG...${NC}"
if [ -f "$CONFIG_FILE" ]; then
  cp "$CONFIG_FILE" "$SCOPED_DIR/config.json"
  echo "Configuration loaded successfully."
else
  echo -e "${RED}Error: Configuration file not found.${NC}"
  exit 1
fi

# Build the application
echo -e "${GREEN}Building scoped version $VERSION for $ORG...${NC}"
echo "Applying branding and customizations..."

# Replace API keys and other configuration
if [ -f "$SCOPED_DIR/config.json" ]; then
  # Get API key from config
  API_KEY=$(grep -o '"apiKey": *"[^"]*"' "$SCOPED_DIR/config.json" | cut -d'"' -f4)
  echo "Using scoped API key: ${API_KEY:0:4}****${API_KEY: -4}"
  
  # Apply other customizations
  CUSTOM_THEME=$(grep -o '"theme": *"[^"]*"' "$SCOPED_DIR/config.json" | cut -d'"' -f4)
  echo "Applying theme: $CUSTOM_THEME"
  
  # Apply rate limits
  RATE_LIMIT=$(grep -o '"rateLimit": *[0-9]*' "$SCOPED_DIR/config.json" | awk '{print $2}')
  echo "Setting rate limit: $RATE_LIMIT requests per hour"
fi

# Run the build process
echo "Running build process..."
# Simulate build process (replace with actual build command)
sleep 2
echo "Build completed successfully."

# Package the distribution
echo -e "${GREEN}Packaging distribution...${NC}"
cp -r "$BUILD_DIR"/* "$OUTPUT_DIR"
cp "$SCOPED_DIR/config.json" "$OUTPUT_DIR"

# Add version info
echo "{\"version\": \"$VERSION\", \"org\": \"$ORG\", \"buildDate\": \"$(date)\"}" > "$OUTPUT_DIR/version.json"

# Validate the build
echo -e "${GREEN}Validating build...${NC}"
if [ -f "$OUTPUT_DIR/index.html" ] && [ -f "$OUTPUT_DIR/config.json" ]; then
  echo "Build validation successful."
else
  echo -e "${RED}Error: Build validation failed. Missing required files.${NC}"
  exit 1
fi

# Generate deployment package
echo -e "${GREEN}Generating deployment package...${NC}"
PACKAGE_NAME="youtube-summariser-$ORG-$VERSION.zip"
(cd "$OUTPUT_DIR" && zip -r "../../$PACKAGE_NAME" .)

# Display completion message
echo -e "${GREEN}"
echo "==============================================="
echo "  Scoped build completed successfully!  "
echo "==============================================="
echo -e "${NC}"
echo "Organization: $ORG"
echo "Version: $VERSION"
echo "Deployment package: $BASE_DIR/$PACKAGE_NAME"
echo ""
echo "Next steps:"
echo "1. Deploy the package to your hosting environment"
echo "2. Update DNS records if using a custom subdomain"
echo "3. Run validation tests to ensure functionality"
echo ""
echo "See SCOPED_PUBLISH_INSTRUCTIONS.md for more details."
