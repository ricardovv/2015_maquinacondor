
// A wind direction vector
var wind;
var position;


var result;
function preload() {
  result = loadStrings('https://api.fixer.io/latest');
}

function setup() {
   var ind = floor(random(result.length));
  text(result[ind], 10, 10, 80, 80);
}


function setup() {
  createCanvas(200, 4);
  //-- Request the data from openweathermap
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
  loadJSON(url, gotWeather);

  var ind = floor(random(result.length));
  text(result[ind], 10, 10, 80, 80);

}

function draw() {
  background(200);

  // This section draws an arrow pointing in the direction of wind
  push();
  translate(32, height - 32);
  // Rotate by the wind's angle
  rotate(wind.heading() + PI/2);
  noStroke();
  fill(255);
  //ellipse(0, 0, 48, 48);

  stroke(45, 123, 182);
  strokeWeight(3);
  //line(0, -16, 0, 16);

  noStroke();
  fill(45, 123, 182);
  triangle(0, -18, -6, -10, 6, -10);
  pop();
  
  // Move in the wind's direction
  position.add(wind);
  
  stroke(0);
  fill(51);
  //ellipse(position.x, position.y, 16, 16);

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;


}

var windDiv;

function gotWeather(weather) {
  
  // Get the angle (convert to radians)
  //var angle = radians(Number(weather.wind.deg));
  // Get the wind speed
  var windmag = Number(weather.wind.speed);
  
  // Muestra HTML
//  var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
//  var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
  windDiv = document.getElementById("valorMoneda").innerHTML = "MONEDA: " + windmag ;  

  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}
