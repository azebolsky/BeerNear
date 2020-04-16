import tokenService from "./tokenService";
const BASE_URL = "/api/beers";

export function getAllBeers(page) {
  return fetch(BASE_URL + "/?page=" + page).then((res) => res.json());
}

export function addFavorite(beer) {
  console.log(JSON.stringify(beer));
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(beer),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(BASE_URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
