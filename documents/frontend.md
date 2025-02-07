# Furniro Technical Foundation

# E-commerce Website - Frontend Documentation

## Technology Used
- **Framework**: Next.js (for server-side rendering and static site generation)
- **Styling**: Tailwind CSS (for responsive and modern UI design)

## Key Features
1. **Responsive Navbar**:
   - Fully responsive navigation bar.
   - Includes links to Home, Categories, Cart, and Account pages.
   - Hover effects implemented using Tailwind CSS.

2. **Homepage Design**:
   - Displays a hero section with featured products.

3. **Product Pages**:
   - Dynamic routing (`[id].tsx`) used for individual product pages.
   - Displays product details, images, price, and "Add to Cart" button.

4. **Shopping Cart**:
   - Cart page to show selected products.
   - Option to update quantity or remove items.

5. **Footer**:
   - Contains links to social media and contact information.

## File Structure
- **`src/app`**:
  - Contains all pages (e.g., Home, Products, Cart, Account,contact,blog,shop).
- **`src/components`**:
  - Reusable components like Navbar, Footer, Product Card,benifits,showmore etc.

  6. **Additional components**:
   - **Benefits**: Highlights key features or advantages of shopping from the website.
   - **Show More**: Interactive section to load or reveal additional content.


## Notes
- **Image Optimization**: All images are optimized using Next.js Image component for faster loading.
- **Dynamic Routing**: Each product page is dynamically generated using its unique ID.
- **Responsive Design**: Tailwind CSS utilities ensure compatibility across devices (mobile, tablet, desktop).
