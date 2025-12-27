import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const result = await login(email.trim(), password);
      localStorage.setItem("token", result.token);
      navigate("/");
    } catch (err) {
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

      {/* 👇 КНОПКА ГОСТЯ */}
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "transparent",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline"
          }}
        >
          {t("continueAsGuest")}
        </button>
      </div>
    </div>
  );
}
