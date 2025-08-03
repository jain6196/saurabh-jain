#!/bin/bash

# -------------------------
# Configuration
REPO="saurabh-jain"
USERNAME="saurabhj4in"
BRANCH="gh-pages"
BUILD_DIR="dist"
MESSAGE="Deploy latest build to GitHub Pages"
# -------------------------

echo "🚀 Building the project..."
npm install
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Fix errors and try again."
  exit 1
fi

echo "🔄 Switching to $BRANCH branch..."
git checkout $BRANCH 2>/dev/null || git checkout --orphan $BRANCH

echo "🧹 Cleaning old files..."
git rm -rf . > /dev/null 2>&1

echo "📂 Copying files from $BUILD_DIR..."
cp -r $BUILD_DIR/* .
touch .nojekyll

echo "📦 Committing changes..."
git add .
git commit -m "$MESSAGE"

echo "🚀 Pushing to GitHub..."
git push origin $BRANCH --force

echo "✅ Deployed!"
echo "🌍 Visit: https://$USERNAME.github.io/$REPO/"
