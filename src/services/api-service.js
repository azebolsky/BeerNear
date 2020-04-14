const BASE_URL = "/api/beers";

export function getAllBeers() {
  return fetch(BASE_URL).then((res) => res.json());
}

// export function getOneBeer(beerId) {
//   return fetch(`/api/beer/${beerId}`).then((res) => res.json());
// }
