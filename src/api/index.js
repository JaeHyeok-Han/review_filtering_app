function getRanking() {
  const key = '43f6b744f893ec067ba399f6e2f19cd7';
  const dateObj = new Date(Date.now() - 86400000);
  const date = dateObj.toISOString().slice(0, 10).replace(/-/g, '');
  const count = 5;
  return fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${date}&itemPerPage=${count}`)
    .then(res => res.json())
    .then(res => res.boxOfficeResult.dailyBoxOfficeList)
    .catch(err => console.log(err));
}

function getSearchList(searchValue) {
  const key = '63K7D26ELY22G9D906GZ';
  return fetch(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${key}&listCount=10&title=${searchValue}&detail=Y&sort=RANK,1`)
    .then(res => res.json())
    .then(res => res.Data[0].Result)
    .catch(err => console.log(err));
}

function getItem(title) {
  const key = '63K7D26ELY22G9D906GZ';
  return fetch(`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${key}&listCount=1&title=${title}&detail=Y&sort=prodYear,1`)
    .then(res => res.json())
    .then(res => res.Data[0].Result[0])
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