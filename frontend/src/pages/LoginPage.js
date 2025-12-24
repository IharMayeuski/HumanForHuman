import { useState } from "react";
import { login } from "../api/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const result = await login(email.trim(), password);
      localStorage.setItem("token", result.token);
      window.location.href = "/";
    } catch (err) {
      setError("Invalid email or password");
    }
  }

  return (
    <div style={{ padding: 20 }}>

      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      {/* 👇 КНОПКА ДЛЯ ГОСТЯ */}
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => window.location.href = "/"}
          style={{
            background: "transparent",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            textDecoration: "underline"
          }}
        >
          Continue as guest
        </button>
      </div>

    </div>
  );
}
