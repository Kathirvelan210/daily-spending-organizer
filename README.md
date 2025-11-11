# 💰 Daily Spending Organizer - React Project

A complete beginner-friendly React application for tracking expenses, managing shopping carts, and organizing daily spending with role-based authentication.

## 🚀 Features Implemented

### 1️⃣ **Routing Setup**
- ✅ React Router DOM v6 with BrowserRouter
- ✅ Complete route structure:
  - `/` → Home (Landing Page)
  - `/about` → About Page
  - `/products` → Products Page with Filters
  - `/cart` → Shopping Cart (Protected)
  - `/dashboard` → User Dashboard (Protected)
  - `/admin` → Admin Dashboard (Protected, Admin Only)
  - `/login` → Login Page
  - `/signup` → Signup Page
  - `/contact` → Contact Page
  - `*` → Custom 404 Page

### 2️⃣ **Header Component**
- ✅ Logo on the left
- ✅ Navigation links using `<Link>` tags
- ✅ Conditional rendering (hidden on login/signup pages)
- ✅ Cart badge showing item count
- ✅ User welcome message with role indicator
- ✅ Responsive design with external CSS

### 3️⃣ **Role-Based Authentication**
- ✅ Login and Signup pages with form validation
- ✅ `useState` for managing form inputs
- ✅ User data stored in localStorage (username, email, password, role)
- ✅ Role-based navigation:
  - Admin users → `/admin` dashboard
  - Regular users → `/dashboard`
- ✅ `useNavigate()` for programmatic navigation
- ✅ Protected routes using PrivateRoute component

### 4️⃣ **Conditional Header Rendering**
- ✅ Header shown only when user is logged in
- ✅ Hidden on Login and Signup pages
- ✅ Uses `useLocation()` to detect current page

### 5️⃣ **Dynamic Data Display**
- ✅ 20 products with complete details (name, price, category, rating, stock, image, description)
- ✅ `.map()` used to display all products dynamically
- ✅ `.filter()` for category and price range filtering
- ✅ Real product images from Unsplash

### 6️⃣ **Props-Based Components**
- ✅ `ProductCard` component receives props:
  - `product` (object with all product details)
  - `showQuantity` (boolean)
  - `showRating` (boolean)
  - `isCartPage` (boolean)
- ✅ Reusable across Products and Cart pages

### 7️⃣ **Cart Functionality**
- ✅ Global CartContext for state management
- ✅ Add to cart functionality
- ✅ Remove from cart
- ✅ Update quantity with +/- buttons
- ✅ Cart data persisted in localStorage
- ✅ Total price calculation
- ✅ Cart item count in header badge
- ✅ Clear cart option
- ✅ Checkout functionality

### 8️⃣ **Additional Pages**
- ✅ **Home Page** - Landing page with hero section and features
- ✅ **About Page** - Information about the application
- ✅ **Contact Page** - Functional contact form with localStorage
- ✅ **404 Page** - Creative "Page Not Found" message
- ✅ **Admin Dashboard** - User management and statistics (admin only)

### 9️⃣ **Styling & UI**
- ✅ External CSS files (App.css, index.css)
- ✅ Consistent color scheme (purple gradient theme)
- ✅ Modern glassmorphism design
- ✅ Smooth hover and transition effects
- ✅ Fully responsive for mobile devices
- ✅ Beautiful animations and fade-in effects
- ✅ Custom scrollbar styling

### 🔟 **Local Storage Usage**
- ✅ User authentication data
- ✅ All registered users
- ✅ Shopping cart items
- ✅ Contact form submissions
- ✅ Expense tracking data

## 📁 Project Structure

```
com/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Header.jsx          # Navigation header with cart badge
│   │   ├── ProductCard.jsx     # Reusable product display component
│   │   ├── PrivateRoute.jsx    # Route protection component
│   │   ├── ExpenseForm.jsx     # Expense input form
│   │   └── ExpenseList.jsx     # Display expense list
│   ├── Context/
│   │   ├── AuthContext.js      # Authentication state management
│   │   ├── CartContext.jsx     # Shopping cart state management
│   │   └── ExpenseContext.jsx  # Expense tracking state
│   ├── Pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Login.jsx           # Login page
│   │   ├── Signup.jsx          # Signup with role selection
│   │   ├── Dashboard.js        # User dashboard
│   │   ├── Admin.jsx           # Admin dashboard
│   │   ├── Products.jsx        # Products with filtering
│   │   ├── Cart.jsx            # Shopping cart
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact form
│   │   └── NotFound.jsx        # 404 page
│   ├── App.js                  # Main app with routing
│   ├── App.css                 # Main styles
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **React Router DOM v6** - Routing
- **Context API** - State management
- **localStorage** - Data persistence
- **CSS3** - Styling with gradients and animations

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites
- Node.js installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd com
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 👥 User Roles

### Regular User
- Access to Dashboard
- View and add expenses
- Browse products
- Manage shopping cart
- View profile

### Admin User
- All user features
- Access to Admin Dashboard
- View all registered users
- User statistics
- Product management options

## 📝 How to Use

### Creating an Account
1. Click "Sign Up" in the header
2. Enter username, email, and password
3. Select role (User or Admin)
4. Click "Sign Up"
5. You'll be automatically logged in and redirected

### Shopping
1. Browse products on the Products page
2. Use filters to find specific items
3. Click "Add to Cart" on any product
4. View cart by clicking "Cart" in header
5. Adjust quantities with +/- buttons
6. Click "Checkout" to complete purchase

### Tracking Expenses
1. Go to Dashboard
2. Use the expense form to add new expenses
3. View all expenses in the list
4. See real-time statistics

### Contact Form
1. Go to Contact page
2. Fill in your details
3. Submit the form
4. Submission is saved to localStorage

## 🎨 Key Features for Beginners

### State Management
- Uses `useState` for local component state
- Context API for global state (Auth, Cart, Expenses)
- Props for component communication

### Routing
- `BrowserRouter` wraps the entire app
- `Routes` and `Route` for defining paths
- `Link` for navigation without page reload
- `useNavigate` for programmatic navigation
- `useLocation` for detecting current page

### Data Persistence
- All data saved to localStorage
- Automatically loads on app start
- Survives page refreshes

### Component Patterns
- Functional components with hooks
- Reusable components with props
- Conditional rendering
- List rendering with `.map()`
- Event handling

## 🔒 Security Note

This is a learning project. In production:
- Never store passwords in plain text
- Use proper authentication services
- Implement server-side validation
- Use HTTPS
- Add proper error handling

## 📚 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://react.dev/).

### Additional Resources
- [React Router Documentation](https://reactrouter.com)
- [MDN Web Docs](https://developer.mozilla.org)

## 🤝 Contributing

This is a beginner learning project. Feel free to:
- Add new features
- Improve styling
- Fix bugs
- Add comments for clarity

## 📄 License

This project is for educational purposes.

## 👨‍💻 Author

Created as a comprehensive React learning project for beginners.

---

**Happy Coding! 🚀**