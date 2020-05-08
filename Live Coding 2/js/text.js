/* Creare una piccola sezione FAQ. Tante domande che quando cliccate visualizzano la risposta corrispondente. */

$(document).ready(function(){
    $(".list").each(function(){
        $(this).click(function(){
            $("#contenitor-sottotitolo").slideToggle();
        })
    })
})