(function () {
    question = document.getElementById("question").value();
    clues = document.getElementsByClassName("clues");
    currentClue = document.getElementById("currentClue").value();
    currOptions = document.getElementByClassName("options");
    states = document.getElementByClassName("state");
    options = document.getElementById("options").value();
    batteryState = document.getElementById("batteryState").value();

    var configText = JSON.stringify(currOptions); //not sure if I need to do these
    var stateText = JSON.stringify(states);
    var clueText = JSON.stringify(clues);

    var staticParameters = [];
    var dynamicParameters = [];

    var staticParameters = {
        "question": question,
        "clues": clues
    };

    var dynamicParamaters = {
        "options": configText,
        "states": stateText,
        "currentClue": currentClue,
        "batteryState": batteryState
    }

    var Aggregate = [staticParameters, dynamicParameters];

    localStorage.setItem("stateVariables", JSON.stringify(Aggregate));

})();