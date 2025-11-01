TrendSpire 🛍️ | MERN E-Commerce Platform

TrendSpire is a full-stack MERN e-commerce application where users can browse products, view details, add items to their cart, checkout, and place orders.
An admin can manage the entire product catalog through a secure admin panel.

✅ Features
🛒 User Features

Browse all available products

View complete product details

Add items to cart

Update/remove items from cart

Proceed to checkout

Place orders with stored shipping info

View past orders (if implemented)

🛠️ Admin Features

Secure login

Add new products

Edit/update product details

Delete products

Manage inventory

View all orders (if implemented)

🔐 Admin Credentials (For Testing)
Email: admin@gmail.com
Password: admin123

🚀 Tech Stack (MERN)
Layer	Technology
Frontend	React.js
Backend	Node.js + Express.js
Database	MongoDB
State Mgmt	Context API / Redux (if used)
Auth	JWT + Cookies
📂 Project Structure
TrendSpire/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── context/ (or redux/)
│   └── App.js
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/TrendSpire.git
cd TrendSpire

2️⃣ Install Dependencies
Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

3️⃣ Environment Variables

Create a .env file inside backend:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

4️⃣ Run the Project
Start Backend:
cd backend
npm run dev

Start Frontend:
cd frontend
npm start

✅ Screenshots (Add Later)

You can insert product page, cart page, admin panel screenshots here.

📦 API Overview
Products

GET /api/products

GET /api/products/:id

POST /api/products (Admin)

PUT /api/products/:id (Admin)

DELETE /api/products/:id (Admin)

Cart

POST /api/cart/add

GET /api/cart/

DELETE /api/cart/remove/:id

Auth

POST /api/auth/login

POST /api/auth/register

Orders

POST /api/orders

GET /api/orders/user

🧪 Admin Login for Testing
Email: admin@gmail.com
Password: admin123


Use this to access product management features.

🤝 Contributing

Pull requests are welcome — fork the repo and go ahead.

📄 License

MIT License.
