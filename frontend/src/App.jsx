// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import TeacherHome from './pages/teacher/TeacherHome';
import StudentJoinQuiz from './pages/student/StudentJoinQuiz';
import CreateQuizDetails from './pages/teacher/CreateQuizDetails';
import AddQuizQuestions from './pages/teacher/AddQuizQuestions';
import StudentAttemptQuiz from './pages/student/StudentAttemptQuiz';
import StudentQuizResults from './pages/student/StudentQuizResults';
import Profile from './pages/Profile';
import EditQuizDetails from './pages/teacher/EditQuizDetails';

// Import the new Repository component
import Repository from './pages/Repository';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page: full-width, no container — renders its own Navbar via footer */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />

        {/* All other pages share the standard Navbar + container layout */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <main className="container">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/profile" element={<Profile />} />
                  {/* ** REPOSITORY ROUTE ** */}
                  <Route path="/repository" element={<Repository />} />
                  {/* Teacher Routes */}
                  <Route path="/teacher/dashboard" element={<TeacherHome />} />
                  <Route path="/teacher/create-quiz" element={<CreateQuizDetails />} />
                  <Route path="/teacher/add-questions/:quizId" element={<AddQuizQuestions />} />
                  <Route path="/teacher/edit-quiz/:id" element={<EditQuizDetails />} />
                  {/* Student Routes */}
                  <Route path="/student/join" element={<StudentJoinQuiz />} />
                  <Route path="/student/attempt/:code" element={<StudentAttemptQuiz />} />
                  <Route path="/student/results" element={<StudentQuizResults />} />
                </Routes>
              </main>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;