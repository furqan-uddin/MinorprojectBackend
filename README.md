# ⚡ Quizify Backend – Online Quiz & Certification System (Node.js + Express)

This is the backend API for **Quizify**, a MERN-based quiz platform where users can take quizzes, track results, earn certificates, and compete on a leaderboard.  
The backend handles authentication, quiz logic, leaderboard calculations, admin operations, and data storage using MongoDB.

🔗 **Live API Base URL:** https://quiziify-backend.onrender.com  
🔗 **Frontend Repo:** https://github.com/furqan-uddin/Minorproject  
🔗 **Backend Repo:** https://github.com/furqan-uddin/MinorprojectBackend  
🔗 **Live Frontend:** https://quizify-phi.vercel.app/  

---

## 🚀 Features (Backend)

### 🧠 Quiz Engine
- Fetch questions by category & difficulty
- Auto-randomized questions
- Score calculation
- Store quiz results
- Return detailed result object

### 👤 User Management
- Register  
- Login (JWT authentication)  
- Forgot / Reset password  
- User profile  
- Activity timeline  
- Quiz history retrieval  

### 🏆 Leaderboard & Results
- Global leaderboard ranking  
- Top scorers per category  
- Quiz result history (user-specific)  

### 🛠 Admin Features
- Add/Delete/Edit quiz questions  
- Manage users  
- Manage results  
- Category-based quiz controls  

### 🗃 Database Models
- User  
- Question  
- Result  
- Category  

---

## 🛠 Tech Stack

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Authentication  
- bcrypt.js  
- Multer (if file uploads added later)  

---

## 📂 Folder Structure 

```
backend/
│── controllers/
│   ├── authController.js
│   ├── quizController.js
│   ├── resultController.js
│   ├── adminController.js
│   ├── userController.js
│
│── middlewares/
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│
│── models/
│   ├── User.js
│   ├── Question.js
│   ├── Result.js
│   ├── Category.js
│
│── routes/
│   ├── authRoutes.js
│   ├── quizRoutes.js
│   ├── resultRoutes.js
│   ├── adminRoutes.js
│   ├── userRoutes.js
│
│── config/
│   └── db.js
│
├── server.js
├── package.json
├── .env (ignored)
```

---

## 🧠 API Overview

### **Auth Routes (`/api/auth`)**
POST /register

POST /login

POST /forgot-password

POST /reset-password/:token

### **User Routes (`/api/users`)**
GET /profile

PATCH /update

GET /activity

### **Quiz Routes (`/api/quizzes`)**

GET / → Fetch categories

GET /:categoryId → Fetch quiz questions

Supports difficulty via query params:

/:categoryId?difficulty=easy|medium|hard

### **Result Routes (`/api/results`)**

POST /submit

GET /history

GET /leaderboard

### **Admin Routes (`/api/admin`)**

GET /dashboard

POST /questions

PATCH /questions/:id

DELETE /questions/:id

GET /users

DELETE /users/:id

GET /results

---

## ⚙️ Environment Variables

Create a `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_if_using_reset
EMAIL_PASS=your_password
```
---

## 🔧 Installation & Setup
```
git clone https://github.com/furqan-uddin/MinorprojectBackend

cd MinorprojectBackend
npm install
npm run dev
```
---

Server runs at:
http://localhost:5000


---

## 🧑‍💻 Author

**Mohammad Furqanuddin**  
🔗 LinkedIn: https://www.linkedin.com/in/mohammadfurqanuddin  
📧 Email: mohammedfurqan2108@gmail.com


