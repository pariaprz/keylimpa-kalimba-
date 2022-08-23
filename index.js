var numberOfButton = document.querySelectorAll(".button").length;

for( var i = 0; i<numberOfButton; i++){

  document.querySelectorAll(".button")[i].addEventListener("click",function(){

    var innerButton =  this.innerHTML.toLowerCase();
    shake(innerButton);
    makeSound(innerButton);

    // makeSound(innerButton);

  });
}

document.addEventListener("keypress" , function(event){

  shake(event.key);
  makeSound(event.key);

});


function shake(activeButton){

  var activeButton = document.querySelector("." + activeButton);
  activeButton.classList.add("clicked");
  setTimeout(function() {
    activeButton.classList.remove("clicked");
  }, 100);

}


function makeSound(innerButton){

  switch(innerButton){

    case "a":
      var a = new Audio("sounds/a.mp3");
      a.play();
      break;

    case "f":
        var f = new Audio("sounds/f.mp3");
        f.play();
        break;

    case "d":
        var d = new Audio("sounds/d.mp3");
        d.play();
        break;

    case "c":
        var c = new Audio("sounds/c.mp3");
        c.play();
        break;
   
    case "e":
        var e = new Audio("sounds/e.mp3");
        e.play();
        break;

   case "g":
        var g = new Audio("sounds/g.mp3");
        g.play();
        break;

   case "b":
        var b = new Audio("sounds/b.mp3");
        b.play();
        break;
  }
}
