import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'


const config = {
  projectId: projectId || '0v1k4re1',
  dataset: dataset || 'bandageset',
  apiVersion: apiVersion || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production', 
  perspective: 'published' as const, 
}

console.log('Sanity client config:', config)

if (!config.projectId || !config.dataset) {
  throw new Error('Missing Sanity project configuration. Please check your environment variables.')
}

export const client = createClient(config)
