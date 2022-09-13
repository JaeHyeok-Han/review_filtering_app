import { kmdbMovieAdapter } from '../utils/adapter.js';

const KEY = `7D26ELZ22G9D906GZ432`;

export async function getMovieInfo(title) {
  const response = await fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KEY}&listCount=1&title=${title}&detail=Y&sort=prodYear,1`);
  const jsonResponse = await response.json();
  return kmdbMovieAdapter(jsonResponse.Data[0].Result[0]);
}

export async function getSearchResult(searchValue) {
  const response = await fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KEY}&listCount=10&title=${searchValue}&detail=Y&sort=RANK,1`);
  const jsonResponse = await response.json();
  return jsonResponse.Data[0].Result.map(ele => kmdbMovieAdapter(ele));
}