# furniro Technical Foundation
# E-commerce Website - Backend Documentation

## Technology Used
- **Backend**: Sanity CMS (for content management)
- **Database**: Sanity's built-in database for storing product information, categories, and other dynamic content.
- **API**: Sanity's GraphQL or REST API (for interacting with the content from the frontend)

## Key Features
1. **Content Management**:
   - Sanity provides a flexible CMS to manage products, categories, and blog posts.
   - Real-time updates when content is changed in Sanity Studio.

2. **Product API**:
   - Products data fetched using Sanity’s REST or GraphQL API.
   - Fetches product details, images, prices, etc., for frontend display.

3. **Dynamic Content Handling**:
   - Handles dynamic routing for product pages, allowing products to be accessed based on their unique IDs.
   - Product details, images, and pricing data are fetched dynamically via the API.

4. **Backend Authentication**:
   - Sanity Studio provides a secure interface for managing and authenticating content creators.

## How to Set Up the Backend
1. Create a Sanity Project:
   - Visit [Sanity.io](https://www.sanity.io/) and sign up or log in.
   - Create a new project and select a dataset.
   - Install Sanity Studio:
     ```
     npm install -g @sanity/cli
     sanity init
     ```

2. Define Schema for Products and Categories:
   - In your Sanity Studio project, define schemas for products, categories, and any other content types.
   - Example of schema definition for a product:
     ```javascript
     export default {
       name: 'product',
       title: 'Product',
       type: 'document',
       fields: [
         { name: 'title', type: 'string' },
         { name: 'price', type: 'number' },
         { name: 'image', type: 'image' },
         { name: 'description', type: 'text' },
         { name: 'category', type: 'reference', to: [{ type: 'category' }] }
       ]
     }
     ```

3. Set Up API Endpoints:
   - For REST API, use Sanity's built-in endpoints to fetch content:
     - Example: `https://<project-id>.api.sanity.io/v1/data/query/production?query=*[_type=="product"]`
   - For GraphQL, enable the GraphQL API in Sanity Studio, and use a query like:
     ```graphql
     {
       allProduct {
         title
         price
         image {
           asset {
             url
           }
         }
       }
     }
     ```

4. Use Sanity in the Frontend:
   - In the frontend, use a library like `@sanity/client` to connect to Sanity's API and fetch data for products, categories, etc.
     ```bash
     npm install @sanity/client
     ```
   - Example of fetching data in Next.js:
     ```javascript
     import sanityClient from '@sanity/client'

     const client = sanityClient({
       projectId: '<project-id>',
       dataset: 'production',
       useCdn: true
     })

     const query = '*[_type == "product"]'
     const products = await client.fetch(query)
     

## API Endpoints
- **Product Data**: Fetch all products
  - REST: `GET /v1/data/query/production?query=*[_type=="product"]`
  - GraphQL: `allProduct { title, price, image { asset { url } } }`
  
- **Category Data**: Fetch categories
  - REST: `GET /v1/data/query/production?query=*[_type=="category"]`
  - GraphQL: `allCategory { title }`

## Notes
- **Authentication**: Sanity Studio uses role-based authentication for users and content editors.
- **Real-time Updates**: Changes made in Sanity Studio are reflected in real-time on the frontend.

