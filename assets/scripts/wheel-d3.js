//
// <body>
//    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js"></script>
//    <script>
//  var sequentialScale = d3.scaleSequential()
//  	.domain([0, 39])
//  	.interpolator(d3.interpolateRainbow);
//    </script>
//
//     <div id="chart"></div>
//     <div id="developer"><h1></h1></div>
//
//     <script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
//     <script type="text/javascript" charset="utf-8">
//         var padding = {top:20, right:40, bottom:0, left:0},
//             w = 500 - padding.left - padding.right,
//             h = 500 - padding.top  - padding.bottom,
//             r = Math.min(w, h)/2,
//             rotation = 0,
//             oldrotation = 0,
//             picked = 100000,
//             oldpick = [];
//             //randomNumbers = getRandomNumbers();
//
//         var data = [
//                     {"label":"?",  "value":1,  "developer":"Nick"}, // padding
//                     {"label":"?",  "value":1,  "developer":"Danny"}, //font-family
//                     {"label":"?",  "value":1,  "developer":"Michelle"}, //color
//                     {"label":"?",  "value":1,  "developer":"Soren"}, //font-weight
//                     {"label":"?",  "value":1,  "developer":"Erin"}, //font-size
//                     {"label":"?",  "value":1,  "developer":"Eric"}, //background-color
//                     {"label":"?",  "value":1,  "developer":"Moises"}, //nesting
//                     {"label":"?",  "value":1,  "developer":"Marc"}, //bottom
//                     {"label":"?",  "value":1,  "developer":"David"}, //sans-serif
//                     {"label":"?", "value":1, "developer":"Kim"}, //period
//                     {"label":"?", "value":1, "developer":"Martin"}, //pound sign
//                     {"label":"?", "value":1, "developer":"Elina"}, //<body>
//                     {"label":"?", "value":1, "developer":"Lance"}, //<ul>
//                     {"label":"?", "value":1, "developer":"Nancy"}, //<h1>
//                     {"label":"?", "value":1, "developer":"Dave"}, //margin
//                     {"label":"?", "value":1, "developer":"Soo"}, //< >
//                     {"label":"?", "value":1, "developer":"Jenny"}, // { }
//                     {"label":"?", "value":1, "developer":"Sarah"}, //<p>
//         ];
//
//
//         var svg = d3.select('#chart')
//             .append("svg")
//             .data([data])
//             .attr("width",  w + padding.left + padding.right)
//             .attr("height", h + padding.top + padding.bottom);
//
//         var container = svg.append("g")
//             .attr("class", "chartholder")
//             .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
//
//         var vis = container
//             .append("g");
//
//         var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
//
//         // declare an arc generator function
//         var arc = d3.svg.arc().outerRadius(r);
//
//         // select paths, use arc generator to draw
//         var arcs = vis.selectAll("g.slice")
//             .data(pie)
//             .enter()
//             .append("g")
//             .attr("class", "slice");
//
//         arcs.append("path")
//             .attr("fill", function(d, i){ return sequentialScale(i); })
//             .attr("d", function (d) { return arc(d); });
//
//         // add the text
//         arcs.append("text").attr("transform", function(d){
//                 d.innerRadius = 0;
//                 d.outerRadius = r - 40;
//                 d.angle = (d.startAngle + d.endAngle)/2;
//                 return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
//             })
//             .attr("text-anchor", "end")
//             .text( function(d, i) {
//                 return data[i].label;
//             });
//
//         container.on("click", spin);
//
//
//         function spin(d){
//
//             container.on("click", null);
//
//             //all slices have been seen, all done
//             console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
//             if(oldpick.length == data.length){
//                 console.log("done");
//                 container.on("click", null);
//                 return;
//             }
//
//             var  ps       = 360/data.length,
//                  pieslice = Math.round(1440/data.length),
//                  rng      = Math.floor((Math.random() * 1440) + 360);
//
//             rotation = (Math.round(rng / ps) * ps);
//
//             picked = Math.round(data.length - (rotation % 360)/ps);
//             picked = picked >= data.length ? (picked % data.length) : picked;
//
//
//             if(oldpick.indexOf(picked) !== -1){
//                 d3.select(this).call(spin);
//                 return;
//             } else {
//                 oldpick.push(picked);
//             }
//
//             rotation += 90 - Math.round(ps/2);
//
//             vis.transition()
//                 .duration(3000)
//                 .attrTween("transform", rotTween)
//                 .each("end", function(){
//
//                     //mark developer as seen
//                     d3.select(".slice:nth-child(" + (picked + 1) + ") path")
//                         //.attr("fill-opacity", "0.4");
//
//                     //populate developer
//                     d3.select("#developer h1")
//                         .text(data[picked].developer);
//
//                     oldrotation = rotation;
//
//                     container.on("click", spin);
//                 });
//         }
//
//         //make arrow
//         svg.append("g")
//             .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
//             .append("path")
//             .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
//             .style({"fill":"black"});
//
//         //draw spin circle
//         container.append("circle")
//             .attr("cx", 0)
//             .attr("cy", 0)
//             .attr("r", 20)
//             .style({"fill":"#e5b700","cursor":"pointer"});
//
//         //spin text
//         container.append("text")
//             .attr("x", 0)
//             .attr("y", -230)
//             .attr("text-anchor", "middle")
//             .text("Wheel of Appreciation")
//             .style({"font-weight":"bold", "font-size":"30px"});
//
//
//         function rotTween(to) {
//           var i = d3.interpolate(oldrotation % 360, rotation);
//           return function(t) {
//             return "rotate(" + i(t) + ")";
//           };
//         }
//
//
//         function getRandomNumbers(){
//             var array = new Uint16Array(1000);
//             var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
//
//             if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
//                 window.crypto.getRandomValues(array);
//                 console.log("works");
//             } else {
//                 //no support for crypto, get crappy random numbers
//                 for(var i=0; i < 1000; i++){
//                     array[i] = Math.floor(Math.random() * 100000) + 1;
//                 }
//             }
//
//             return array;
//         }
//
//     </script>
// </body>
