export async function getProfile() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:8080/api/users/me", {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  if (!res.ok) throw new Error("Failed to load profile");

  return res.json();
}
