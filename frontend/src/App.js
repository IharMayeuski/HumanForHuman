import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthHeader from "./components/AuthHeader";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>

      {/* HEADER — всегда выше роутов */}
      <AuthHeader />

      <Routes>

        {/* Public */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected */}
        <Route
          path="/profile"
          element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
        />


        <Route
          path="/profile/edit"
          element={<ProtectedRoute><EditProfilePage /></ProtectedRoute>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
