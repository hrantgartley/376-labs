let nato = {
    a: "Alpha",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliet",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "Xray",
    y: "Yankee",
    z: "Zulu",
};

$("#submit").on("click", function () {
    addToList();
});

$("#user-input").on("input", function () {
    printResult();
    convertToNato();
});

$("#reset").on("click", function () {
    $("#output").fadeOut(1000);
    clearBox();
    clearList();
});

$("#clear").on("click", function () {
    clearBox();
});

/**
 * Converts user input to NATO phonetic alphabet codes.
 * @function convertToNato
 * @param {string} input - User input.
 * @returns {string} - NATO phonetic alphabet codes.
 */
function convertToNato(input) {
    let inputArray = input.toLowerCase().split("");
    let natoCodes = inputArray.map((letter) => {
        return nato[letter] || letter;
    });
    return natoCodes.join(" ");
}

/**
 * Prints the result of converting input to NATO phonetic alphabet codes.
 * @function printResult
 */
function printResult() {
    let input = $("#user-input").val();
    let natoResult = convertToNato(input);
    $("#output")
        .text("Result: " + natoResult)
        .fadeIn(1000);
}

/**
 * Adds the current input text to a list of previous entries.
 * @function addToList
 */
function addToList() {
    let inputText = $("#user-input").val();
    let listItem = $("<li>")
        .addClass("list-group-item")
        .append(inputText, "\n", "Nato: ", convertToNato(inputText));
    $("#previous-entries").append(listItem);
    clearBox();
}

/**
 * Clears the value of the user input box.
 * @function clearBox
 */
function clearBox() {
    $("#user-input").val("");
}

function clearList() {
    $("#previous-entries").fadeOut(1000, function () {
        $(this).empty().fadeIn(1000);
    });
}

$("#hamburger").on("click", function () {
    $("#mobile-menu").toggle();
});
