# Scoped Publishing Instructions

This document outlines the process for publishing scoped versions of the YouTube Video Summarizer tool.

## What is a Scoped Version?

A scoped version is a limited release of the YouTube Video Summarizer that:
- Is tailored for a specific user group or organization
- May have customized features or branding
- Uses a dedicated API key with usage limits
- Can be hosted on a custom subdomain

## Publishing Process

### 1. Preparation

- [ ] Create a new branch from the main codebase
- [ ] Update configuration to use the scoped API key
- [ ] Modify branding elements as specified in the scope document
- [ ] Update usage limits according to the licensing agreement
- [ ] Customize UI elements if required

### 2. Building

- [ ] Run the build process with scoped parameters
- [ ] Verify all custom elements are correctly implemented
- [ ] Test performance with expected load parameters
- [ ] Generate distribution package with proper versioning

### 3. Deployment

- [ ] Configure the hosting environment with the correct subdomain
- [ ] Deploy the scoped version to the staging environment
- [ ] Verify all functionality works as expected
- [ ] Monitor usage and performance metrics
- [ ] Promote to production once all tests pass

### 4. Documentation

- [ ] Update user documentation to reflect scoped features
- [ ] Create release notes specific to the scoped version
- [ ] Provide account administrators with access credentials
- [ ] Document any limitations or differences from the main version

## Maintenance

- Keep the scoped version in sync with security updates from the main branch
- Schedule regular reviews of usage metrics
- Plan for renewals and extensions as outlined in the agreement
- Document all customizations for future reference

## Troubleshooting

If you encounter issues during the scoped publishing process:

1. Verify configuration parameters match the scope document
2. Ensure API keys have the correct permissions
3. Check that branding assets meet the required specifications
4. Validate that usage limits are correctly implemented

For additional help, contact the DevOps team or refer to the main project documentation.
