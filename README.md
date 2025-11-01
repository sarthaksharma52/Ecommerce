🌿 TrendSpire – Modern MERN E-Commerce Website
A sleek, responsive, full-stack eCommerce platform built with the MERN stack.



TrendSpire delivers a modern shopping experience with secure authentication, cart management, admin-only product controls, and a fully responsive UI inspired by premium e-commerce websites.

🚀 Features
✅ User Features
🔐 Authentication — Login & Register (JWT-based)

🛍️ Browse All Products

📄 View Detailed Product Pages

🛒 Add to Cart / Update Quantity / Remove Items

💳 Checkout & Place Orders

🎉 Order Success Page

📱 Fully Responsive Mobile + Desktop

🌿 Stylish UI built using TailwindCSS

💾 Cart & user state preserved using Context + LocalStorage

✅ Admin Features
(Admin route protected using JWT + isAdmin flag)

🔐 Admin Credentials

makefile
Copy code
Email: admin@gmail.com
Password: admin123
✅ Admin can:

➕ Create NEW products

🖼️ Add product images

💲 Add price, stock, category

✅ Access protected /admin route

❌ Normal users CANNOT add products
✅ Middleware ensures role-based access

🏗 Tech Stack
Frontend
React.js

React Router

Context API

Axios

TailwindCSS

Responsive design with animations

Backend
Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Middleware-based API protection

📌 Project Structure
bash
Copy code
/backend
  /models
  /routes
  /middleware
  server.js

/frontend
  /src
    /components
    /pages
    /auth
    api.js
    App.jsx
📦 Installation & Setup
✅ 1. Clone the Repository
bash
Copy code
git clone <repo-url>
cd TrendSpire
✅ 2. Backend Setup
bash
Copy code
cd backend
npm install
Create .env:

ini
Copy code
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
Run backend:

arduino
Copy code
npm run dev
Backend will run at:

arduino
Copy code
http://localhost:3000
✅ 3. Frontend Setup
arduino
Copy code
cd frontend
npm install
npm run dev
Frontend will run at:

arduino
Copy code
http://localhost:5173
🧩 Core Functionalities in Detail
🔹 Authentication
Password hashed using bcrypt

JWT token stored in localStorage

Axios automatically attaches token

Protected routes for cart, checkout, admin

🔹 Product System
Public product listing

Detailed product page

Admin-only add/remove product access

API Endpoints:

bash
Copy code
GET /products
GET /products/:id
POST /products  (admin only)
🔹 Cart System
Each user has their own cart stored in DB.

Endpoints:

bash
Copy code
GET /cart
POST /cart/add
POST /cart/update
POST /cart/remove
Supports:
✅ Add to cart
✅ Change quantity
✅ Remove item
✅ Auto-refresh cart UI

🔹 Order Placement
User enters delivery address

Order saved in database

Cart auto-clears

Redirect → Order Successful Page

🖼 Screenshots
✅ Home Page
🛒 Clean product grid, modern UI, responsive layout.

✅ Product Page
High-quality images, title, price, description, add-to-cart button.

✅ Cart Page
Full-width responsive layout inspired by premium stores.

✅ Checkout & Order Success
Simple, minimal, clear UI.

✅ Admin Panel
Product creation with all fields:
title, description, images, price, stock, category.

(Add your actual screenshots here)

👨‍💻 Admin Authentication Logic
The backend assigns:

json
Copy code
{
  "id": "user-id",
  "isAdmin": true
}
Middleware:

js
Copy code
if (!req.user.isAdmin) {
   return res.status(403).json({ error: "forbidden: admin only" });
}
❤️ Why TrendSpire?
TrendSpire is designed to be:
✅ Scalable
✅ Clean & maintainable
✅ Beginner-friendly
✅ Production-ready
✅ Customizable for real-world e-commerce

📄 License
This project is licensed under the MIT License.

⭐ Show Your Support
If this project helped you, give it a star 🌟 on GitHub!