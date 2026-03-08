# Image Compressor Tool

A production-ready React application for compressing images.

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/com/your-username/image-compressor-tool.svg?branch=main)](https://travis-ci.com/your-username/image-compressor-tool)
[![Code Coverage](https://img.shields.io/codecov/c/github/your-username/image-compressor-tool.svg)](https://codecov.io/gh/your-username/image-compressor-tool)

## Installation
To install and run the application, follow these steps:
1. Clone the repository using `git clone https://github.com/your-username/image-compressor-tool.git`
2. Install dependencies using `npm install`
3. Create a new `.env` file and populate it with the required environment variables (see `.env.example` for reference)
4. Start the application using `npm start`

## Usage
1. Open the application in a web browser at `http://localhost:3000`
2. Upload an image file using the file input element
3. Select the desired compression quality using the dropdown menu
4. Click the "Compress" button to compress the image
5. Download the compressed image file

## API Documentation
The application exposes the following API endpoints:
* `POST /compress`: Compress an image file
* Request Body:
	+ `image`: The image file to compress
	+ `quality`: The desired compression quality (integer between 1 and 100)
* Response:
	+ `compressedImage`: The compressed image file

## Contributing
Contributions are welcome! To contribute, please fork the repository and submit a pull request.