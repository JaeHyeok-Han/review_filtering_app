import { kmdbMovieAdapter } from '../utils/adapter.js';

export async function getMovieInfo(title) {
  const key = '7D26ELZ22G9D906GZ432';
  const response = await fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${key}&listCount=1&title=${title}&detail=Y&sort=prodYear,1`);
  const jsonResponse = await response.json();
  return kmdbMovieAdapter(jsonResponse.Data[0].Result[0]);
}

export function getSearchList(searchValue) {
  const key = '7D26ELZ22G9D906GZ432';
  return fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${key}&listCount=10&title=${searchValue}&detail=Y&sort=RANK,1`)
    .then(res => res.json())
    .then(res => res.Data[0].Result)
    .catch(err => console.log(err));
}