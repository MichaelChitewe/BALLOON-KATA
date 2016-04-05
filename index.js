var data = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";


var data = data
  .slice(0, -1)
  .replace(/ and /, "")
  .split(",");

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

var total = 0;


balloonSets.forEach(function(fish) {
  total += fish.Quantity * 3;

});

console.log(total);
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
