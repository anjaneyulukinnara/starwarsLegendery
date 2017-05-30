//api url: http://swapi.co/api/films/

export function fetchFilmsList(callback) {
  console.log("in fetch");
  return fetch('http://swapi.co/api/films')
  .then((response) => {return response.json()})
  .then((jsonResponse) => {
    console.log(jsonResponse)
    callback(null, jsonResponse)
  })
  .catch((err) => {
    callback(err)
  })
}
