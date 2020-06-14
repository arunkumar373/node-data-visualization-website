function extraRunConcedByEachTeam(deliveries,matches) {
let result = {};
for(let year = 2008; year <= 2019; year++) {
  let subResult = {};
  matches.map(function(match) {

    let season = parseInt(match.season);
     if(season === year) {
      deliveries.map(function(deliveri){

        if(deliveri.match_id === match.id){
          let bowling_team = deliveri.bowling_team;
        if(subResult[bowling_team]){
            subResult[bowling_team] += Number(deliveri.extra_runs);
        }else {
          subResult[bowling_team] = Number(deliveri.extra_runs);
        }
      }
      })
    }
  })
  result[year] = subResult
}
  return result;
}
  module.exports = extraRunConcedByEachTeam;
  