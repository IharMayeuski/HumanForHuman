import api from "./axios";

export async function getProfile() {
  const res = await api.get("api/users/me");
  return res.data;
}

export async function updateProfile(data) {
  const res = await api.put("api/users/me", data);
  return res.data;
}
