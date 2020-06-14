const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByTeamPerYear = require("./ipl/matchesWonByTeamPerYear");
const extraRunConcedByEachTeam = require("./ipl/extraRunConcedByEachTeam");
const topEconomicBowler = require("./ipl/topEconomicBowler");
const matchesWonbyEachTeamPerVenue = require("./ipl/matchesWonbyEachTeamPerVenue");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
function main(){
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let result1 =  matchesPlayedPerYear(matches);
        let result2 = matchesWonByTeamPerYear(matches);
        let result3 =  extraRunConcedByEachTeam(deliveries,matches);
        let result4 = topEconomicBowler(deliveries, matches);
        let result5 = matchesWonbyEachTeamPerVenue(matches);
        saveMatchesPlayedPerYear(result1, result2, result3, result4, result5);
      });
    });
} 

function saveMatchesPlayedPerYear(result1, result2, result3, result4, result5) {
  
    const jsonData = {
        matchesPlayedPerYear: result1,
        matchesWonByTeamPerYear: result2,
        extraRunConcedByEachTeam: result3,
        topEconomicBowler:result4,
        matchesWonbyEachTeamPerVenue:result5
    };
    const jsonString = JSON.stringify(jsonData);
    fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
      if (err) {
        console.error(err);
      }
    });
  }

main();
    