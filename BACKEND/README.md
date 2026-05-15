# 🖥️ BlogApp Backend

The backend of BlogApp is a robust Express.js server providing RESTful APIs for article management, user authentication, and profile handling.

---

## 🛠️ Tech Stack & Packages
### **Core Dependencies**
| Package | Version | Purpose |
| :--- | :--- | :--- |
| **express** | `^5.2.1` | Web framework for routing and middleware. |
| **mongoose** | `^9.1.5` | ODM for MongoDB schema and data validation. |
| **jsonwebtoken** | `^9.0.3` | Secure authentication via signed JWTs. |
| **bcryptjs** | `^3.0.3` | Password hashing for security. |
| **cookie-parser** | `^1.4.7` | Parsing cookies for HttpOnly token management. |
| **cloudinary** | `^2.9.0` | Media management and image hosting. |
| **multer** | `^2.1.1` | Middleware for handling file uploads. |
| **cors** | `^2.8.6` | Enabling cross-origin requests from the frontend. |
| **dotenv** | `^17.2.3` | Environment variable management. |

---

## 🏗️ Database Schemas

### **1. User Schema**
The User model handles authentication and user profiles.
- `firstName`: String (Required)
- `lastName`: String
- `email`: String (Required, Unique)
- `password`: String (Required, Hashed)
- `profileImageUrl`: String
- `role`: Enum (`AUTHOR`, `USER`, `ADMIN`)
- `isActive`: Boolean (Default: `true`)
- `timestamps`: `createdAt`, `updatedAt`

### **2. Article Schema**
The Article model manages blog posts and their comments.
- `author`: ObjectId (Reference to `User`)
- `title`: String (Required)
- `category`: String (Required)
- `content`: String (Required)
- `comments`: Array of Comment objects
    - `user`: ObjectId (Reference to `User`)
    - `comment`: String
- `isArticleActive`: Boolean (Default: `true`)
- `timestamps`: `createdAt`, `updatedAt`

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   Create a `.env` file in the `BACKEND/` directory with the following:
   ```env
   PORT=10000
   DB_URL=your_mongodb_uri
   SECRET_KEY=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Run the Server**:
   | Environment | Command | Description |
   | :--- | :--- | :--- |
   | **Production** | `npm start` | Runs the server using `node server.js`. |
   | **Development** | `npm run dev` | Runs the server using `nodemon` for auto-restarts. |

---

## 🌐 Deployment
The backend is currently deployed and live at:
- **Platform**: Render
- **URL**: [https://blog-app-5geq.onrender.com](https://blog-app-5geq.onrender.com)
- **Status**: Live 🟢

---

## 🛣️ API Endpoints

### Common API (`/common-api`)
- `POST /register`: Create a new User/Author account.
- `POST /login`: Authenticate and receive a JWT cookie.
- `GET /logout`: Clear the authentication cookie.
- `GET /check-auth`: Verify current session status.

### User API (`/user-api`)
- `GET /articles`: Fetch all active articles.
- `PATCH /article/:articleId/comment`: Add a comment to an article.

### Author API (`/author-api`)
- `POST /article`: Create a new article (requires Cloudinary image).
- `GET /articles/:authorId`: Get all articles by a specific author.
- `PUT /article/:articleId`: Update an existing article.
- `PATCH /articles/:articleId/status`: Soft-delete or restore an article.

---

## 🔒 Authentication Flow
We use a secure **HttpOnly Cookie** strategy for JWTs. This protects against XSS attacks as the token cannot be accessed via JavaScript on the client side. The `verifyToken` middleware ensures that only authorized users can access protected routes.
