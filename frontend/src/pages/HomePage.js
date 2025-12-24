import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div style={styles.container}>
      {isAuthenticated ? (
        <>
          <h2>Welcome to ihuman.pl</h2>
          <p>This is your dashboard.</p>
        </>
      ) : (
        <>
          <h2>Добро пожаловать</h2>
          <p>Пожалуйста, войдите или зарегистрируйтесь</p>

          <div style={styles.buttons}>
            <button
              style={styles.primary}
              onClick={() => navigate("/login")}
            >
              Войти
            </button>

            <button
              style={styles.secondary}
              onClick={() => navigate("/register")}
            >
              Регистрация
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: 40,
    textAlign: "center",
    fontFamily: "Inter, sans-serif"
  },
  buttons: {
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    gap: 16
  },
  primary: {
    padding: "12px 20px",
    borderRadius: 10,
    border: "none",
    background: "#007bff",
    color: "white",
    fontSize: 16,
    cursor: "pointer"
  },
  secondary: {
    padding: "12px 20px",
    borderRadius: 10,
    border: "1px solid #007bff",
    background: "white",
    color: "#007bff",
    fontSize: 16,
    cursor: "pointer"
  }
};
