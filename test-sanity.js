import { client } from './sanity/lib/client'

async function testSanityConnection() {
  try {
    console.log('Testing Sanity connection...')
    
    // Test basic connection
    const allDocs = await client.fetch('*[0..5]')
    console.log('All documents (first 5):', allDocs)
    
    // Test member documents specifically
    const members = await client.fetch('*[_type == "member"]')
    console.log('Member documents:', members)
    
    // Test with the full query
    const membersWithFields = await client.fetch(`
      *[_type == "member"] | order(_createdAt asc) {
        _id,
        name,
        position,
        image
      }
    `)
    console.log('Members with fields:', membersWithFields)
    
  } catch (error) {
    console.error('Sanity connection error:', error)
  }
}

testSanityConnection()
