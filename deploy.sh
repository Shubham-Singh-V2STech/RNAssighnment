#!/bin/bash

# Load environment variables
if [ -f .env ]; then
  export TESTFAIRY_KEY=$(grep '^TESTFAIRY_KEY=' .env | cut -d '=' -f2-)
fi

# Extract app name from package.json
APP_NAME=$(grep '"name"' package.json | head -1 | awk -F: '{print $2}' | tr -d '", ')

# Extract version name from build.gradle
VERSION_NAME=$(grep "versionName" android/app/build.gradle | head -1 | cut -d '"' -f2)

# Set original APK file path
APK_FILE_PATH="android/app/build/outputs/apk/release/app-universal-release.apk"

# Define the new APK file name
NEW_APK_FILE_PATH="android/app/build/outputs/apk/release/${APP_NAME}-v-${VERSION_NAME}.apk"

# 1. Delete node_modules
rm -rf node_modules

# 2. Delete package-lock.json (correct file name)
rm package-lock.json

# 3. Install dependencies
npm i --legacy-peer-deps

# 4. Clean Gradle build
cd android && ./gradlew clean && cd ..

# 5. Build APK
npm run release

# Check if the original APK file exists before renaming
if [ ! -f "$APK_FILE_PATH" ]; then
  echo "Error: APK file not found"
  exit 1
fi

# Rename APK file
mv "$APK_FILE_PATH" "$NEW_APK_FILE_PATH"

# Check if renaming was successful
if [ ! -f "$NEW_APK_FILE_PATH" ]; then
  echo "Error: APK renaming failed"
  exit 1
fi

# Check if API key is set
if [ -z "$TESTFAIRY_KEY" ]; then
  echo "Error: API key is not set"
  exit 1
fi

# Read release notes from a file or allow manual input
if [ -f "testfairy-release-notes.txt" ]; then
  RELEASE_NOTES=$(cat testfairy-release-notes.txt)
else
  echo "Enter release notes:"
  read RELEASE_NOTES
fi

# 6. Deploy to TestFairy with Release Notes
curl -v -X POST \
https://upload.testfairy.com/api/upload \
-F api_key="$TESTFAIRY_KEY" \
-F file=@"$NEW_APK_FILE_PATH" \
-F groups='INT-TEAM' \
-F notify='on' \
-F comment="$RELEASE_NOTES"

# Check if deployment was successful
if [ $? -ne 0 ]; then
  echo "Error: Deployment failed"
  exit 1
fi

echo "Deployment successful!"
