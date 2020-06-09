//myJavaScript
$(document).ready(function () {

  //click next on the slider arrow
  $(".next").click(
    function(){
      nextElement();
    }
  );

  //click prev on the slider arrow
  $(".prev").click(
    function(){
      prevElement();
    }
  );

  //click on circles
  $(".nav > i").click(
    function(){
      $(this)
      userSelection()
    }
  );

});
//FUNZIONI
//cliccando su freccia destra dello slider la class .active viene tolta a currentElement
//la class .active viene aggiunta ad element successivo dello slider
//quando si arriva a last-child element dello slider la class .active viene data a first-child element
function nextElement(){
  //img slider
  //immagine corrente slider
  var currentImg = $(".images > img.active");

  //rimuovi classe .active a immagine corrente
  currentImg.removeClass("active");

  //Se mi trovo su ultima img sposto class .active su prima img dello Slider
  if(currentImg.hasClass("last")) {
    $(".images > img.first").addClass("active")
  }
  //altrimenti aggiungi classe .active a immagine successiva
  else {
    currentImg.next("img").addClass("active");
  }

  //circles slider
  //circle corrente slider
  var currentCircle = $(".nav > i.active");

  //rimuovi classe .active a circle corrente
  currentCircle.removeClass("active");

  //Se mi trovo su ultima icon circle sposto class .active su prima icon circle dello Slider
  if(currentCircle.hasClass("last")) {
    $(".nav > i.first").addClass("active");
  }
  //altrimenti aggiungi classe .active a circle successiva
  else {
    currentCircle.next("i").addClass("active");
  }
};

//cliccando su freccia sinistra dello slider la class .active viene tolta a currentElement
//la class .active viene aggiunta ad element precedente dello slider
//quando si arriva a first-child element dello slider la class .active viene data a last-child element
function prevElement(){
  //img slider
  //immagine corrente slider
  var currentImg = $(".images > img.active");

  //rimuovi classe .active a immagine corrente
  currentImg.removeClass("active");

  //Se mi trovo su prima img sposto class .active su ultima img dello Slider
  if(currentImg.hasClass("first")) {
    $(".images > img.last").addClass("active");
  }
  //altrimenti aggiungi classe .active a immagine successiva
  else {
    currentImg.prev("img").addClass("active");
  }

  //circles slider
  //circle corrente slider
  var currentCircle = $(".nav > i.active");

  //rimuovi classe .active a circle corrente
  currentCircle.removeClass("active");

  //Se mi trovo su prima icon circle sposto class .active su ultima icon circle dello Slider
  if (currentCircle.hasClass("first")) {
    $(".nav > i.last").addClass("active");
  }
  //altrimenti aggiungi classe .active a immagine successiva
  else {
    currentCircle.prev("i").addClass("active");
  }
}

//cliccando su first circle si apre first img e cosi via per ogni elemento
//se first circle active allora first img active
//se first circle active allora gli altri circle class active removeClass
//se first img active allora le altre img class active remove
function userSelection() {
  $(!this).removeClass("active");
  $(this).addClass("active");
}
