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
  var currentImg = $(".images > .active");

  //rimuovi classe .active a immagine corrente
  currentImg.removeClass("active");

  //aggiungi classe .active a immagine successiva
  



  //circles slider
}





//cliccando su freccia sinistra dello slider la class .active viene tolta a currentElement
//la class .active viene aggiunta ad element precedente dello slider
//quando si arriva a first-child element dello slider la class .active viene data a last-child element
function prevElement(){
  //img slider

  //circles slider
}
