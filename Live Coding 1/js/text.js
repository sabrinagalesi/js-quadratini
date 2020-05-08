/* Creare una To do List. On click su un item verrà cancellata la riga. 
Una volta che l’item è nascosto, far comparire un modal: “Item Cancellato” e farlo scomparire subito dopo. */

function closeModal() {
    $("#modal").fadeOut();
}


$(document).ready(function() {
    $(".list").each(function() {
        $(this).click(function() {
            $(this).hide();
            $("#modal").fadeIn();
            setTimeout(closeModal, 3000);
        })
    })
}) 