
     
    
    
    
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
    // Donut1 for Custom
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
    // Donut2 for Custom
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

    // pie1 for Custom
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
    // pie2 for Custom
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
    
    // Build the chart pie3
    Highcharts.chart('container-pie3', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,height: '70%',
          type: 'pie'
      },
      tooltip: { pointFormat:  '<b>{point.percentage:.1f}%</b>' },
      accessibility: {point: { valueSuffix: '%'}
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: [
                      '#F8EA94',
                      '#A1CD7A',
                      '#01C875',
                      '#D44B52',
                      '#F69380',
                      '#F2C06C' 
              ],
              dataLabels: {
                  enabled: true,
                  format: ' {point.percentage: f} %',
                  connectorColor: 'silver'
              }
          }
      },
      series: [{
          name: 'Share',
          data: [
              { name: 'WorkInProgress', y: 20 },
              { name: 'PartiallyClosed', y: 16 },
              { name: 'Closed', y: 11 },
              { name: 'Open', y: 12 },
              { name: 'Overdue', y: 16 } ,
              { name: 'Scheduled', y: 25}
          ]
      }]
    }); 
    // Build the chart pie4
    Highcharts.chart('container-pie4', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,height: '70%',
          type: 'pie'
      },
      tooltip: { pointFormat:  '<b>{point.percentage:.1f}%</b>' },
      accessibility: {point: { valueSuffix: '%'}
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: [
                      '#F8EA94',
                      '#A1CD7A',
                      '#01C875',
                      '#D44B52',
                      '#F69380',
                      '#F2C06C' 
              ],
              dataLabels: {
                  enabled: true,
                  format: ' {point.percentage: f} %',
                  connectorColor: 'silver'
              }
          }
      },
      series: [{
          name: 'Share',
          data: [
              { name: 'WorkInProgress', y: 20 },
              { name: 'PartiallyClosed', y: 16 },
              { name: 'Closed', y: 11 },
              { name: 'Open', y: 12 },
              { name: 'Overdue', y: 16 } ,
              { name: 'Scheduled', y: 25}
          ]
      }]
    }); 

    //pie5  
    Highcharts.chart('container-pie5', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,height: '70%',
          type: 'pie'
      },
      tooltip: { pointFormat:  '<b>{point.percentage:.1f}%</b>' },
      accessibility: {point: { valueSuffix: '%'}
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: [
                      '#01C875',
                      '#FDE762',
                      '#FDAB3D',
                      '#2C001E',
                      '#77216F'  
              ],
              dataLabels: {
                  enabled: true,
                  format: ' {point.percentage: f} %',
                  connectorColor: 'silver'
              }
          }
      },
      series: [{
          name: 'Share',
          data: [
              { name: 'Okey', y: 13 },
              { name: 'Bad', y: 9 },
              { name: 'Terrible', y: 23 },
              { name: 'Great', y:35 },
              { name: 'Good', y: 20}  
          ]
      }]
    }); 
    //pie6 
    Highcharts.chart('container-pie6', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,height: '70%',
          type: 'pie'
      },
      tooltip: { pointFormat:  '<b>{point.percentage:.1f}%</b>' },
      accessibility: {point: { valueSuffix: '%'}
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              colors: [
                      '#01C875',
                      '#FDE762',
                      '#FDAB3D',
                      '#2C001E',
                      '#77216F'  
              ],
              dataLabels: {
                  enabled: true,
                  format: ' {point.percentage: f} %',
                  connectorColor: 'silver'
              }
          }
      },
      series: [{
          name: 'Share',
          data: [
              { name: 'Okey', y: 13 },
              { name: 'Bad', y: 9 },
              { name: 'Terrible', y: 23 },
              { name: 'Great', y:35 },
              { name: 'Good', y: 20}  
          ]
      }]
    });

    // Resolution Bar1 for Custom
    const chartb1 = Highcharts.chart("resolution-b1", {
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
    //Resolution Bar2 for Custom popup
    const chartb2 = Highcharts.chart("resolution-b2", {
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
    chartb2.update({
      chart: {
        inverted: false,
        polar: false,
        height: "120%",
      },
    });

    // response Bar3 for Custom  
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

    // response Bar4 for Custom popup
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

      //approval bar:: bar3 
    const cost1 = Highcharts.chart('approval-bar1', {
      
      colors:['#01C875', '#77216F', '#FDAB3D', '#E2445B'],
      xAxis: {
          categories: ['Approved', 'Cancelled', 'Pending', 'Rejected' ],
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [{
          type: 'column',
          colorByPoint: true,
          data: [545, 400, 950, 602],
          showInLegend: false
      }]
    });
    cost1.update({
    chart: {
      inverted: false,
      polar: false,height: '90%',
    } 
    });
    //bar4
    const cost2 = Highcharts.chart('approval-bar2', {
      
      colors:['#01C875', '#77216F', '#FDAB3D', '#E2445B'],
      xAxis: {
          categories: ['Approved', 'Cancelled', 'Pending', 'Rejected' ],
      },
      title:{
          text:null,
      },
      credits: {
          enabled: false,
     },
      series: [{
          type: 'column',
          colorByPoint: true,
          data: [545, 400, 950, 602],
          showInLegend: false
      }]
    });
    cost2.update({
    chart: {
      inverted: false,
      polar: false,height: '90%',
    } 
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
    
      ///big time consumption bar

      Highcharts.chart('timebar2', {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        credits: {
            enabled: false,
       },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: [
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021'
            ],
            crosshair: true
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Total Quantity (y x 1000)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
        series: [ {
            name: 'Agriculture',
            data: [4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55,
                4.53, 4.51, 4.49, 4.57]
    
        }]
    });
  

      Highcharts.chart('timebar1', {
        chart: {
            type: 'column'
        },
        title: {
            text: null
        },
        credits: {
            enabled: false,
       },
        subtitle: {
            text:'Month', 
        },
        xAxis: {
            categories: [
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021'
            ],
            crosshair: true
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Total Quantity (y x 1000)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
        series: [ {
            name: 'Consumable Inventory',
            data: [4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55,
                4.53, 4.51, 4.49, 4.57]

        }]
    });

  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////print section below///////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////
 
   
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
  function timebar(){
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("time-bar").innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    document.body.innerHTML = getFullContent;
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
  function powoprint(){ 
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("powo-info").innerHTML;
    document.body.innerHTML = printsection;
    window.print();
    document.body.innerHTML = getFullContent;
  } 
  function mailroomprint(){ 
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("mail-info").innerHTML;
    var title = document.getElementById("mailtitle").innerHTML;
    document.body.innerHTML = title.bold()+printsection;
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
  function inventoryprint(){ 
    var getFullContent = document.body.innerHTML;
    var printsection = document.getElementById("inventory-info").innerHTML;
    var title = document.getElementById("inventorytitle").innerHTML;
    document.body.innerHTML = title.bold()+printsection;
    window.print();
    document.body.innerHTML = getFullContent;
  } 
 



  //today date for dashboard Custom
   $( document ).ready(function() {
    var date = new Date();
    var currentDate = date.toISOString().slice(0,10);
    var currentTime = date.getHours() + ':' + date.getMinutes();

    document.getElementById('currentDate').value = currentDate;
    });
  

 



    //for date range in custom area
    
  $( document ).ready(function() {
    var date = new Date();
    var currentDate = date.toISOString().slice(0,10);
    var currentTime = date.getHours() + ':' + date.getMinutes();

    document.getElementById('currentDate').value = currentDate;
    });

    //range calander
    
  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });