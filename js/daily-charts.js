
     
    
    // required for Pie chart
    Highcharts.setOptions({
      colors: Highcharts.map(
        Highcharts.getOptions().colors,
        function (color) {
          return {
            radialGradient: {
              cx: 0.5,
              cy: 0.3,
              r: 0.7,
            },
            stops: [
              [0, color],
              [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
            ],
          };
        }
      ),
    });
    // Donut1 for daily
    Highcharts.chart("container-donut1", {
      chart: { type: "pie", height: "70%" },
      subtitle: {
        verticalAlign: "middle",
        floating: true,
        text: "<b>1138</b><br/ >Tickets",
      },
      colors: ["#E2445B", "#01C875"],
      plotOptions: {
        pie: {
          innerSize: 60,
          depth: 60,
        },
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [
        {
          name: "Delivered amount",
          data: [
            ["Open", 66],
            ["Close", 33], 
          ],
        },
      ],
    }); 
    // Donut2 for daily
    Highcharts.chart("container-donut2", {
      chart: { type: "pie", height: "70%" },
      subtitle: {
        verticalAlign: "middle",
        floating: true,
        text: "<b>1138</b><br/ >Tickets",
      },
      colors: ["#E2445B", "#01C875"],
      plotOptions: {
        pie: {
          innerSize: 60,
          depth: 60,
        },
      },
      title:{
          text: null,
      },
      credits: {
          enabled: false,
     },
      series: [
        {
          name: "Delivered amount",
          data: [
            ["Open", 66],
            ["Close", 33],
          ],
        },
      ],
    }); 

    // pie1 for daily
    Highcharts.chart("container-pie1", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: "70%",
        type: "pie",
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      tooltip: { pointFormat: "<b >{point.percentage:.1f}%</b>" },
      accessibility: { point: { valueSuffix: "%" } },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          colors: ["#F2C06C", "#F8EA94", "#A1CD7A", "#D44B52", "#F69380"],
          dataLabels: {
            enabled: true,
            format: " {point.percentage: f} %",
            connectorColor: "silver",
          },
        },
      },
      series: [
        {
          name: "Share",
          data: [
            { name: "P3", y: 13 },
            { name: "P4", y: 9 },
            { name: "P5", y: 23 },
            { name: "P1", y: 35 },
            { name: "P2", y: 20 },
          ],
        },
      ],
    }); 
    // pie2 for daily
    Highcharts.chart("container-pie2", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        height: "70%",
        type: "pie",
      },
      tooltip: { pointFormat: "<b>{point.percentage:.1f}%</b>" },
      accessibility: { point: { valueSuffix: "%" } },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          colors: ["#F2C06C", "#F8EA94", "#A1CD7A", "#D44B52", "#F69380"],
          dataLabels: {
            enabled: true,
            format: " {point.percentage: f} %",
            connectorColor: "silver",
          },
        },
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [
        {
          name: "Share",
          data: [
            { name: "P3", y: 13 },
            { name: "P4", y: 9 },
            { name: "P5", y: 23 },
            { name: "P1", y: 35 },
            { name: "P2", y: 20 },
          ],
        },
      ],
    });

    // Resolution Bar1 for daily
    const chart = Highcharts.chart("resolution-b1", {
      colors: ["#01C875", "#FDAB3D"],
      xAxis: {
        categories: ["Achived", "Breached"],
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [
        {
          type: "column",
          colorByPoint: true,
          data: [700, 300],
          showInLegend: false,
        },
      ],
    });
    chart.update({
      chart: {
        inverted: false,
        polar: false,
        height: "120%",
      },
    });
    //Resolution Bar2 for daily popup
    const chartb1 = Highcharts.chart("resolution-b2", {
      colors: ["#01C875", "#FDAB3D"],
      xAxis: {
        categories: ["Achived", "Breached"],
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [
        {
          type: "column",
          colorByPoint: true,
          data: [700, 300],
          showInLegend: false,
        },
      ],
    });
    chartb1.update({
      chart: {
        inverted: false,
        polar: false,
        height: "120%",
      },
    });

    // response Bar3 for daily  
    const chartb3 = Highcharts.chart("response-b1", {
      colors: ["#01C875", "#FDAB3D"],
      xAxis: {
        categories: ["Achived", "Breached"],
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [
        {
          type: "column",
          colorByPoint: true,
          data: [700, 300],
          showInLegend: false,
        },
      ],
    });
    chartb3.update({
      chart: {
        inverted: false,
        polar: false,
        height: "120%",
      },
    });

    // response Bar4 for daily popup
    const chartb4 = Highcharts.chart("response-b2", {
      colors: ["#01C875", "#FDAB3D"],
      xAxis: {
        categories: ["Achived", "Breached"],
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [
        {
          type: "column",
          colorByPoint: true,
          data: [700, 300],
          showInLegend: false,
        },
      ],
    });
    chartb4.update({
      chart: {
        inverted: false,
        polar: false,
        height: "120%",
      },
    });

    //Meter graph1
    google.charts.load("current", { packages: ["corechart", "line"] });
    google.charts.setOnLoadCallback(drawBasic1);
    google.charts.setOnLoadCallback(drawBasic2);

    function drawBasic1() {
      var data = new google.visualization.DataTable();
      data.addColumn("number", "X");
      data.addColumn("number", "dates");

      data.addRows([
        [0, 50], [1, 62], [2, 60], [3, 65], [4, 58], [5, 68], [6, 38], [7, 63],
        [8, 57], [9, 78], [10, 65], [11, 65], [12, 70], [13, 57], [14, 52], [15, 65],
        [16, 45], [17, 75], [18, 65], [19, 52], [20, 58], [21, 50], [22, 62], [23, 60],
        [24, 65], [25, 58], [26, 68], [27, 38], [28, 63], [29, 57], [30, 78], [31, 65],
        [32, 65], [33, 70], [34, 57], [35, 52], [36, 65], [37, 45], [38, 75], [39, 65],
        [40, 52], [41, 58], [42, 50], [43, 62], [44, 60], [45, 65], [46, 58], [47, 68],
        [48, 38], [49, 63], [50, 57], [51, 78], [52, 65], [53, 65], [54, 70], [55, 57],
        [56, 52], [57, 65], [58, 45], [59, 75], [60, 65], [61, 52], [62, 58], [63, 50],
        [64, 62], [65, 60], [66, 65], [67, 58], [68, 68], [69, 38], [70, 63], [71, 57],
        [72, 78], [73, 65], [74, 65], [75, 70], [76, 57], [77, 52], [78, 65], [79, 45],  [80, 75],
      ]);

      var options = {
        hAxis: {
          title: "Date",
        },
        vAxis: {
          title: "Consumption",
        },
        colors: ["#77216F"],
        legend: "none",
      };

      var chart = new google.visualization.LineChart(
        document.getElementById("chart_div1")
      );

      chart.draw(data, options);
    }
    
    function drawBasic2() {
      var data = new google.visualization.DataTable();
      data.addColumn("number", "X");
      data.addColumn("number", "dates");

      data.addRows([
        [0, 50], [1, 62], [2, 60], [3, 65], [4, 58], [5, 68], [6, 38], [7, 63],
        [8, 57], [9, 78], [10, 65], [11, 65], [12, 70], [13, 57], [14, 52], [15, 65],
        [16, 45], [17, 75], [18, 65], [19, 52], [20, 58], [21, 50], [22, 62], [23, 60],
        [24, 65], [25, 58], [26, 68], [27, 38], [28, 63], [29, 57], [30, 78], [31, 65],
        [32, 65], [33, 70], [34, 57], [35, 52], [36, 65], [37, 45], [38, 75], [39, 65],
        [40, 52], [41, 58], [42, 50], [43, 62], [44, 60], [45, 65], [46, 58], [47, 68],
        [48, 38], [49, 63], [50, 57], [51, 78], [52, 65], [53, 65], [54, 70], [55, 57],
        [56, 52], [57, 65], [58, 45], [59, 75], [60, 65], [61, 52], [62, 58], [63, 50],
        [64, 62], [65, 60], [66, 65], [67, 58], [68, 68], [69, 38], [70, 63], [71, 57],
        [72, 78], [73, 65], [74, 65], [75, 70], [76, 57], [77, 52], [78, 65], [79, 45],  [80, 75],
      ]);

      var options = {
        hAxis: {
          title: "Date",
        },
        vAxis: {
          title: "Consumption",
        },
        colors: ["#77216F"],
        legend: "none",
      };

      var chart = new google.visualization.LineChart(
        document.getElementById("chart_div2")
      );

      chart.draw(data, options);
    }
    

  //today date for dashboard daily
   $( document ).ready(function() {
    var date = new Date();
    var currentDate = date.toISOString().slice(0,10);
    var currentTime = date.getHours() + ':' + date.getMinutes();

    document.getElementById('currentDate').value = currentDate;
    });
  
    //////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    
   
  function printdonut1(){ 
    var mywindow = window.open(); 
    var chart = document.getElementById("container-donut2").innerHTML; 
    var title=document.getElementById("dt1").innerHTML;
    var info=document.getElementById("di1").innerHTML ;  
    mywindow.document.write( title.bold()+ chart+ info );
    mywindow.print();
  } 
  function printpie1() 
   {    
    var mywindow = window.open(); 
    var chart = document.getElementById("container-pie2").innerHTML; 
    var charttitle=document.getElementById("pt1").innerHTML;
    var info=document.getElementById("pi1").innerHTML ;  
    mywindow.document.write(charttitle.bold()+ chart+ info);
    mywindow.print();
     
    }   
  function printpie2(){  
    var mywindow = window.open(); 
    var chart = document.getElementById("container-pie4").innerHTML; 
    var charttitle=document.getElementById("pt2").innerHTML;
    var info=document.getElementById("pi2").innerHTML ;  
    mywindow.document.write(charttitle.bold()+ chart+ info);
    mywindow.print();
  } 
  function printpie3(){
    var mywindow = window.open(); 
    var chart = document.getElementById("container-pie6").innerHTML; 
    var charttitle=document.getElementById("pt3").innerHTML;
    var info=document.getElementById("pi3").innerHTML ;  
    mywindow.document.write(charttitle.bold()+ chart+ info);
    mywindow.print();
  } 
  function resolutionb1(){ 
    var mywindow = window.open(); 
    var chart = document.getElementById("resolution-b2").innerHTML; 
    var charttitle=document.getElementById("rt1").innerHTML;
    var info=document.getElementById("ri1").innerHTML ;  
    mywindow.document.write(charttitle.bold()+ chart+ info);
    mywindow.print();
  }
  function Responseb2(){
    var mywindow = window.open(); 
    var chart = document.getElementById("response-b2").innerHTML; 
    var charttitle=document.getElementById("rt2").innerHTML;
    var info=document.getElementById("ri2").innerHTML ;  
    mywindow.document.write(charttitle.bold()+ chart+ info);
    mywindow.print();
  } 
  function approvalb3(){   
    var mywindow = window.open(); 
    var chart = document.getElementById("approval-bar2").innerHTML; 
    var charttitle=document.getElementById("bt3").innerHTML;
    var info=document.getElementById("bi3").innerHTML ;  
    mywindow.document.write(charttitle.bold()+ chart+ info);
    mywindow.print();
   } 
  function meter1print(){
    var mywindow = window.open(); 
    var chart = document.getElementById("chart_div2").innerHTML; 
    var charttitle=document.getElementById("mt1").innerHTML; 
    mywindow.document.write(charttitle.bold()+ chart );
    mywindow.print();
  }    
  function activityprint(){ 
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("activityprint").innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    document.body.innerHTML = getFullContent;
  } 
  function spaceoccupancyprint(){ 
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("spaceoccupancydata").innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    document.body.innerHTML = getFullContent;
  } 
  function tbl1print(){ 
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("tbl1info").innerHTML;
    var title =document.getElementById("tbl1title1").innerHTML;
    document.body.innerHTML = title.bold() + printsection ;
    window.print();
    document.body.innerHTML = getFullContent;
  }  
  function electricitytblprint(){ 
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("electricity-info").innerHTML;
    var title = document.getElementById("tbl2title").innerHTML;
    document.body.innerHTML = title.bold()+printsection;
    window.print();
    document.body.innerHTML = getFullContent;
  }  