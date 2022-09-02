export async function getFilteringData(movieId) {
  const response = await fetch(`http://203.230.103.35:3000/data/${movieId}`);
  return await response.json();
}