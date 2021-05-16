import React, { useEffect } from "react";
import Chart from 'chart.js/auto'


function App() {
  useEffect(() => {
    let myChart = document.getElementById('myChart').getContext('2d')
    //Global options
    Chart.defaults.defaultFontFamily = 'Lato';
    Chart.defaults.defaultFontSize = 18;
    Chart.defaults.defaultFontColor = '#777';
    
    let massPopChart = new Chart(myChart, {
      type:'polarArea', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[{
          label:'Population',
          data:[614594, 181045, 153060, 106519, 105162, 95072],
          // backgroundColor: 'green',
          backgroundColor: ['pink', 'green', 'red', 'yellow', 'blue','gray'],
          borderWidth: 1,
          borderColor: '#777',
          hoverBorderWidth: 3,
        }],

      },
      options:{
        plugins:{
          title:{
            display:true,
            text:'Largest Cities In Massachusetts',
          }, 
          legend:{
            display: true,
            position:'right'
          },
          tooltip:{
            enabled:true
          }
        },
        layout: {
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        }
      }
    });
  }, [])


  return (
    <div className="app">
      <h1>Hello World!</h1>
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default App;
