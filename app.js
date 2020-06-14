const express = require('express');
const fs = require('fs');
const path = require('path');
const hbs = require('hbs');

const app = express();

 const port = process.env.PORT || 3000

var data = JSON.parse(fs.readFileSync(`${__dirname}/public/data.json`));

 const publicDirectoryPath = path.join(__dirname, '/public');

app.set('view engine', "hbs")


 app.use(express.static(publicDirectoryPath));



app.get('', (req, res) => {
   res.render('index')
})

app.get('/matches', (req, res) => {
   res.send(data.matchesPlayedPerYear);
})

app.get('/matchesWon', (req, res) => {
   res.send(data.matchesWonByTeamPerYear);
})

app.get('/extraRun', (req, res) => {
   res.send(data.extraRunConcedByEachTeam[req.query.season]);
})

app.get('/topEconomic', (req, res) => {
   res.send(data.topEconomicBowler);
})

app.get('/matchesVenue', (req, res) => {
   res.send(data.matchesWonbyEachTeamPerVenue);
})
    app.listen(port, () => {
      console.log(`server has started! running on port number ${port}`);
  })
 
 

