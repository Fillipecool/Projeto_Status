am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX: true
}));

chart.get("colors").set("step", 3);


// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);
cursor.lineX.set("visible", false);



// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
  maxDeviation: 0.3,
  baseInterval: {
    timeUnit: "day",
    count: 1
  },
  renderer: am5xy.AxisRendererX.new(root, {}),
  tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(root, {})
}));



// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.LineSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  stroke: am5.color("#9932CC"),
  valueYField: "value1",
  valueXField: "date",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueX}: {valueY}\n{previousDate}: {value2}"
  })
}));

series.strokes.template.setAll({
  strokeWidth: 2,

});

series.get("tooltip").get("background").set("fillOpacity", 0.5);
var series2 = chart.series.push(am5xy.LineSeries.new(root, {
  name: "Series 2",
  xAxis: xAxis,
  yAxis: yAxis,
  stroke: am5.color("#7FFFD4"),
  valueYField: "value2",
  valueXField: "date"
}));
series2.strokes.template.setAll({
  strokeWidth: 2
});

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
root.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX"]
  
});

// Set data
var data = [{
  date: new Date(2019, 5, 12).getTime(),
  value1: 2,
  value2: 6,
}, {
  date: new Date(2019, 5, 13).getTime(),
  value1: 5,
  value2: 12,
}, {
  date: new Date(2019, 5, 14).getTime(),
  value1: 9,
  value2: 10,
}, {
  date: new Date(2019, 5, 15).getTime(),
  value1: 7,
  value2: 25,
}, {
  date: new Date(2019, 5, 16).getTime(),
  value1: 19,
  value2: 30,
}, {
  date: new Date(2019, 5, 17).getTime(),
  value1: 23,
  value2: 42,
}, {
  date: new Date(2019, 5, 18).getTime(),
  value1: 8,
  value2: 38,
},{
  date: new Date(2019, 5, 19).getTime(),
  value1: 12,
  value2: 26,
},{
  date: new Date(2019, 5, 20).getTime(),
  value1: 7,
  value2: 25,
},{
  date: new Date(2019, 5, 21).getTime(),
  value1: 35,
  value2: 45,
}]


series.data.setAll(data);
series2.data.setAll(data);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(400);
series2.appear(400);
chart.appear(400, 100);

}); // end am5.ready()