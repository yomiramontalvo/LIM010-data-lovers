google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

let matrizIndicator=new Array (Object.entries(WORLDBANK.PER.indicators[0].data));
let inmatriz=matrizIndicator[0];

inmatriz.forEach(function(ele,ind) {
inmatriz[ind][0]=parseFloat(inmatriz[ind][0]);
inmatriz[ind][1]=parseFloat(inmatriz[ind][1]);
});

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');

      data.addRows(inmatriz);

      var options = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }