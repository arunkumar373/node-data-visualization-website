    // Total number of matches played each year
    fetch('/matches').then((response) => {
        
        response.json().then((data) => {
            const seriesData1 = [];
            for (let year in data) {  
              seriesData1.push([year, data[year]]);
            }
            Highcharts.chart('matches-played-per-year', {
              chart: {
                  type: 'column'
              },
              title: {
                  text: '1. Total number of matches played each year'
              },
              subtitle: {
                  text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">ipl</a>'
              },
              xAxis: {
                  type: 'category',
                  labels: {
                      rotation: -45,
                      style: {
                          fontSize: '13px',
                          fontFamily: 'Verdana, sans-serif'
                      }
                  }
              },
              yAxis: {
                  min: 0,
                  title: {
                      text: 'Matches'
                  }
              },
              legend: {
                  enabled: false
              },
              tooltip: {
                  pointFormat: 'Matches: <b>{point.y:.1f} </b>'
              },
              series: [{
                  name: 'dataset',
                  data:  seriesData1,
                  dataLabels: {
                      enabled: true,
                      rotation: -90,
                      color: '#FFFFFF',
                      align: 'right',
                      format: '{point.y:.1f}', 
                      y: 10, 
                      style: {
                          fontSize: '13px',
                          fontFamily: 'Verdana, sans-serif'
                      }
                  }   
              }]
          })
        })
    })
    
      // Number of matches won by each team over all the years of IPL
      fetch('/matchesWon').then((response) => {
            
            response.json().then((matchesWonByTeamPerYear) => { 
                let year  = Object.keys(matchesWonByTeamPerYear);
                let objArray = Object.values(matchesWonByTeamPerYear);
                let data1 = [],data2 = [], data3 = [], data4 = [], data5 = [], data6 = [], data7 = [], data8 = [], data9 = [], data10 = [], data11 = [], data12 = [], data13 = [], data14 = [], data15 = [], data16 = [];  
                  for(let i = 0; i< objArray.length; i++) {
                     let obj = objArray[i];
                                if(obj.hasOwnProperty("Kolkata Knight Riders")){
                                   data1.push(obj["Kolkata Knight Riders"]);
                                  } else {
                                     data1.push(0);
                                  } 
                                  if(obj.hasOwnProperty("Chennai Super Kings")){
                                     data2.push(obj["Chennai Super Kings"]);
                                   } else {
                                       data2.push(0);
                                  } 
                                   if(obj.hasOwnProperty("Delhi Daredevils")) {
                                   data3.push(obj["Delhi Daredevils"]);
                                  } else {
                                     data3.push(0);
                                  }
                                  if(obj.hasOwnProperty("Royal Challengers Bangalore")) {
                                      data4.push(obj["Royal Challengers Bangalore"]); 
                                   } else {
                                      data4.push(0);
                                   }
                                    if(obj.hasOwnProperty("Rajasthan Royals")) {
                                      data5.push(obj["Rajasthan Royals"]);    
                                 } else {
                                    data5.push(0);
                                 }
                                 if(obj.hasOwnProperty("Kings XI Punjab")) {
                                    data6.push(obj["Kings XI Punjab"]) ;
                                 }  else {
                                    data6.push(0);
                                 }
                                 if(obj.hasOwnProperty("Deccan Chargers")) {
                                   data7.push(obj["Deccan Chargers"]);
                                  } else {
                                     data7.push(0);
                                  }
                                  if(obj.hasOwnProperty("Mumbai Indians")) {
                                     data8.push(obj["Mumbai Indians"]); 
                                   } else {
                                      data8.push(0);
                                   }
                                    if(obj.hasOwnProperty("Kochi Tuskers Kerala")){
                                     data9.push(obj["Kochi Tuskers Kerala"]);
                                   } else {
                                      data9.push(0);
                                   }
                                   if(obj.hasOwnProperty("Pune Warriors")){
                                     data10.push(obj["Pune Warriors"]);  
                                    } else {
                                       data10.push(0);
                                    } 
                                    if(obj.hasOwnProperty("Sunrisers Hyderabad")) {
                                       data11.push(obj["Sunrisers Hyderabad"]);  
                                     } else {
                                        data11.push(0);
                                     } 
                                     if(obj.hasOwnProperty("Rising Pune Supergiants")) {
                                      data12.push(obj["Rising Pune Supergiants"]);                        
                                    } else {
                                       data12.push(0);
                                    }
                                      if(obj.hasOwnProperty("Gujarat Lions")) {
                                            data13.push(obj["Gujarat Lions"]);                              
                                     } else {
                                        data13.push(0);
                                     }
                                     if(obj.hasOwnProperty("Rising Pune Supergiant")) {
                                          data14.push(obj["Rising Pune Supergiant"]);                            
                                       } else {
                                          data14.push(0);
                                       }
                                        if(obj.hasOwnProperty("Delhi Capitals")){
                                         data15.push(obj["Delhi Capitals"]);                           
                                        } else {
                                           data15.push(0);
                                        }
                                        if(obj.hasOwnProperty("")) {
                                           data16.push(obj[""]);
                                        } else {
                                           data16.push(0);
                                        }
                                   
                               }        
                 
             
             Highcharts.chart("matches-Won-By-Team-Per-Year", {
             chart: {
             type: 'column'
             },
             title: {
             text: '2. Number of matches won by each team over all the years of IPL'
             },
             subtitle: {
             text: 'Source: ipl.com'
             },
             xAxis: {
             categories: year,
             crosshair: true
             },
             yAxis: {
             min: 0,
             title: {
                 text: 'Matches won'
             }
             },
             tooltip: {
             headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
             pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                 '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
             footerFormat: '</table>',
             shared: true,
             useHTML: true
             },
             plotOptions: {
             column: {
                 pointPadding: 0.2,
                 borderWidth: 0
             }
             },
             series: [{
             name: "Kolkata Knight Riders",
             data: data1
             }, {
             name: "Royal Challengers Bangalore" ,
             data: data4
             }, {
             name: "Chennai Super Kings",
             data: data2
             
             }, {
             name: "Kings XI Punjab",
             data: data6
             }, {
             name: "Rajasthan Royals",
             data: data5
             }, {
             name: "Delhi Daredevils",
             data: data3
             }, {
             name: "Mumbai Indians",
             data: data8
             }, {
             name: "Deccan Chargers",
             data: data7
             }, {
             name: "Kochi Tuskers Kerala",
             data: data9
             }, {
             name: "Pune Warriors",
             data: data10
             }, {
             name: "noResult",
             data: data16
             }, {
             name: "Sunrisers Hyderabad",
             data: data11
             }, {
             name: "Rising Pune Supergiants",
             data: data12
             }, {
             name: "Gujarat Lions",
             data: data13
             }, {
             name: "Rising Pune Supergiant",
             data: data14
             }, {
             name: "Delhi Capitals",
             data: data15
             }]
             });
            })
      })   
    
    
    //Extra runs conceded by each team every Year
      function myFunction(){
        const select = document.getElementById("selectBox");
          const year = select.options[select.selectedIndex].value;
        
        fetch('/extraRun?season=' + year).then((response) => {
            
            response.json().then((data) => {
        
                  const seriesData3 = [];
              for (let name in data) {
          
          seriesData3.push([name, data[name]]);
        }
        Highcharts.chart('extra-Run-Conced-By-Each-Team', {
            chart: {
                type: 'column'
            },
            title: {
                text: `3. Extra runs conceded by each team in ${year}`
            },
            subtitle: {
                text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">ipl</a>'
            },
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Extra Runs'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Extra runs: <b>{point.y:.1f} </b>'
            },
            series: [{
                name: 'dataset',
                data:  seriesData3,
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', 
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }  
            }]
        });
            })
        })
      }
    
        // Top Economical Bowlers in 2015 season
    
        fetch('/topEconomic').then((response) => {
            response.json().then((topEconomicBowler) => {
                const seriesData4 = [];
        for (let name in topEconomicBowler) {
          
          seriesData4.push([name, topEconomicBowler[name]]);
        }
        
        Highcharts.chart('top-Economic-Bowler', {
          chart: {
              type: 'column'
          },
          title: {
              text: '4. Top Economical Bowlers in 2015 season'
          },
          subtitle: {
              text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">ipl</a>'
          },
          xAxis: {
              type: 'category',
              labels: {
                  rotation: -45,
                  style: {
                      fontSize: '13px',
                      fontFamily: 'Verdana, sans-serif'
                  }
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Economy'
              }
          },
          legend: {
              enabled: false
          },
          tooltip: {
              pointFormat: 'Economy: <b>{point.y:.1f} </b>'
          },
          series: [{
              name: 'dataset',
              data: seriesData4,
              dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', 
                y: 10, 
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }    
          }]
      });
     })           
    })
    
    // Matches Won by each team per venue
    
    fetch('/matchesVenue').then((response) => {
    
        response.json().then((matchesWonbyEachTeamPerVenue) => {
            let objArray = Object.values(matchesWonbyEachTeamPerVenue);
            let dc = [],ktk = [], gl = [], rps = [], pw = [], dch = [], csk = [], kkr = [], rcb = [], rr = [], mi = [], kXp = [], srh = [], dd = [], rpst = [];  
              for(let i = 0; i< objArray.length; i++) {
                      let obj = objArray[i];
                      if(obj.hasOwnProperty("Delhi Capitals")) {
                       dc.push(obj["Delhi Capitals"]);
                    } else {
                        dc.push(0);
                    }
                     if(obj.hasOwnProperty("Kochi Tuskers Kerala")){
                        ktk.push(obj["Kochi Tuskers Kerala"]);
                    } else {
                       ktk.push(0);
                   }
                   if(obj.hasOwnProperty("Gujarat Lions")) {
                       gl.push(obj["Gujarat Lions"]);
                   } else {
                       gl.push(0);
                   }
                   if(obj.hasOwnProperty("Rising Pune Supergiants")) {
                       rps.push(obj["Rising Pune Supergiants"]);
                   } else {
                       rps.push(0);
                   }
                   if(obj.hasOwnProperty("Pune Warriors")) {
                       pw.push(obj["Pune Warriors"]);
                   } else {
                       pw.push(0);
                   }
                   if(obj.hasOwnProperty("Deccan Chargers")) {
                       dch.push(obj["Deccan Chargers"]);
                   } else {
                       dch.push(0);
                   }
                   if(obj.hasOwnProperty("Chennai Super Kings")) {
                       csk.push(obj["Chennai Super Kings"]);
                   } else {
                       csk.push(0);
                   }
                   if(obj.hasOwnProperty("Kolkata Knight Riders")) {
                       kkr.push(obj["Kolkata Knight Riders"]);
                   } else {
                       kkr.push(0);
                   }
                   if(obj.hasOwnProperty("Royal Challengers Bangalore")) {
                       rcb.push(obj["Royal Challengers Bangalore"]);
                   } else {
                       rcb.push(0);
                   }
                   if(obj.hasOwnProperty("Kings XI Punjab")) {
                       kXp.push(obj["Kings XI Punjab"]);
                   }else {
                       kXp.push(0);
                   }
                   if(obj.hasOwnProperty("Rajasthan Royals")) {
                       rr.push(obj["Rajasthan Royals"]);
                   } else {
                       rr.push(0);
                   }
                   if(obj.hasOwnProperty("Mumbai Indians")) {
                       mi.push(obj["Mumbai Indians"]);
                   } else {
                       mi.push(0);
                   }
                   if(obj.hasOwnProperty("Rising Pune Supergiant")) {
                       rpst.push(obj["Rising Pune Supergiant"]);
                   } else {
                       rpst.push(0);
                   }
                   if(obj.hasOwnProperty("Sunrisers Hyderabad")) {
                       srh.push(obj["Sunrisers Hyderabad"]);
                   } else {
                       srh.push(0);
                   }
                   if(obj.hasOwnProperty("Delhi Daredevils")) {
                       dd.push(obj["Delhi Daredevils"]);
                   }else {
                       dd.push(0);
                   }
               
              }
    
       Highcharts.chart('matches-Won-by-Each-Team-Per-Venue', {
           chart: {
               type: 'bar'
           },
           title: {
               text: '5. Story: Matches Won by each team per venue'
           },
           xAxis: {
               categories: Object.keys(matchesWonbyEachTeamPerVenue)
                   
           },
           yAxis: {
               min: 0,
               title: {
                   text: 'Matches won vs stadium'
               }
           },
           legend: {
               reversed: true
           },
           plotOptions: {
               series: {
                   stacking: 'normal'
               }
           },
           series: [{
               name: 'Delhi Capitals',
               data: dc
           }, {
               name: 'Kochi Tuskers Kerala',
               data: ktk
           }, {
               name: 'Gujarat Lions',
               data: gl
           }, {
               name: 'Rising Pune Supergiants',
               data: rps
           }, {
               name: 'Pune Warriors',
               data: pw
           }, {
               name: 'Deccan Chargers',
               data: dch
           },  {
               name: 'Chennai Super Kings',
               data: csk
           },  {
               name: 'Kolkata Knight Riders',
               data: kkr
           },  {
               name: 'Royal Challengers Bangalore',
               data: rcb
           },  {
               name: 'Kings XI Punjab',
               data: kXp
           },  {
               name: 'Rajasthan Royals',
               data: rr
           },  {
               name: 'Mumbai Indians',
               data: mi
           },  {
               name: 'Rising Pune Supergiant',
               data: rpst
           },  {
               name: 'Sunrisers Hyderabad',
               data: srh 
           },  {
               name: 'Delhi Daredevils',
               data: dd 
           }]
       });
        })
    })