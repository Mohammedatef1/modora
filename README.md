# Modora – E-commerce Furniture Store

Modora is a fully responsive and mobile-friendly e-commerce demo store built using React and Redux Toolkit. It showcases modern frontend development practices, including authentication, protected routes, state management, and integration with Supabase for backend services. Users can register, sign in, manage their wishlist, view order history, and browse products through a highly optimized and user-friendly interface.

## Live Demo

[Visit Live Site](https://modora.mohammedatef.tech/) 

## Features

- User authentication with sign-up and sign-in functionality
- Protected routes for authenticated-only pages such as wishlist and orders
- Smart redirection: prevents signed-in users from accessing authentication pages
- Global state management using Redux Toolkit
- Persistent wishlist, cart, and order data per user
- Supabase integration for authentication and backend storage
- Form validation with Zod and controlled form inputs using React Hook Form
- Real-time form error feedback for invalid entries
- Lazy loading of non-critical components with prioritized above-the-fold content
- Skeleton loaders for products and categories during data fetching

## Tech Stack

- React  
- React Router DOM  
- Redux Toolkit  
- React Hook Form  
- Zod  
- Tailwind CSS  
- Supabase (Authentication, Realtime Database, API)

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/modora.git
cd modora
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_key
```

4. Start the development server:

```bash
npm run dev
```

## State and Authentication Flow

- Supabase handles user authentication and session tokens
- Redux Toolkit manages global state:
  - Authentication state
  - Wishlist data
  - Cart contents
  - Orders
- State is updated using Redux Thunks and efficiently shared across the application

## License

This project is licensed under the MIT License.
