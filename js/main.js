//myJavaScript
$(document).ready(function () {

  $(".next").click(
    function(){
      nextElement()
    }
  );

  $(".prev").click(
    function(){

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
  
  //Se mi trovo su ultima img sposto class .active su prima img dello Slider
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

  //circles slider
}
