export function kmdbMovieAdapter(movieInfo) {
  return {
    title: movieInfo.title.replace(/( !HS )/g, "").replace(/( !HE )/g, "").trim(),
    prodYear: movieInfo.prodYear,
    director: movieInfo.directors.director.map(ele => ele.directorNm).join(", "),
    actor: movieInfo.actors.actor.map(ele => ele.actorNm).slice(0, 5).join(", "),
    nation: movieInfo.nation,
    plot: movieInfo.plots.plot[0].plotText,
    runtime: movieInfo.runtime,
    rating: movieInfo.rating,
    genre: movieInfo.genre.split(",").join(", "),
    repRlsDate: movieInfo.repRlsDate,
    poster: movieInfo.posters.split("|")[0],
  }
}