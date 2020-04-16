const BASE_URL = "/api/beers";

export function getAllBeers(page) {
  return fetch(BASE_URL + "/?page=" + page).then((res) => res.json());
}
