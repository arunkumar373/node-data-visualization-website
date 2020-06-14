function topEconomicBowler(deliveries, matches) {
  let result = {};
  let id = [];
  let i = 0;
  for (let match of matches) {
      if(match.season === '2015'){
          id[i] = match.id;
         i++;
     } 
  }    
  
   
   let total_ball1 = 0;
   let total_ball2 = 0;
   let total_ball3 = 0;
   let total_ball4 = 0;
   let total_ball5 = 0;
   let total_ball6 = 0;
   let total_ball7 = 0;
   let total_ball8 = 0;
   let total_ball9 = 0;
   let total_ball10 = 0;

   let total_run1 = 0;
   let total_run2 = 0;
   let total_run3 = 0;
   let total_run4 = 0;
   let total_run5 = 0;
   let total_run6 = 0;
   let total_run7 = 0;
   let total_run8 = 0;
   let total_run9 = 0;
   let total_run10 = 0;
   for(let i = 0; i < id.length; i++){
  
       for(let deliveri of deliveries) {
          if(deliveri.match_id === id[i]) {
            
              if(deliveri.bowler === "RN ten Doeschate"){  
                    total_ball1++;
                  total_run1  += Number(deliveri.total_runs);
               }
               if(deliveri.bowler === "J Yadav"){  
                  total_ball2++;
                total_run2  += Number(deliveri.total_runs);
               }
               if(deliveri.bowler === "V Kohli"){  
                 total_ball3++;
                 total_run3  += Number(deliveri.total_runs);
               } 
                if(deliveri.bowler === "R Ashwin"){  
                total_ball4++;
                total_run4 += Number(deliveri.total_runs);
              }  
              if(deliveri.bowler === "S Nadeem"){  
               total_ball5++;
               total_run5 += Number(deliveri.total_runs);
                }     
              if(deliveri.bowler === "Parvez Rasool"){  
                 total_ball6++;
               total_run6 += Number(deliveri.total_runs);
             }   
             if(deliveri.bowler === "MC Henriques"){  
             total_ball7++;
            total_run7 += Number(deliveri.total_runs);
             }
             if(deliveri.bowler === "Z Khan"){  
              total_ball8++;
             total_run8 += Number(deliveri.total_runs);
              }   
              if(deliveri.bowler === "M Vijay"){  
                  total_ball9++;
                 total_run9 += Number(deliveri.total_runs);
             } 
            if(deliveri.bowler === "Bipul Sharma"){  
                   total_ball10++;
                 total_run10 += Number(deliveri.total_runs);
             } 
        }
    }
         
 }
   let over1 = Math.abs(total_ball1/6);
   let rate1 = Math.abs(total_run1/over1);
   let economy_rate1 = Math.round(rate1 * 100) / 100;
   result["RN ten Doeschate"] = economy_rate1;
   
   let over2 = Math.abs(total_ball2/6);
   let rate2 = Math.abs(total_run2/over2);
   let economy_rate2 = Math.round(rate2 * 100) / 100;
   result["J Yadav"] = economy_rate2;

   let over3 = Math.abs(total_ball3/6);
   let rate3 = Math.abs(total_run3/over3);
   let economy_rate3 = Math.round(rate3 * 100) / 100;
   result["V Kohli"] = economy_rate3;

   let over4 = Math.abs(total_ball4/6);
   let rate4 = Math.abs(total_run4/over4);
   let economy_rate4 = Math.round(rate4 * 100) / 100;
   result["R Ashwin"] = economy_rate4;

   let over5 = Math.abs(total_ball5/6);
   let rate5 = Math.abs(total_run5/over5);
   let economy_rate5 = Math.round(rate5 * 100) / 100;
   result["S Nadeem"] = economy_rate5;

   let over6 = Math.abs(total_ball6/6);
   let rate6 = Math.abs(total_run6/over6);
   let economy_rate6 = Math.round(rate6 * 100) / 100;
   result["Parvez Rasool"] = economy_rate6;

   let over7 = Math.abs(total_ball7/6);
   let rate7 = Math.abs(total_run7/over7);
   let economy_rate7 = Math.round(rate7 * 100) / 100;
   result["MC Henriques"] = economy_rate7;

   let over8 = Math.abs(total_ball8/6);
   let rate8 = Math.abs(total_run8/over8);
   let economy_rate8 = Math.round(rate8 * 100) / 100;
   result["Z Khan"] = economy_rate8;

   let over9 = Math.abs(total_ball9/6);
   let rate9 = Math.abs(total_run9/over9);
   let economy_rate9 = Math.round(rate9 * 100) / 100;
   result["M Vijay"] = economy_rate9;

   let over10 = Math.abs(total_ball10/6);
   let rate10 = Math.abs(total_run10/over10);
   let economy_rate10 = Math.round(rate10 * 100) / 100;
   result["Bipul Sharma"] = economy_rate10;


 return result;
}
module.exports = topEconomicBowler;
