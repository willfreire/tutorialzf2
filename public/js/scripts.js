/**
 * efeito alert
 */
$(function() {
    // pegar elemente com corpo da mensagem
    var corpo_alert = $("#alert-message");

    // verificar se o elemente esta presente na pagina
    if (corpo_alert.length)
        // gerar efeito para o elemento encontrado na pagina
        corpo_alert.hide().fadeIn(2000);

        // after 5 second timeout - fade out
        setTimeout(function(){corpo_alert.fadeOut(2000);}, 5000);
});