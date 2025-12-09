import { useState } from "react";
import { register } from "../api/auth";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  });

  const [success, setSuccess] = useState("");

  function update(key, value) {
    setForm({ ...form, [key]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await register(form);
    setSuccess("User created! Now you can login.");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Register</h2>

      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email"
          value={form.email} onChange={e => update("email", e.target.value)} /><br /><br />

        <input placeholder="Password" type="password"
          value={form.password} onChange={e => update("password", e.target.value)} /><br /><br />

        <input placeholder="First name"
          value={form.first_name} onChange={e => update("first_name", e.target.value)} /><br /><br />

        <input placeholder="Last name"
          value={form.last_name} onChange={e => update("last_name", e.target.value)} /><br /><br />

        <button type="submit">Create account</button>
      </form>
    </div>
  );
}
