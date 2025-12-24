import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../api/profile";
import api from "../api/axios";

const DEFAULT_AVATAR = "/images/no-photo.png"; // твоя дефолтная картинка

export async function fetchMe() {
  const res = await api.get("/api/users/me");
  return res.data;
}

export default function EditProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    avatarUrl: ""
  });

  // Загружаем профиль при открытии страницы
  useEffect(() => {
    async function load() {
      const data = await getProfile();
      setForm({
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
        phone: data.phone ?? "",
        avatarUrl: data.avatarUrl || DEFAULT_AVATAR
      });
      setLoading(false);
    }
    load();
  }, []);

  function updateField(key, value) {
    setForm({ ...form, [key]: value });
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);

    await updateProfile(form);

    setSaving(false);
    alert("Profile updated!");
    window.location.href = "/profile";
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <img
          src={form.avatarUrl || DEFAULT_AVATAR}
          alt="avatar"
          style={styles.avatar}
        />

        <form onSubmit={handleSave} style={{ width: "100%" }}>

          <label>First Name</label>
          <input
            value={form.firstName}
            onChange={e => updateField("firstName", e.target.value)}
            style={styles.input}
          />

          <label>Last Name</label>
          <input
            value={form.lastName}
            onChange={e => updateField("lastName", e.target.value)}
            style={styles.input}
          />

          <label>Phone</label>
          <input
            value={form.phone}
            onChange={e => updateField("phone", e.target.value)}
            style={styles.input}
          />

          <label>Avatar URL</label>
          <input
            value={form.avatarUrl}
            onChange={e => updateField("avatarUrl", e.target.value)}
            style={styles.input}
          />
          <p style={{ color: "#777", fontSize: 12 }}>
            * позже заменим на загрузку фото в AWS S3
          </p>

          <button type="submit" style={styles.button} disabled={saving}>
            {saving ? "Saving..." : "Save changes"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
    fontFamily: "Inter, sans-serif"
  },
  card: {
    background: "white",
    width: 420,
    padding: 32,
    borderRadius: 14,
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: "50%",
    marginBottom: 20,
    border: "3px solid #eee",
    objectFit: "cover"
  },
  input: {
    width: "100%",
    padding: "12px",
    marginTop: 6,
    marginBottom: 15,
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 16
  },
  button: {
    padding: "14px",
    width: "100%",
    borderRadius: 10,
    border: "none",
    background: "#007bff",
    color: "white",
    fontSize: 17,
    cursor: "pointer"
  }
};
