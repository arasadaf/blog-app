# 🖥️ BlogApp Backend

The backend of BlogApp is a robust Express.js server providing RESTful APIs for article management, user authentication, and profile handling.

---

## 🛠️ Tech Stack
- **Framework**: Express.js
- **Runtime**: Node.js
- **Database**: MongoDB (via Mongoose)
- **Security**: JWT (HttpOnly Cookies), bcryptjs
- **Storage**: Cloudinary (Image uploads)

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
   ```bash
   npm start # or npm run dev for nodemon
   ```

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
