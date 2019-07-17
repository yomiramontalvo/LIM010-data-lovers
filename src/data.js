google.charts.load('current', { packages: ['corechart', 'line'] });
/*google.charts.setOnLoadCallback(drawBasic);
*/
google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

function drawBasic2(data1,min,max) {
  let datafilter= data1.filter(datanew => (datanew[0]>=min && datanew[0]<=max) );   
console.log(datafilter);


  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', '% o escala');

  data.addRows(datafilter);

  var options = {
    hAxis: {
      title: 'Year'
    },
    vAxis: {
      title: 'Indicator'
    }
  };

  var chartnormal = new google.visualization.LineChart(document.getElementById('chart'));

  chartnormal.draw(data, options);
}


function drawTable(data1,min,max) {
 let datafilter= data1.filter(datanew => (datanew[0]>=min && datanew[0]<=max) );   
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'año');
        data.addColumn('number', 'porcentaje');
        data.addRows(datafilter);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
      }


function drawTableorder(data1,min,max) {
  let datafilter= data1.filter(datanew => (datanew[0]>=min && datanew[0]<=max) );
  let inmatrizorder=datafilter;

 let sortfunction=(a,b)=>{
  if(a[1]===b[1]){
    return 0;
  }else {
    return (a[1]<b[1]) ? -1:1;
  }
   };
 inmatrizorder.sort(sortfunction);

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'año');
  data.addColumn('number', 'porcentaje');
  data.addRows(inmatrizorder);
       
  var table = new google.visualization.Table(document.getElementById('table_divorderasc'));
       
  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}



