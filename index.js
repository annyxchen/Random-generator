var button1 = $('.taylor');
var button2 = $('.michelle');
var button3 = $('.karlie');
var one = $('.one');
var two = $('.two');
var three = $('.three');


// var replace = $('#replacement')

var taylorSwift = ["Anytime someone tells me that I can't do something, I want to do it more.", "No matter how bad your day is, just be grateful this day is added to your life.", "I'm intimidated by the fear of being average."];
var michelleObama = ["Just try new things. Don't be afraid. Step out of your comfort zones and soar, all right?", "You don't have to be somebody different to be important. You're important in your own right.", "I always tell young girls, surround yourself with goodness. I learned early on how to get the haters out of my life."];
var karlieKloss = ["Girls are stronger in numbers. So yes, I believe girls should stick together whenever possible.", "I want to encourage more young women to get involved in coding, because it's important for them to be able to help shape the future, and coding is the future.", "We can cry together!", "If you believe in yourself and feel confident in yourself, you can do anything. I really believe that."];

button1.on("click", clickTaylorSwift);
button2.on("click", clickMichelleObama);
button3.on("click", clickKarlieKloss);

function clickTaylorSwift(){

  var random = Math.random() * taylorSwift.length;

  var floor = Math.floor(random);

  one.text(taylorSwift[floor]);

  message.text(`$`)
}

function clickMichelleObama(){
  var random = Math.random() * michelleObama.length;

  var floor = Math.floor(random);

  one.text(michelleObama[floor]);
}

function clickKarlieKloss(){
  var random = Math.random() * karlieKloss.length;

  var floor = Math.floor(random);

  one.text(karlieKloss[floor]);
}
