import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getProfile } from "../api/user";

export default function AppLayout({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getProfile();
      setUser(data);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Unauthorized</p>;

  return (
    <>
      <Header user={user} />
      <main style={{ padding: 24 }}>
        {children}
      </main>
    </>
  );
}
