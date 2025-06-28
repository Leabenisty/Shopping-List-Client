# 🛒 Shopping List App – Client  
*React + TypeScript + MobX + Material-UI + Vite*

🔗 [Live App – http://shopping-list.ddns.net](http://shopping-list.ddns.net)

---

## 📌 Overview

This is the **client-side** of the Shopping List application, developed using **React** and **TypeScript**, with state management by **MobX** and UI styling through **Material-UI (MUI)**.  
The app allows users to add products by name and category, view them in a categorized list, and submit the shopping cart to the backend server.

---

## 🌩️ Deployment to the Cloud

This project has been deployed to the cloud using **AWS** infrastructure:
- ✅ **DDNS + custom domain** – Makes the app publicly accessible
- 🟢 **Live at:** [http://shopping-list.ddns.net](http://shopping-list.ddns.net)

---

## 🧩 Key Features

- ✅ **Modern Stack:** React + TypeScript + Vite + MobX + MUI  
- ✅ **Responsive Design:** Mobile-friendly using MUI's Grid system  
- ✅ **Smart Cart:** Automatically increases product quantity if already exists  
- ✅ **Categorized List:** Products are grouped by category  
- ✅ **Live API Integration:** Communicates with backend server in real time

---

## 🖼️ Main Functionality

- **Add Products** by name (free text)
- **Select Category** from dropdown
- **View Products** grouped by category
- **Increase Quantity** for existing items
- **Total Item Count** displayed at the top
- **Submit Cart** via `POST /api/cart/save`

## 🛠️ Additional Features

To improve the user experience and prevent invalid submissions, the following client-side validations were added using SweetAlert2:

- ❌ **Product name is required**  
  An alert appears if the user tries to add a product without entering a name.

- ❌ **Category must be selected**  
  An alert appears if the user tries to add a product without choosing a category.

- ❌ **Cannot submit an empty cart**  
  If the user clicks "Submit Order" without any products, a SweetAlert2 popup notifies them that the cart is empty.

✨ These validations guide the user and ensure complete, valid data is submitted to the backend.


## 📂 Project Structure

/client
├── /src
│ ├── /api # Axios API functions
│ ├── /components # UI components (input, select, list, etc.)
│ ├── /models # TypeScript interfaces
│ ├── /stores # MobX store (CartStore)
│ └── App.tsx # Root component
├── index.html
├── package.json
└── vite.config.ts


---

## 🚀 Installation & Running the App Locally

### ✅ Prerequisites

- Node.js v14 or higher
- npm 
- Backend server running on the correct port (e.g., `http://localhost:3000`)

### 💻 Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/Leabenisty/Shopping-List-Client.git
cd shopping-list-client

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
