// Puedes hacer uso de la base de datos a través de la variable `data`
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
// Create the data table.
  var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Alumnas con 100 puntos', 1],
        ['Estudiantes con 70 puntos', 4],
         ['Estudiantes con menos de 70 puntos', 5],
      
      ]);
 var options = {'title':'Meta de puntos superada por Spring',
                'width':400,'height':300,
                "colors":[ '#f9a91a','rgb(124, 120, 120)','#cdcbcb']
};

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
  }
  google.charts.load("current", {packages:["corechart"]});
  google.charts.setOnLoadCallback(drawChart2);
  
  function drawChart2() {
  // Create the data table.
    var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Alumnas con 100 puntos', 1],
          ['Estudiantes con 70 puntos', 4],
           ['Estudiantes con menos de 70 puntos', 5],
        
        ]);
  // Set chart options
   var options = {'title':'Meta de puntos superada por Spring',
                  'width':400,'height':300,
                  "colors":['rgb(124, 120, 120)','#cdcbcb','#f9a91a']
                 };
  // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
    }

    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    // Create the data table.
      var data = new google.visualization.DataTable();
          data.addColumn('string', 'Topping');
          data.addColumn('number', 'Slices');
          data.addRows([
            ['Alumnas con 100 puntos', 1],
            ['Estudiantes con 70 puntos', 4],
             ['Estudiantes con menos de 70 puntos', 5],
          
          ]);
    // Set chart options
     var options = {'title':'Meta de puntos superada por Spring',
                    'width':400,'height':300,
                    "colors":[ 'rgb(124, 120, 120)','#f9a91a','#cdcbcb']
    
                   };
    // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
          chart.draw(data, options);
      }





