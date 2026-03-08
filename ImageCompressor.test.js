# Minor edit
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ImageCompressor } from './ImageCompressor';

describe('ImageCompressor component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ImageCompressor />);
    expect(getByText('Compress')).toBeInTheDocument();
  });

  it('handles image upload', () => {
    const { getByLabelText } = render(<ImageCompressor />);
    const fileInput = getByLabelText('Choose an image file');
    fireEvent.change(fileInput, { target: { files: ['image.jpg'] } });
    expect(fileInput.files).toHaveLength(1);
  });

  it('handles compression quality change', () => {
    const { getByLabelText } = render(<ImageCompressor />);
    const qualitySelect = getByLabelText('Compression quality');
    fireEvent.change(qualitySelect, { target: { value: '50' } });
    expect(qualitySelect.value).toBe('50');
  });

  it('handles compress button click', async () => {
    const { getByText } = render(<ImageCompressor />);
    const compressButton = getByText('Compress');
    fireEvent.click(compressButton);
    await waitFor(() => expect(getByText('Download Compressed Image')).toBeInTheDocument());
  });
});