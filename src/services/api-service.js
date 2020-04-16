const BASE_URL = "/api/beers";

export function getAllBeers(page) {
  return fetch(BASE_URL + "/?page=" + page).then((res) => res.json());
}

export function create(beer) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(beer),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(BASE_URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
