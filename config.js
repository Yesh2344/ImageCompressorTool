import dotenv from 'dotenv';

dotenv.config();

export const apiEndpoint = process.env.API_ENDPOINT;
export const compressionQualityOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const defaultCompressionQuality = 50;