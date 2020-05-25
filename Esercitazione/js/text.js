/* Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

BONUS: generare la griglia dei quadratini utilizzando jQuery */

//genero 15 numeri random da 0 a 64 per agganciarli alle posizioni dello square
var numeriRandom = [];

for(var i = 0; i < 15; i++){
    numeriRandom.push(Math.floor(Math.random() * 64));
}



//prendere la posizione di tutti gli oggetti square e agganciarli ai numeri random
$(document).ready(function(){
    for(var y = 0; y < 64; y++){
        $("#contenitor-square").append('<div class="square"></div>');
    }


    for(var x = 0; x < numeriRandom.length; x++) {
        console.log(numeriRandom[x]);
        $(".square").eq(numeriRandom[x]).addClass("wannaBeRed");    
    }
    $(".square").click(function(){ //Faccio un evento di click, se all'interno dello square abbiamo la classe(agganciata al numero random) wannabered, allora lo coloriamo di rosso, altimenti di verde
        console.log("ciao");
        if($(this).hasClass("wannaBeRed")) {
            $(this).css("background","red");
        } else {
            $(this).addClass("green");
        }
    })
})