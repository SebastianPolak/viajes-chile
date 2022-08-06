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

      $(document).scroll(function(){
        const y = $('html').scrollTop();

        y > 1100 ? $('nav').addClass('nav-black') : $('nav').removeClass("nav-black");
      })

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})