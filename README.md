# 📝 Blog API

A RESTful API for a blogging platform built with **Express.js**, **Mongoose**, **JWT Authentication**, and **data validation with Joi**. This API supports full CRUD operations on blog posts, user authentication, authorization, and more.

---

## 🚀 Features

- User registration & login with **JWT** authentication
- Role-based **authorization** (User/Admin)
- CRUD operations for blog posts
- Embedded **comments** for each post
- **Search**, **pagination**, and **sorting** support
- Data validation using **Joi**
- Password hashing using **bcrypt**
- Mongoose features: virtuals, hooks, populate
- API logging with **morgan**

---

## 🗂️ Project Structure

blog-api/ ├── server.js ├── models/ │ ├── User.js │ └── Post.js ├── routes/ │ ├── userRoutes.js │ ├── postRoutes.js │ └── authRoutes.js ├── middleware/ │ ├── auth.js │ └── validation.js ├── controllers/ │ ├── postController.js │ └── authController.js └── .env
