var data = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";

var data = data
  .slice(0, -1)
  .replace(/ and /, "")
  .split(",");
console.log(data);
var newData = [];

data.forEach(function(yolo) {
  newData.push(yolo.split(" sets of "));

});

var balloonSets = [];

newData.forEach(function(solo) {
  balloonSets.push({
    Color: solo[1],
    Quantity: Number(solo[0])
  });

});

var Red = 0;

balloonSets.forEach(function(haka) {

  Red += balloonSets[0].Quantity;

});

var Blue = 0;

balloonSets.forEach(function(sumo) {

  Blue += balloonSets[1].Quantity;

});

var Yellow = 0;

balloonSets.forEach(function(kata) {

  Yellow += balloonSets[2].Quantity;

});

var totalBalloons = 0;

balloonSets.forEach(function(fish) {
  totalBalloons += fish.Quantity * 3;

});

var otherData = "R4 for red, R5 for blue, and R5.50 for yellow.";
var otherData = otherData
  .slice(0, -1)
  .replace(/R/g, "")
  .replace(/ and /, "")
  .split(",");
var moreData = [];

otherData.forEach(function(fubu) {
  moreData.push(fubu.split(" for "));

});

Prices = [];

moreData.forEach(function(bufu) {
  Prices.push({
    Color: bufu[1],
    Price: Number(bufu[0])
  });

});


var priceRedEach = 0;

Prices.forEach(function(zaka) {

  priceRedEach = Prices[0].Price;

});

var priceBlueEach = 0;

Prices.forEach(function(hobo) {

  priceBlueEach = Prices[1].Price;

});

var priceYellowEach = 0;

Prices.forEach(function(hata) {

  priceYellowEach = Prices[2].Price;

});

var people = 25;

var spareBalloons = totalBalloons - people;
var costOfRed = Red * priceRedEach;
var costOfBlues = Blue * priceBlueEach;
var costOfYellows = Yellow * priceYellowEach;

var totalCostBalloons = costOfRed + costOfBlues + costOfYellows;

var extraCost = totalBalloons * 2;

var heavyData = "5 red balloons, 1 blue balloon, and 3 yellow balloons popped";

var heavyData = heavyData
  .replace(/ balloons popped/, " balloons")
  .replace(/and /i, "")
  .replace(/red/i, "the red")
  .replace(/blue/i, "the blue")
  .replace(/yellow/i, "the yellow")
  .split(", ");

console.log(heavyData);

var extraHeavyData = [];

heavyData.forEach(function(roxy) {
  extraHeavyData.push(roxy.split(" the "));

});

var poppedBalloons = [];

extraHeavyData.forEach(function(tesa) {
  poppedBalloons.push({
    Color: tesa[1],
    Popped: Number(tesa[0])
  });

});


var poppedRed = 0;

poppedBalloons.forEach(function(zala) {

  poppedRed = poppedBalloons[0].Popped;

});

var poppedBlues = 0;

poppedBalloons.forEach(function(holo) {

  poppedBlues = poppedBalloons[1].Popped;

});

var poppedYellows = 0;

poppedBalloons.forEach(function(hama) {

  poppedYellows = poppedBalloons[2].Popped;

});

var allPoppedBalloons = poppedBlues + poppedYellows + poppedRed;
var leftBalloons = totalBalloons - allPoppedBalloons;
var peopleNoBalloons = people - leftBalloons;
