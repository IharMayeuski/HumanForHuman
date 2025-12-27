import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";

export default function AuthHeader() {
  const { user, loading, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  function changeLang(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <div style={styles.header}>
      <Link to="/" style={styles.logoLink}>
        <div style={styles.logo}>ihuman.pl</div>
      </Link>

      <div>
        <button onClick={() => changeLang("pl")}>PL</button>
        <button onClick={() => changeLang("en")}>EN</button>
        <button onClick={() => changeLang("ru")}>RU</button>
      </div>

      {!loading && user && (
        <div style={styles.right}>
          <span>{user.firstName || user.email}</span>

          <button onClick={() => navigate("/profile/edit")}>
            {t("editProfile")}
          </button>

          <button
            onClick={() => {
              logout();
              window.location.reload();
            }}
          >
            {t("logout")}
          </button>
        </div>
      )}
    </div>
  );
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
    cursor: "pointer"
  },
  logoLink: {
    textDecoration: "none",
    color: "inherit"
  }
};
