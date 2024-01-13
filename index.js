var numberOfDrumButtons = document.querySelectorAll(".drum").length; //selecting all the elements with class drum as array and getting its length

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    //on the particular button clicked the function gets invoked

    var buttonInnerHTML = this.innerHTML; //storing the text value given to that particular button

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) { //when the key is pressed it is an event and it has seversl values stored as javascript object

  makeSound(event.key); //we can get the value of the key pressed by "event.key" and pass it

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //this is how we can play audio using javascript, we create a new javascript object
      tom1.play(); //invoke the play method
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default:
      console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); //selecting the element(". + key"=.key---->a class)

  activeButton.classList.add("pressed"); //add a new class "pressed" to the classList of the selected element
  //so when the class is added we get the styles of that class and after sometime we remove it(as shown below), which appears as an buttonAnimation

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); //timeout is set, so after 100ms=0.1s "pressed" class is removed from the classList

}
