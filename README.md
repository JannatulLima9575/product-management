# 🛍️ Product Management App

একটি সহজ কিন্তু শক্তিশালী প্রোডাক্ট ম্যানেজমেন্ট ওয়েব অ্যাপ—যেখানে তুমি প্রোডাক্ট **Create, Read, Update, Delete (CRUD)** করতে পারো, সাথে আছে সার্চ, ফিল্টার, সোর্ট, প্যাজিনেশন ইত্যাদি।  

🔗 **Live Demo:** https://product-management-ruddy-chi.vercel.app/  

A simple product management application built with **Next.js 15 (App Router)** and **NextAuth.js**.  
Users can explore products publicly, view product details, and after login, access a protected dashboard to add new products.

---

## 🚀 Live Demo
🔗 [Live Site (Vercel)](https://product-management-ruddy-chi.vercel.app/)  
🔗 [GitHub Repository](https://github.com/JannatulLima9575/product-management)

---

## 📌 Features

### Public Pages
- **Landing Page (/**)  
  - Includes: Navbar, Hero, Product Highlights, Footer  
  - Navigation to Login & Products pages  
  - Accessible without login  

- **Login Page (/login)**  
  - Authentication using **NextAuth.js**  
  - Supports Google login (or credentials)  
  - Redirects to `/products` after successful login  

- **Product List Page (/products)**  
  - Publicly accessible  
  - Fetches product list from mock backend (file/API)  
  - Each product shows **name, description, price, details button**  

- **Product Details Page (/products/[id])**  
  - Publicly accessible  
  - Shows full product details  

### Protected Pages
- **Add Product Page (/dashboard/add-product)**  
  - Accessible **only after login**  
  - Includes a form to add new products  
  - Stores product data in database (or mock API)  
  - Redirects unauthenticated users to `/login`

### 🔧 Optional Enhancements
- Loading spinner on form submission  
- Toast notifications for successful product add  
- Light/Dark theme toggle  

---

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)  
- **Authentication:** NextAuth.js  
- **Styling:** Tailwind CSS / DaisyUI  
- **Backend:** Route Handlers (`/api`) or mock data  
- **Database:** (Optional – JSON/mock or MongoDB)  
- **Deployment:** Vercel  

---

## 📂 Routes Summary

| Route                         | Access      | Description |
|-------------------------------|-------------|-------------|
| `/`                           | Public      | Landing page with Navbar, Hero, Highlights, Footer |
| `/login`                      | Public      | Login page (NextAuth, Google/Credentials) |
| `/products`                   | Public      | Show all products list |
| `/products/[id]`              | Public      | Product details page |
| `/dashboard/add-product`      | Protected   | Add new product (requires login) |
| `/api/products`               | API         | Handle product data (fetch/create) |

---

## ⚙️ Setup & Installation

1. Clone the repository
   ```bash
   git clone https://github.com/JannatulLima9575/product-management.git
   cd product-management
