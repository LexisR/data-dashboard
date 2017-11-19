// Puedes hacer uso de la base de datos a través de la variable `data`
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

               };
// Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
      }
//grafica dos 
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Sprint', 'Meta HSE', ],
          ['Sprint 1',  130,  ],
          ['Sprint 2',  91, ],
          ['Sprint 3',  90,  ],
          ['Sprint 4',  95, ]
        ]);

        var options = {
          title: 'Cantidad de Estudiates',
          hAxis: {title: 'Año 2017.G1',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div1'));
        chart.draw(data, options);
      }
//grafico tres
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);
function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
   ['Mes de Noviembre 2017', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes','Average'],
   ['Semana 1',               110,      129,        130,       128,       109,      95.5, ],
   ['Semana 2',               128,       125,        130,       130,       124,       100.5, ],
   ['Semana 3',               115,      118,        120,       118,        105,      85.5, ],
   ['Semana 4',               124,      115,        115,       110,        111,      105.5, ],
   ['Seamaa 5',               101,      111,        130,       102,         90,      130.0, ]
]);
var options = {
title : 'Promedio de Asistencia',
vAxis: {title: ' Cantidad de Estudiantes'},
hAxis: {title: 'Mes de Noviembre 2017'},
seriesType: 'bars',
series: {5: {type: 'line'}}
};

var chart = new google.visualization.ComboChart(document.getElementById('chart_div3'));
chart.draw(data, options);
}