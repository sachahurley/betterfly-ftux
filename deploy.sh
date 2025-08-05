#!/bin/bash

# Betterfly FTUX Auto-Deploy Script
# This script automatically commits and pushes changes to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting Betterfly FTUX deployment..."

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Make sure you're in the project directory."
    exit 1
fi

# Add all changes
echo "📦 Adding changes..."
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to deploy."
    exit 0
fi

# Get commit message from user or use default
if [ -z "$1" ]; then
    COMMIT_MSG="Update Betterfly FTUX components $(date '+%Y-%m-%d %H:%M')"
else
    COMMIT_MSG="$1"
fi

echo "💾 Committing changes: $COMMIT_MSG"
git commit -m "$COMMIT_MSG

🚀 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🔗 Your site will be updated at: https://sachahurley.github.io/betterfly-ftux/"
echo "⏱️  Changes may take 1-2 minutes to appear online."