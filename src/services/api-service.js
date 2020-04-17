import tokenService from "./tokenService";
const BASE_URL = "/api/beers";

export function getAllBeers(page) {
  return fetch(BASE_URL + "/?page=" + page).then((res) => res.json());
}

export function allFavorites() {
  return fetch(BASE_URL + "/favorites", {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + tokenService.getToken()
    },
  }).then((res) => res.json());
}

export function addFavorite(beer) {
  return fetch(BASE_URL + '/favorites', {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(beer),
  }).then((res) => res.json());
}

export function deleteFavorite(favBeerId) {
  console.log(favBeerId)
  return fetch(BASE_URL + '/favorites/' + favBeerId, {
    method: "DELETE",
    headers: {
      "Authorization": "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}


