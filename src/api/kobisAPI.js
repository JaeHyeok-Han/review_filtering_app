import { makeDateString } from "../utils/date.js";

export async function getRanking() {
  const key = '43f6b744f893ec067ba399f6e2f19cd7';
  const date = makeDateString(new Date());
  const count = 5;
  const response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${date}&itemPerPage=${count}`);
  const jsonResponse = await response.json();
  return jsonResponse.boxOfficeResult.dailyBoxOfficeList;
}