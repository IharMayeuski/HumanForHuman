import { useState } from "react";
import { register } from "../api/auth";
import { useTranslation } from "react-i18next";

export default function RegisterPage() {
  const { t } = useTranslation();
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
      <h2>{t("register")}</h2>

      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input placeholder={t("email")} type="email"
          value={form.email} onChange={e => update("email", e.target.value)} /><br /><br />

        <input placeholder={t("password")} type="password"
          value={form.password} onChange={e => update("password", e.target.value)} /><br /><br />

        <input placeholder={t("firstName")}
          value={form.first_name} onChange={e => update("firstName", e.target.value)} /><br /><br />

        <input placeholder={t("lastName")}
          value={form.last_name} onChange={e => update("lastName", e.target.value)} /><br /><br />

        <button type="submit">{t("createAccount")}</button>
      </form>
    </div>
  );
}
