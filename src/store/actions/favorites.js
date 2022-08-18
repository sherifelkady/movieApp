export function addToFavorites(payload) {
  return { type: "ADD_TO_FAVORITES", payload };
}
export function deleteFromFavorites(payload) {
  return { type: "DELETE_FROM_FAVORITES", payload };
}
