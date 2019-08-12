var girlButton = $('.girlimage');
var message = $('.emptybox');

girlButton.on("click", pickGirlName);

function pickGirlName() {
  var girlNames = ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Mia", "Amelia", "Harper", "Evelyn"];
  var random = Math.random() * girlNames.length;
  var rounded = Math.floor(random);
  var girls = girlNames[rounded];
  message.text(girlNames[rounded]);
}

//////////

var boyButton = $('.boyimage');
var message = $('.emptybox');

boyButton.on("click", pickBoyName);

function pickBoyName() {
  var boyNames = ["Noah", "Liam", "William","Benjamin", "Jacob", "Elijah", "Ethan", "Alexander", "Mathew", "Peter"];
  var random = Math.random() * boyNames.length;
  var rounded = Math.floor(random);
  var boys = boyNames[rounded];
  message.text(boyNames[rounded]);
}
