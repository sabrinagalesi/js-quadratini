/* Creare 10 quadrati vuoti.
Con jQuery, dentro ognuno scrivere un numero random */

$(document).ready(function(){
    $(".square").each(function(){
        $(this).text(Math.floor(Math.random() * 20) +1);
    })
})