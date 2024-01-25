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
            } else if (wowCount <= 10) {
                wowMsg = "your wow is mediocre"
            } else {
                wowMsg = "your wow is extraordinary"
            }

            $("#wowOutput").text(wowMsg + "(" + wowCount + ")")
        },
    })

    $("#dogeDiv").draggable()
})
