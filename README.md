🌿 TrendSpire — Modern MERN E-Commerce Platform

TrendSpire is a fully responsive, feature-rich MERN stack E-Commerce website designed for a smooth and modern shopping experience.
It includes JWT authentication, admin product management, cart system, checkout flow, and a beautiful UI styled with TailwindCSS.

⭐ Live Features Overview

✅ User Registration & Login (JWT)
✅ Add to Cart / Update Quantity / Remove Items
✅ Product Listing + Product Details Page
✅ Checkout + Order Success Page
✅ Admin-only Product Creation
✅ Fully responsive mobile-first UI
✅ Modern navbar, testimonials, about section
✅ Clean, animated, premium-looking layout

🔐 Admin Login

Use these credentials to access the protected Admin Panel:

Email: admin@gmail.com
Password: admin123


Admin can:

Add new products

Upload product images

Set price, stock, and category

Access protected routes

Normal users cannot add or modify products.

🎨 Tech Stack
Frontend

React.js

React Router

Context API

Axios

TailwindCSS

Responsive UI + animations

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Secure API Middleware

📦 Project Folder Structure
TrendSpire
│
├── backend
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── auth
│   │   ├── App.jsx
│   │   └── api.js
│   └── index.css
│
└── README.md

🚀 Installation Guide
✅ 1. Clone Repository
git clone <repo-url>
cd TrendSpire

✅ 2. Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run server:

npm run dev


Backend runs at:
👉 http://localhost:3000

✅ 3. Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:
👉 http://localhost:5173

🧩 Core Functionality Explained
✅ Authentication (JWT)

Login/Register with secure validation

JWT stored in localStorage

Axios auto-adds Authorization header

Protected routes for Admin, Cart, Checkout

✅ Product System

View all products

View single product details

Add products (Admin only)

Products include title, description, images, price, stock, category

Backend routes:

GET /products
GET /products/:id
POST /products (admin only)

✅ User Cart System

Each user has their own cart stored in DB.

Features:

Add to Cart

Update Quantity

Remove Item

Auto-refresh UI

Total price calculation

Backend routes:

GET /cart
POST /cart/add
POST /cart/update
POST /cart/remove

✅ Order Placement

Enter delivery address

Create order

Auto-clear cart

Redirect to Order Success Page

📱 Responsive Pages
✅ Home Page

Product grid, hero section, categories.

✅ Product Details

High-quality images + add to cart.

✅ Cart Page

Full 3-column premium layout (auto-stacks on mobile).

✅ Testimonials

Customer feedback with avatars.

✅ About Us

Professional brand description.

✅ Admin Dashboard

Add products easily.

(You can now add your own screenshots here if you want)

🛡 Backend Security

Password hashing using bcrypt

JWT-based authentication

Admin check using middleware

Protected API routes

🤝 Contributions

Pull requests are welcome!
Fork this repo → Make changes → Open PR.

📝 License

This project is under the MIT License.

⭐ Support This Project

If TrendSpire helped or inspired you, please consider giving it a Star ⭐ on GitHub.
