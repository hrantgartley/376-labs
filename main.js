/* eslint-disable no-undef */
/* global $ */
$(document).ready(function () {
    $("#submit-btn").click(function () {
        submitForm()
    })

    $("#fname").keypress(function (e) {
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

        $("#something").text(greeting).fadeIn(2000).fadeOut(10000)
    }
})