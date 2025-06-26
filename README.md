
🛒 Client – Shopping List App (React + MobX)
📌 Overview
This is the client-side shopping list project, built using React with TypeScript and managed with MobX. It provides a simple, responsive user interface for adding products by name and category, displaying them in a categorized list, and submitting the shopping cart to the backend server.

🧩 Key Features
✅ React + TypeScript
Built with React (TypeScript)

UI components styled using Material-UI 

Clean and maintainable code structure

✅ Responsive Design
Fully mobile-friendly layout

Responsive Grid system from MUI ensures optimal display on all screen sizes

✅ State Management with MobX
Centralized store for managing shopping cart state

Automatically updates quantities if the product already exists

Cart data is kept in memory until submitted

🖼️ Page Functionality
Free Text Field to add a product name

Categories Dropdown to choose a category

On submit, product is added to the relevant category list below

If the product already exists, its quantity increases

Total Items Display at the top (e.g., "Total Items: 3")

Product List Display categorized at the bottom of the page

Submit Button to finalize the order

Sends the cart data to the server via API (/api/order/)

📂 Project Structure
bash
Copy
Edit
/client
 ├── /src
 │   ├── /stores         # MobX store (CartStore)
 │   ├── /components     # UI components (ProductInput, CategorySelect, CartList, TotalItems, SubmitButton)
 │   ├── /api            # API calls
 │   ├── /models         # TypeScript interfaces (Product, Category, CartItem)
 │   └── App.tsx         # Root component
 ├── package.json
 └── tsconfig.json
🔌 API Communication
GET /api/categories – fetch predefined categories from the server

POST /api/cart/save – submit the shopping cart data to backend

🚀 Installation & Running
✅ Prerequisites
Node.js v14+

npm or yarn

Backend server running on appropriate port

💻 Setup
bash
Copy
Edit
# Navigate to client folder
cd client

# Install dependencies
npm install

# Run development server
npm start
The app runs by default at http://localhost:3000.

📦 Deployment Ready
Fully responsive for desktop and mobile

Supports environment variables for dynamic backend URL configuration
