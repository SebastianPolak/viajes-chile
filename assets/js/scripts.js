$(document).ready(function(){


    $("a").click(function() {
        var gato = this.hash

        $("html, body").animate(
            {
            scrollTop: $(gato).offset().top - 98
            },
            1200
        )
    })

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})