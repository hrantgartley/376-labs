/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* global $ */
$(function () {
    $("#submit-btn").on("click", function () {
        submitForm()
    })

    $("#fname").on("keydown", function (e) {
        if (e.which === 13) {
            submitForm()
        }
    })

    function submitForm() {
        const randomPlace = places[Math.floor(Math.random() * places.length)]
        let fname = $("#fname").val()
        if (fname === "") {
            fname = "Mysterious Traveler"
        } else {
            fname = fname.charAt(0).toUpperCase() + fname.slice(1)
        }
        let greeting =
            "Hello " + fname + "! What's up! Welcome to " + randomPlace

        $("#something").text(greeting).fadeIn(2000).replaceWith("")
    }
})

function resetForm() {
    $("#fname").val("")
    $("#something").fadeOut(2000)
}
