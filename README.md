🚀 TrendSpire – Modern MERN E-Commerce Website
TrendSpire is a fully functional, responsive, and modern MERN Stack Ecommerce Website where users can explore products, add them to cart, place orders, and manage their accounts — while admins can add/manage products from a protected admin panel.

✅ Live Features
✅ User Features
🔐 User Authentication (Login/Register)

👤 JWT-based Protected Routes

🛍️ View All Products

📄 View Single Product Details

🛒 Add to Cart / Update Cart / Remove Items

💸 Place Order

✔️ Order Success Page

📱 Fully Responsive UI (Mobile + Desktop)

❤️ Stylish UI built using TailwindCSS

✅ Admin Features
Only admins can add new products.

🛂 Admin Login
makefile
Copy code
Email: admin@gmail.com
Password: admin123
✅ Admin Can:
➕ Add New Products

🖼️ Add Images

📦 Add Stock, Category, Price

🔒 Access Protected Admin Route

✅ JWT verifies isAdmin = true to allow product creation

If a user who is not an admin tries to add a product →
❌ Forbidden: admin only

✅ Tech Stack
🌐 Frontend
React.js

React Router

TailwindCSS

Axios

Context API for Authentication

Responsive UI Components

🔧 Backend
Node.js

Express.js

JWT Authentication

MongoDB + Mongoose

Middleware-based Access Control

✅ Key Functionalities Explained
🔹 1. Authentication System
Users can register and login.
Passwords are hashed using bcrypt.

When user logs in, backend returns:

token (JWT)

user object

Frontend stores:

token → localStorage

user → localStorage

Also stored in Context API so entire app knows user state.

🔹 2. Admin Access
Admin is created in MongoDB manually:

js
Copy code
{
  name: "Admin",
  email: "admin@gmail.com",
  password: "admin123",
  isAdmin: true
}
When admin logs in, token includes:

json
Copy code
{
  "id": "...",
  "isAdmin": true
}
Admin middleware:

js
Copy code
if (!req.user.isAdmin) return res.status(403).json({ error: "forbidden: admin only" })
So admin can:
✅ Add products
❌ Normal user cannot

🔹 3. Product Management
Admins can create products with fields:

Title

Description

Price

Stock

Category

Images

Public product routes:

GET /products → list all

GET /products/:id → single product details

🔹 4. Cart System
Users can:

Add product to cart

Change quantity

Remove item

View total price

Cart stored in MongoDB per user.

API:

GET /cart

POST /cart/add

POST /cart/update

POST /cart/remove

🔹 5. Order Placement
When user places an order:

Address is required

Order saved in database with:

User ID

Cart items

Total price

Timestamp

Then:
✅ Cart is cleared
✅ Redirect to Order Successful Page

🔹 6. Responsive UI / Modern Design
Navbar and footer fully responsive

Cart page is mobile-friendly

Product cards smooth hover animations

Trendy green theme

Hamburger menu on mobile

Testimonials & About Us pages

✅ Project Structure
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
✅ How to Run the Project
1️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create .env:

ini
Copy code
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret
Start server:

arduino
Copy code
npm run dev
2️⃣ Frontend Setup
arduino
Copy code
cd frontend
npm install
npm run dev
✅ Admin Instructions
Login using:

makefile
Copy code
Email: admin@gmail.com
Password: admin123
Go to Admin Panel /admin

Add products

They instantly appear on the home page

✅ Screens Included (If Added)
✅ Home
✅ Product List
✅ Product Details
✅ Cart
✅ Checkout
✅ Order Success
✅ Admin Dashboard
✅ Testimonials
✅ About Us

✅ Final Notes
TrendSpire is built to be a complete, modern, and scalable ecommerce platform.
You can expand it further by adding:

Wishlist

Payment Gateway

Search & Filters

Product Categories

Order History