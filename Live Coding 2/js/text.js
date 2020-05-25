/* Creare una piccola sezione FAQ. Tante domande che quando cliccate visualizzano la risposta corrispondente. */

$(document).ready(function(){
    /*$(".list").each(function(){
        $(this).click(function(){
            $(".sottotitolo").slideToggle();
        })
    })*/

    //All'evento di click voglio aprire il suo sottotitolo
    $(".list").click(function() {
        $(this).find(".sottotitolo").slideToggle();
    });
})