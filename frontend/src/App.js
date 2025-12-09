import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

function Profile() {
  return <h1>Protected profile page — success!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected */}
        <Route path="/profile"
               element={<ProtectedRoute><Profile /></ProtectedRoute>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
