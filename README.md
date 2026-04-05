# 🧠 Quizzify

<div align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="JWT" src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</div>

<br/>

**Quizzify** is a comprehensive, full-stack quiz platform designed to help students and educators easily create, take, and analyze quizzes. Built with the powerful modern MERN stack, Quizzify delivers a fast, responsive, and intuitive user experience.

---

## ✨ Key Features

- **User Authentication:** Secure registration and login using JWT and bcrypt.
- **Role-based Access:** Dedicated workflows for Students and Educators.
- **Interactive Quizzes:** Seamless quiz-taking experience.
- **Analytics & Tracking:** Visualized student performance with interactive charts (using Chart.js).
- **Responsive Design:** Optimized for smooth functionality across all your devices.

---

## 🛠️ Tech Stack

**Frontend:**
- [React (Vite)](https://vitejs.dev/) - Fast and reliable component rendering
- [Chart.js](https://www.chartjs.org/) - Interactive graphing and student performance tracking
- [Axios](https://axios-http.com/) - Streamlined API requests
- [React Router](https://reactrouter.com/) - Application routing

**Backend:**
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) - Robust REST API
- [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/) - Flexible NoSQL database
- [JWT](https://jwt.io/) & [bcrypt](https://www.npmjs.com/package/bcrypt) - Security and authentication

---

## 📂 Project Structure

```text
📦 Quizzify
 ┣ 📂 backend/        # Contains the Express server, controllers, and MongoDB models
 ┗ 📂 frontend/       # Contains the Vite-powered React UI, pages, and components
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (Local server or Cloud Atlas URL)

### 1. Clone the repository
```bash
git clone https://github.com/jlakkineni25/Quizzify.git
cd Quizzify
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables. Create a `.env` file in the `backend/` folder and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   # Server will run on http://localhost:5000
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   # App will be running at http://localhost:5173
   ```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/jlakkineni25/Quizzify/issues) if you have any questions or want to contribute.
