# Expo DocumentPicker Cloud Storage File Access Issue

This repository demonstrates a common issue encountered when using Expo's DocumentPicker to select files from cloud storage services like Google Drive or Dropbox. The picker returns a URI that points to the file's location in the cloud, not a local path.  This example shows the problem and a solution.

## Problem

The `DocumentPicker.getDocumentAsync()` method returns a URI that cannot be directly used for file access using standard local file system methods. Attempting to do so will result in an error indicating the file path is invalid.

## Solution

The solution depends on the cloud storage service used. In most cases, you'll need to use a specific method to access the file via its cloud storage URI, instead of treating it as a local file.

This example demonstrates a solution by presenting a message indicating the cloud URI rather than attempting to process the file directly.  A more robust solution would fetch the file content from the cloud storage using the provided URI and an appropriate API.

## Usage

1. Clone this repository.
2. Run `npm install` to install the required packages.
3. Run the app using Expo Go or a simulator.