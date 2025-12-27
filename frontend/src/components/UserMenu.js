import { useState } from "react";

export default function UserMenu({ user }) {
  const [open, setOpen] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        style={styles.user}
        onClick={() => setOpen(!open)}
      >
        {user.firstName} {user.lastName} ▾
      </div>

      {open && (
        <div style={styles.menu}>
          <div style={styles.item}
            onClick={() => window.location.href = "/profile/edit"}>
            Edit profile
          </div>
          <div style={styles.item} onClick={logout}>
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  user: {
    cursor: "pointer",
    fontWeight: 500
  },
  menu: {
    position: "absolute",
    right: 0,
    top: 30,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    overflow: "hidden"
  },
  item: {
    padding: "10px 16px",
    cursor: "pointer",
    whiteSpace: "nowrap"
  }
};