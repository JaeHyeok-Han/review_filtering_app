export function getReview(movieInfo) {
  return fetch("http://203.230.103.35:3000/review", {
    method: "POST",
    body: movieInfo,
  })
    .then(res => res.json())
    .catch(err => console.log(err));
}