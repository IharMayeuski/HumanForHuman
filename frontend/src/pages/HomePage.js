import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  const { t, i18n } = useTranslation();

  return (
    <div style={styles.container}>
      {isAuthenticated ? (
        <>
          <h2>{t("welcome")}</h2>
          <p>{t("dashboard")}</p>
        </>
      ) : (
        <>
          <h2>{t("welcome0")}</h2>
          <p>{t("please, register")}</p>

          <div style={styles.buttons}>
            <button
              style={styles.primary}
              onClick={() => navigate("/login")}
            >
              {t("enter")}
            </button>

            <button
              style={styles.secondary}
              onClick={() => navigate("/register")}
            >
              {t("registration")}
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
