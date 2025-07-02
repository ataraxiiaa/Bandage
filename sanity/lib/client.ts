import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

// Fallback values for production
const config = {
  projectId: projectId || '0v1k4re1',
  dataset: dataset || 'bandageset',
  apiVersion: apiVersion || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
  perspective: 'published' as const, // Only fetch published documents
}

console.log('Sanity client config:', config)

if (!config.projectId || !config.dataset) {
  throw new Error('Missing Sanity project configuration. Please check your environment variables.')
}

export const client = createClient(config)
