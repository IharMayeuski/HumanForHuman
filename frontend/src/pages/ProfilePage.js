import { useEffect, useState } from "react";
import { getProfile } from "../api/user";

export default function ProfilePage() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  if (!user) return <h2 style={{ textAlign: "center", color: "red" }}>Failed to load user</h2>;

  // 🔹 Если аватар отсутствует — ставим дефолтный
  const avatar = user.avatar || "/images/no-photo.png";

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <img src={avatar} alt="avatar" style={styles.avatar} />

        <h2 style={styles.name}>
          {user.firstName} {user.lastName}
        </h2>

        <p style={styles.role}>{user.role}</p>

        <div style={styles.infoBox}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || "-"}</p>
        </div>

        <button style={styles.button} onClick={() => window.location.href = "/profile/edit"}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
    fontFamily: "Inter, sans-serif"
  },
  card: {
    background: "white",
    width: 380,
    padding: 32,
    borderRadius: 16,
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 15,
    border: "4px solid #eee"
  },
  name: { marginBottom: 0 },
  role: { marginTop: 5, color: "#777" },
  infoBox: { textAlign: "left", marginTop: 20, lineHeight: 1.6 },
  button: {
    marginTop: 25,
    padding: "12px 16px",
    width: "100%",
    borderRadius: 12,
    border: "none",
    background: "#007bff",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
    transition: "0.2s"
  }
};
