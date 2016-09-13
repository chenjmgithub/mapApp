var zoom = d3.behavior.zoom()
          .scaleExtent([0.1, 10])           
          .on("zoom", zoomed);

var svg = d3.select("body").select("svg").select("g");
var g = d3.select("body").select("svg").select("g").call(zoom);;
    
    function zoomed() {
      d3.select("g").attr("transform", 
        "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    };

//路线
var lineData = [ { "x": 1700,   "y": 755},  { "x": 1640,  "y": 755},
                 { "x": 1640,  "y": 560},  { "x": 595, "y": 560},
                 { "x": 595, "y": 410},{"x": 610, "y": 410},];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 1700,   "y": 365},  { "x": 1640,  "y": 365},
                 { "x": 1640,  "y": 560},  { "x": 595, "y": 560},
                 { "x": 595, "y": 410},{"x": 610, "y": 410},];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");                            

var lineData = [ { "x": 85,   "y": 215},  { "x": 85,  "y": 365},
                 { "x": 625,  "y": 365},{ "x": 625,  "y": 380}];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear"); 
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 445,   "y": 215},  { "x": 445,  "y": 365}];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 795,   "y": 215},  { "x": 795,  "y": 365},
                  { "x": 625,  "y": 365}];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 1155,   "y": 215},  { "x": 1155,  "y": 365},
                  { "x": 625,  "y": 365}];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 1505,   "y": 215},  { "x": 1505,  "y": 365},
                  { "x": 625,  "y": 365}];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 85,   "y": 895},{ "x": 85,  "y": 560},
                  { "x": 595, "y": 560},{ "x": 595, "y": 410},{"x": 610, "y": 410},];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 445,   "y": 895},{ "x": 445,  "y": 560},
                  { "x": 595, "y": 560},{ "x": 595, "y": 410},{"x": 610, "y": 410},];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 795,   "y": 895},{ "x": 795,  "y": 560},
                  { "x": 595, "y": 560},{ "x": 595, "y": 410},{"x": 610, "y": 410},];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none");

var lineData = [ { "x": 1155,   "y": 895},{ "x": 1155,  "y": 560},
                  { "x": 595, "y": 560},{ "x": 595, "y": 410},{"x": 610, "y": 410},];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")

var lineData = [ { "x": 1505,   "y": 895},{ "x": 1505,  "y": 560},
                  { "x": 595, "y": 560},{ "x": 595, "y": 410},{"x": 610, "y": 410},];
var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");
var lineGraph = svg.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "blue")
                            .attr("stroke-width", 2)
                            .attr("fill", "none")













