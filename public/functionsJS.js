// front end js
document.getElementById('jsFunc').innerHTML = func2(); // gets the element in the HTML doc with the jsOutout id
//document.onmousemove = func1; // connects the funtion func1 to any mouse movement on the document
//document.getElementById('myCanvas').addEventListener("mouseover", draw); // connects the event when the mouse is over the canvs element to the draw function

function func2 ()
{
    //var google = require("https://www.google.com/jsapi");
    google.load('search', '1');
    var imageSearch;
    imageSearch = new google.search.ImageSearch();
    imageSearch.execute("Subaru STI");
    var results = imageSearch.results;
    var result = results[1];
    return result.titleNoFormatting;
}

function func1 (event) // gets the event and it charctaristics
{
    event = event;
    var x = event.clientX;
    document.getElementById('jsFunc').innerHTML = x+Math.floor(Math.random()*100);
    
}

function draw ()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
    return ctx;
}