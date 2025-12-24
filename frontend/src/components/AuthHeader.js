import { useEffect, useState } from "react";
import { getProfile } from "../api/user";
import { Link } from "react-router-dom";

export default function AuthHeader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getProfile();
        setUser(data);
      } catch {
        setUser(null);
      }
    }
    load();
  }, []);

  if (!user) return null;

  return (
    <div style={styles.header}>
      <Link to="/" style={styles.logoLink}>
        <div style={styles.logo}>ihuman.pl</div>
      </Link>

      <div style={styles.right}>
        <span>{user.firstName || user.email}</span>

        <button onClick={() => window.location.href = "/profile/edit"}>
          Edit
        </button>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

const styles = {
  header: {
    height: 60,
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eee"
  },
  right: {
    display: "flex",
    gap: 10,
    alignItems: "center"
  },
  logo: {
      margin: 0,
      cursor: "pointer"
    },

    logoLink: {
      textDecoration: "none",
      color: "inherit"
    }
};
