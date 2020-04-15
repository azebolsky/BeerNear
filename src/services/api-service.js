const BASE_URL = "/api/beers";

export function getAllBeers({ page }) {
  return fetch(BASE_URL, { p: page }).then((res) => res.json());
}
