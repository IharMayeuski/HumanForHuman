import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { loginSuccess } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const result = await login(email.trim(), password);
      localStorage.setItem("token", result.token);
      loginSuccess();
      navigate("/");
    } catch {
      setError(t("loginError"));
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>{t("login")}</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder={t("email")}
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder={t("password")}
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">{t("login")}</button>
      </form>
    </div>
  );
}
