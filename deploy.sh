#!/bin/bash

echo "========================================"
echo "  Daily Spending Organizer - Deployer"
echo "========================================"
echo ""

echo "Step 1: Adding all changes to Git..."
git add .
if [ $? -ne 0 ]; then
    echo "ERROR: Git add failed!"
    exit 1
fi

echo ""
echo "Step 2: Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update: Latest changes"
fi

git commit -m "$commit_msg"
if [ $? -ne 0 ]; then
    echo "WARNING: Nothing to commit or commit failed"
fi

echo ""
echo "Step 3: Pushing to GitHub main branch..."
git push origin main
if [ $? -ne 0 ]; then
    echo "ERROR: Push to GitHub failed!"
    echo "Make sure you have set up the remote repository."
    exit 1
fi

echo ""
echo "Step 4: Building and deploying to GitHub Pages..."
npm run deploy
if [ $? -ne 0 ]; then
    echo "ERROR: Deployment failed!"
    exit 1
fi

echo ""
echo "========================================"
echo "  DEPLOYMENT SUCCESSFUL!"
echo "========================================"
echo ""
echo "Your website should be live at:"
echo "https://kathirvelan210.github.io/daily-spending-organizer"
echo ""
echo "Note: It may take 2-5 minutes to update."
echo ""