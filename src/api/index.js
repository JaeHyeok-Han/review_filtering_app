import { makeDateString } from "../utils/date.js";

function getRanking() {
  const key = '43f6b744f893ec067ba399f6e2f19cd7';
  const date = makeDateString(new Date());
  const count = 5;
  return fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${date}&itemPerPage=${count}`)
    .then(res => res.json())
    .then(res => res.boxOfficeResult.dailyBoxOfficeList)
    .catch(err => console.log(err));
}

function getItem(title) {
  const key = '7D26ELZ22G9D906GZ432';
  return fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${key}&listCount=1&title=${title}&detail=Y&sort=prodYear,1`)
    .then(res => res.json())
    .then(res => res.Data[0].Result[0])
    .catch(err => console.log(err));
}

function getSearchList(searchValue) {
  const key = '7D26ELZ22G9D906GZ432';
  return fetch(`https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${key}&listCount=10&title=${searchValue}&detail=Y&sort=RANK,1`)
    .then(res => res.json())
    .then(res => res.Data[0].Result)
    .catch(err => console.log(err));
}

function getReview(movieInfo) {
  return fetch("http://203.230.103.35:3000/review", {
    method: "POST",
    body: movieInfo,
  })
    .then(res => res.json())
    .catch(err => console.log(err));
}

export { getRanking, getSearchList, getItem, getReview };