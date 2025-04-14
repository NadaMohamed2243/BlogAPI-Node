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

blog-api/ 
  ├── server.js 
  ├── models/ 
        │ ├── User.js 
        │ └── Post.js 
  ├── routes/ 
    │ ├── userRoutes.js 
    │ ├── postRoutes.js 
    │ └── authRoutes.js 
  ├── middleware/ 
    │ ├── auth.js 
    │ └── validation.js 
  ├── controllers/ 
    │ ├── postController.js 
    │ └── authController.js 
  ├── utils/ 
    │ └── AppError.js 
  └── .env



---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/blog-api.git
   cd blog-api```

2. **Install dependencies**
   ```bash
   npm install```

3. **Create a .env file**
   ```bash
   DB_PASSWORD=your_mongodb_connection_password
   DB_USENAME=your_mongodb_connection_username
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret```

4. **Run the server**
   ```bash
   npm start```

5. **Run the project**
   ```bash
   npm run serve```


## 📦 Dependencies

nodemon

express

mongoose

morgan

bcrypt

jsonwebtoken

joi

dotenv

## 🧩 API Endpoints
### 🔐 Authentication

| Method | Endpoint         | Description                          |
|--------|------------------|--------------------------------------|
| POST   | `/auth/register` | Register a new user & get JWT token  |
| POST   | `/auth/login`    | Login & get JWT token                |


### 👤 Users
Method->Endpoint->Description
GET->/users->List all users (admin only)

### 📝 Posts & Comments

| Method | Endpoint                                   | Description                                      |
|--------|--------------------------------------------|--------------------------------------------------|
| GET    | `/posts`                                   | Get all posts                                    |
| GET    | `/posts?page=?$limit=?&search=?&sortedby=?`| Get all posts based on pagination, sort and saech|
| GET    | `/posts/:id`                               | Get a single post by ID                          |
| GET    | `/posts/:userid`                           | Get posts by a specific user ID                  |
| POST   | `/posts`                                   | Create a new post                                |
| PUT    | `/posts/:id`                               | Update a post (author or admin only)             |
| DELETE | `/posts/:id`                               | Delete a post (author or admin only)             |
| POST   | `/posts/:id/comments`                      | Add a comment to a post                          |
| POST   | `/posts/:id/like`                          | Add a like to a post                             |



## 🧪 Testing
Use Postman or Insomnia to test API endpoints. Ensure to pass the JWT token in the headers for protected routes:
```bash Authorization: Bearer <token>```


## 🔒 Security
- Passwords are hashed using bcrypt
- JWT secret is stored securely in .env
- Token expiration is set to limit session time
- Input validation is enforced with Joi

## 🛠️ Mongoose Features Used
- Virtual fields (e.g., fullName for User)
- Schema middleware (pre-save/post hooks)
- Populate for author and comments

## 📚 Resources
- [Express Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Guide](https://jwt.io/introduction)
- [Joi Validation](https://joi.dev/)
- [Bcrypt Documentation](https://github.com/kelektiv/node.bcrypt.js)


## 📜 License
This project is open-source and available under the MIT License.


