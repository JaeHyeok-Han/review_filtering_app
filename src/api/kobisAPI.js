import { makeDateString } from "../utils/date.js";

const KEY = `43f6b744f893ec067ba399f6e2f19cd7`;

export async function getRanking() {
  const date = makeDateString(new Date());
  const count = 5;
  const response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${date}&itemPerPage=${count}`);
  const jsonResponse = await response.json();
  return jsonResponse.boxOfficeResult.dailyBoxOfficeList;
}