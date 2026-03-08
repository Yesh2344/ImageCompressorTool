import { compressionQualityOptions } from './config';

export function validateCompressionQuality(quality) {
  if (quality < 1 || quality > 100) {
    throw new Error('Compression quality must be between 1 and 100');
  }

  if (!compressionQualityOptions.includes(quality)) {
    throw new Error('Compression quality must be one of the predefined options');
  }
}

export function compressImage(image, quality) {
  // Use a library like image-compression to compress the image
  // For demonstration purposes, this function simply returns the original image
  return image;
}