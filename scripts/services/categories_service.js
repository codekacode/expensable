import { apiFetch, BASE_URL } from "./api_fetch.js";

export const listCategories = () =>
  apiFetch(`${BASE_URL}/categories?`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  });



// export const createNote = (title, body, color) =>
//   apiFetch(`${BASE_URL}/notes`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token token=${sessionStorage.getItem("token")}`,
//     },
//     body: JSON.stringify({ title, body, color }),
//   });

// export const updateNote = (noteId, title, body, color) =>
//   apiFetch(`${BASE_URL}/notes/${noteId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token token=${sessionStorage.getItem("token")}`,
//     },
//     body: JSON.stringify({ title, body, color }),
//   });

// export const deleteNote = (noteId) =>
//   apiFetch(`${BASE_URL}/notes/${noteId}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Token token=${sessionStorage.getItem("token")}`,
//     },
//   });

// export const recoverNote = (noteId) =>
//   apiFetch(`${BASE_URL}/notes/${noteId}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token token=${sessionStorage.getItem("token")}`,
//     },
//     body: JSON.stringify({ deleted_at: null }),
//   });
