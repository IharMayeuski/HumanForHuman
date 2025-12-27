import { Routes, Route } from "react-router-dom";
import AuthHeader from "./components/AuthHeader";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/profile"
          element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
        />

        <Route
          path="/profile/edit"
          element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>}
        />
      </Routes>
    </>
  );
}

export default App;
