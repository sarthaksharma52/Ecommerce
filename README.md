# TrendSpire – MERN E-Commerce App

A modern and fully functional e-commerce platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
Users can browse products, view details, add items to their cart, checkout, and place orders.  
An admin panel is included for complete product management.

---

## Features

- **User Authentication**: Secure registration and login.
- **Browse Products**: View all available products with images, price, and descriptions.
- **Product Details Page**: Access full details about each product.
- **Add to Cart**: Add items, update quantities, or remove items.
- **Checkout & Order Placement**: Smooth and simple order workflow.
- **Admin Panel**: Add, edit, delete, and manage products.
- **Responsive UI**: Works across all screen sizes.

---

## Admin Credentials (For Testing)

Email: admin@gmail.com

Password: admin123


Use these to log in to the admin panel and test product management.

---

## Technologies Used

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT + Cookies  
- **State Management**: Context API / Redux  

---

## Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/your-username/TrendSpire.git
    cd TrendSpire
    ```

2. **Install backend dependencies**
    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies**
    ```sh
    cd ../frontend
    npm install
    ```

4. **Set up environment variables**  
   Create a `.env` file inside the **backend** folder:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    PORT=5000
    ```

5. **Start the backend server**
    ```sh
    cd backend
    npm run dev
    ```

6. **Start the frontend app**
    ```sh
    cd frontend
    npm start
    ```

---

## Usage

1. Register/Login as a user to browse and shop products.  
2. Add items to the cart from product list or product detail page.  
3. Update or remove items in the cart.  
4. Proceed to checkout and place an order.  
5. Log in as **Admin** using the provided credentials to:
   - Add new products  
   - Edit existing products  
   - Delete products  

---

## File Structure

```plaintext
TrendSpire/
├── backend/
│   ├── controllers/        # Route logic
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── middlewares/        # Auth middleware
│   ├── server.js           # App entry point
│   └── .env                # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Main pages (Home, Cart, Product, Admin)
│   │   ├── context/        # State management
│   │   └── App.js          # Root React component
│   └── package.json
│
├── README.md
└── package.json


Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

License

This project is licensed under the MIT License.
See the LICENSE file for more details.

Acknowledgements

React.js – https://react.dev
Node.js – https://nodejs.org
Express.js – https://expressjs.com
MongoDB – https://www.mongodb.com
JWT – https://jwt.io
