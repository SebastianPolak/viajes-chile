$(document).ready(function(){


    $("a").click(function() {
        var gato = this.hash

        $("html, body").animate(
            {
            scrollTop: $(gato).offset().top - 20
            },
            1200
        )
    })

    $("#enviar").click(function () {
        alert("El mensaje fue enviado correctamente...");
      });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})