function matchesWonByTeamPerYear(matches){
        
    var result = {};
    for(var start = 2008; start <= 2019; start++){
       var ans = {};
       for(var i = 0; i < matches.length; i++) {
          if(matches[i].season == start) {
            if(matches[i].winner !== "no result") {
              if(ans[matches[i].winner]) {
                ans[matches[i].winner] += 1;
              } else {
                ans[matches[i].winner] = 1;
               }
            } else {
                if(ans["noResult"]) {
                  ans["noResult"] += 1;
                } else {
                  ans["noResult"] = 1;
                }
            }
          }
       }
       result[start] = ans;
    }
    return result;   
}      
  module.exports = matchesWonByTeamPerYear;
  