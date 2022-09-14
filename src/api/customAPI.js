export async function getFilteringData(movieId, movieTitle) {
  const response = await fetch(`http://203.230.103.35:3000/capstone/review?id=${movieId}&title=${movieTitle}`);
  const json = await response.json();
  return json;
}