/* global $ */
$(function () {
    let wowCount = 0
    let wowMsg

    $("#dogePic").draggable({
        scroll: false,

        start: function () {
            wowCount++

            if (wowCount <= 4) {
                wowMsg = "your wow is weak"
                // set background color to red
                $("body").css("background-color", "red")
            } else if (wowCount <= 10) {
                wowMsg = "your wow is mediocre"
                $("body").css("background-color", "yellow")
            } else {
                wowMsg = "your wow is extraordinary"
                $("body").css("background-color", "blue")
            }

            $("#wowOutput").text(wowMsg + "(" + wowCount + ")")
        },
    })

    $("#dogeDiv").draggable()
})
