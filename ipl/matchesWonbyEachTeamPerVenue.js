function matchesWonbyEachTeamPerVenue(matches) {
      let result = {};
       
          for(var i = 0; i < matches.length; i++) {
               let ans = {};
               let venue = matches[i].venue;
               
               for(var j = 0; j < matches.length; j++){
                      if(matches[j].venue === venue){
                          if(ans[matches[j].winner]){
                              ans[matches[j].winner] += 1;
                          }else {
                              ans[matches[j].winner] = 1;
                          }
                      }
               }
               result[venue] = ans;
        }
 
        
  
      return result; 
    }
      

module.exports = matchesWonbyEachTeamPerVenue;