import React, { useState } from 'react';
import { validateCompressionQuality, compressImage } from './utils';

function ImageCompressor() {
  const [image, setImage] = useState(null);
  const [compressionQuality, setCompressionQuality] = useState(50);
  const [compressedImage, setCompressedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCompressionQualityChange = (event) => {
    setCompressionQuality(parseInt(event.target.value));
  };

  const handleCompress = () => {
    try {
      validateCompressionQuality(compressionQuality);
      const compressed = compressImage(image, compressionQuality);
      setCompressedImage(compressed);
      setError(null);
    } catch (error) {
      setError(error.message);
      setCompressedImage(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <select value={compressionQuality} onChange={handleCompressionQualityChange}>
        {compressionQualityOptions.map((quality) => (
          <option key={quality} value={quality}>
            {quality}%
          </option>
        ))}
      </select>
      <button onClick={handleCompress}>Compress</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {compressedImage && (
        <a href={URL.createObjectURL(compressedImage)} download="compressed-image">
          Download Compressed Image
        </a>
      )}
    </div>
  );
}

export default ImageCompressor;