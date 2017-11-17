// Puedes hacer uso de la base de datos a través de la variable `data`
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
// Create the data table.
  var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['2017-G1', 3],
        ['2017-G2', 1],
        ['2016-G1', 1],
        ['2016-G2', 1],
        ['2015-G1', 2],
        ['2015-G2', 2],
        ['2014-G1', 2]
      ]);
// Set chart options
 var options = {'title':'Estudiantes presentes Santiago',
                'width':400,'height':300,
                  
               };
// Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
      }