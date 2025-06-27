🛒 React Shopping Cart with Routing
This is a simple React-based shopping cart application that demonstrates:

Product listing

Dynamic product details page

Add to Cart functionality

Routing with react-router-dom

A floating navigation button that adapts based on the current route

📁 Project Structure
css
Copy
Edit
src/
├── components/
│   ├── FloatingNavButton.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── pages/
│   ├── Cart.jsx
│   └── ItemDetails.jsx
├── App.jsx
├── main.jsx
└── index.css
🚦 Routing Setup
We use react-router-dom for navigation. Routes include:

Route	Description
/	Product listing (home)
/item/:id	Item details page
/cart	Shopping cart page

📦 Features
Product cards with image and title clickable

Dynamic routing using :id param

Cart navigation with floating button

Fully responsive with Tailwind CSS

🧰 Tech Stack
React

React Router DOM

Tailwind CSS

Vite (for fast development)