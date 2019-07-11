google.charts.load('current', { packages: ['corechart', 'line'] });
/*google.charts.setOnLoadCallback(drawBasic);
*/
function drawBasic2(number) {
  let matrizIndicator = new Array(Object.entries(WORLDBANK.PER.indicators[number].data));
  let inmatriz = matrizIndicator[0];
  inmatriz.forEach(function (ele, ind) {
    inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
    inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);
    console.log(number);
  });

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'X');
  data.addColumn('number', '% o escala');

  data.addRows(inmatriz);

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

function drawBasic1(number) {
  let matrizIndicator = new Array(Object.entries(WORLDBANK.PER.indicators[number].data));
  let inmatriz = matrizIndicator[0];
  inmatriz.forEach(function (ele, ind) {
    inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
    inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);
    console.log(number);
  });
 let inmatrizorder=inmatriz;

 let sortfunction=(a,b)=>{
  if(a[1]===b[1]){
    return 0;
  }else {
    return (a[1]<b[1]) ? -1:1;
  }
   };
 inmatrizorder.sort(sortfunction);
 inmatrizorder.forEach(function (ele, ind) {
let save=inmatrizorder[ind][0];
inmatrizorder[ind][0]=inmatrizorder[ind][1];
inmatrizorder[ind][1]=save;
});
 
  var data = new google.visualization.DataTable();
  data.addColumn('number', '% o escala');
  data.addColumn('number', 'X');

  data.addRows(inmatrizorder);

  var options = {
    hAxis: {
      title: 'Indicator'
    },
    vAxis: {
      title: 'Year'
    }
  };

  var chartorder = new google.visualization.LineChart(document.getElementById('orderchart_div'));

  chartorder.draw(data, options);
}

function prom(number){
  let matrizIndicator = new Array(Object.entries(WORLDBANK.PER.indicators[number].data));
  let inmatriz = matrizIndicator[0];
  inmatriz.forEach(function (ele, ind) {
    inmatriz[ind][0] = parseInt(inmatriz[ind][0]);
    inmatriz[ind][1] = parseFloat(inmatriz[ind][1]);
  });
  let i=0;
  let sum=0;
  let long=inmatriz.length;
  for (let j=0;j<long;j++){
    if(isNaN(inmatriz[j][1])===false){
    i++;
    sum=sum+inmatriz[j][1];}
   }
let media=sum/i; console.log(sum);console.log(i);console.log(media);
  return media;
}
