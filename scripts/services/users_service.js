import { apiFetch } from "./api_fetch.js";

export const createUser = (username, password) =>
  apiFetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

export const deleteUser = () => {
  const token = sessionStorage.getItem("token");
  return apiFetch("http://localhost:3000/profile", {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${token}`,
    },
  });
};
