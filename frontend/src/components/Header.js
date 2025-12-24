import UserMenu from "./UserMenu";

export default function Header({ user }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>ihuman.pl</div>
      <UserMenu user={user} />
    </header>
  );
}

const styles = {
  header: {
    height: 60,
    padding: "0 24px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    fontWeight: 700,
    fontSize: 20
  }
};