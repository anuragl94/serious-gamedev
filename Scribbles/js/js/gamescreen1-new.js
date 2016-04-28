$(document).ready(function () {
    /* Begin logic for the options */
    // Do what we must to render the options
    var returnValues = gameData['returnValues'];
    if(returnValues === undefined) {
      optionsProducer.init();
      returnValues = optionsProducer.render();
    }
    $("#optionsWrapper").append(returnValues['options_markup']);
    //Options are rendered. Render the vertices now.
    toolkit.renderVertices($(".option .img_wrapper"), coordinates);

    $("#optionsWrapper").on("change", function () {
        //Here we use statetracker module to capture the new state of the set of options
        //It may be heavy on the processor if we check state of ALL options at every interaction with a single option
    });
    $("#optionsWrapper").on("disableSelected", function () {
        if (!('disabledOptions' in gameData))
            gameData['disabledOptions'] = [];
        $(this).find("input:checked").each(function () {
            gameData['disabledOptions'].push($(this).attr("index"));
        });
        $(this).find("input:checked").prop('disabled', true);
        $(this).find("input:checked").closest('label').addClass('disabled innocent');
        $(this).trigger("clearSelection");
    });
    $("#optionsWrapper").on("clearSelection", function () {
        $(this).find("input:checked").prop('checked', false);
    });
    // This event listener comes from the tools section
    $("#optionsWrapper").on("inspect", function () {
        //Here we get a list of selected options along with their attributes
        var selectedOptions = $(this).find("input:checked").map(function () {
            return $(this).attr("index");
        });
        $("#cluesWrapper").trigger("checkIfCorrectOptions", [selectedOptions]);
    });
    // This event listener comes from the tools section
    $("#optionsWrapper").on("arrest", function () {
        //Here we get a list of selected options along with their attributes
        var selectedOption = $(this).find("input:checked").map(function () {
            return $(this).attr("index");
        });
        var unSelectedOption = returnValues["options_markup"].childNodes.length - document.getElementsByClassName('innocent').length;
        if (selectedOption.length == 1) {
            $("#cluesWrapper").trigger("checkIfFinalAnswer", selectedOption);
        } else if (unSelectedOption == 1) {
            var lastOption = $(".option:not(.innocent) input");
            //alert("Please select the culprit then click on done.");
            $("#cluesWrapper").trigger("checkIfFinalAnswer", lastOption.attr("index"));
        } else {
            alert("There can only be one culprit!");
            console.log("There can only be one culprit!");
        }
    });
    /* End logic for the options */

    /* Begin logic for the clues */
    $("#cluesWrapper").on("checkIfCorrectOptions", function (event, selectedOptions) {
        //Here we get a list of selected options along with their attributes
        var currentClueIndex = $("#cluesWrapper").find(".clue:visible").length - 1;
        var currentClue = gameData['clues'][currentClueIndex];
        var correctOptions = $(gameData['options']).map(function (index) {
            var option = this;
            switch (currentClue['comparator']) {
                case '=':
                    if (option[currentClue['attribute']] != currentClue['quantity'])
                        return index;
                    break;
                case '>':
                    if (option[currentClue['attribute']] <= currentClue['quantity'])
                        return index;
                    break;
                case '<':
                    if (option[currentClue['attribute']] >= currentClue['quantity'])
                        return index;
                    break;
                case '>=':
                    if (option[currentClue['attribute']] < currentClue['quantity'])
                        return index;
                    break;
                case '<=':
                    if (option[currentClue['attribute']] > currentClue['quantity'])
                        return index;
                    break;
                default:
                    break;
            }
            return null;
        });
        correctOptions = $(correctOptions).filter(function () {
            if ((this !== null) && ($.inArray(parseInt(this).toString(), gameData['disabledOptions']) == -1))
                return true;
        });
        //To convert pseudo array to regular array
        selectedOptions = Array.prototype.slice.call(selectedOptions);
        correctOptions = Array.prototype.slice.call(correctOptions);

        $("#cluesWrapper").trigger("getNextClue");
        $("#optionsWrapper").trigger("disableSelected");
        gameData['solvedClues'].push(currentClueIndex);

        if (selectedOptions.sort().join(',') === correctOptions.sort().join(',')) {
            //What to do if player does not give a wrong answer
        } else {
            //What to do when player makes a mistake. Here, define what research data to keep track of
            console.log("Player made a mistake here");
            $("#treats").trigger("reduce");
            $(document).trigger('stageCompletion', [$("#treats").attr("data-value"), $("#treats").attr("data-max")]);
        }
    });

    $("#cluesWrapper").on("checkIfFinalAnswer", function (event, selectedOption) {
        if ('correctAnswer' in gameData['options'][selectedOption]) {
            console.log("You have caught the culprit!");
            alert("You have caught the culprit!");
            var stage = window.location.search.split("stage=")[1].split("&")[0];
        } else {
            alert("You have arrested the innocent!");
            console.log("You have arrested the innocent!");
            $("#treats").trigger("reduce");
        }
        //Now make changes to localStorage to reflect the achievements
        $(document).trigger('stageCompletion', [$("#treats").attr("data-value"), $("#treats").attr("data-max")]);
        window.location.href = "MainMenu.html";
    });

    $("#cluesWrapper").on("getNextClue", function () {
        if ($("#cluesWrapper").find(".clue:not(:visible)").length) {
            $("#cluesWrapper").find(".clue:not(:visible)").first().toggle();
        } else {
            //Do nothing. You're out of clues!
            console.log("That was your last clue! Now you have enough clues to make an arrest");
        }

        if (!$("#cluesWrapper").find(".clue:not(:visible)").length) {
            $("#arrest").toggle(true);
        }
    });
    /* End logic for the clues */

    /* Begin logic for the action buttons */
    $("#inspect").on('click', function () {
        if (gameData['solvedClues'].length < $("#cluesWrapper .clue").length) {
            $("#optionsWrapper").trigger("inspect");
        } else {
            console.log("You have sufficient clues to make a conclusion!");
        }
    });
    $("#arrest").on('click', function () {
        if (!($("#cluesWrapper").find(".clue:not(:visible)").length)) {
            $("#optionsWrapper").trigger("arrest");
        } else {
            console.log("You do not have sufficient clues to make a conclusion!");
        }
    });

    //~~These are the custom events for accuracy
    $("#treats").on("reduce", function () {
        var remaining = parseInt($("#treats").attr("data-value")) - 1;
        if (remaining >= 0) {
            $("#treats").attr("data-value", remaining);
            $("#treats").html(remaining);
        }
    });
    $("#treats").on("increase", function () {
        //This situation never really arises
        var remaining = parseInt($("#treats").attr("data-value")) + 1;
        var max = parseInt($("#treats").attr("data-max"));
        if (remaining <= max) {
            $("#treats").attr("data-value", remaining);
            $("#treats").html(remaining);
        }
    });
    $("#treats").on("refresh", function () {
        var max = parseInt($("#treats").attr("data-max"));
        $("#treats").attr("data-value", max);
    });
    /* End logic for the action buttons */

    // The following lines render HTML markup for the clues. The code will be pushed into the relevant module
    var cluesBox = document.createElement("div");
    $(cluesBox).attr("id", "clues");
    $(returnValues['clues']).each(function () {
        //This next line must go through the language API for translation. Not translating into any language for now
        var clue_text = languageApi.translate(this['attribute'], this['comparator'], this['quantity']);
        var property = this['attribute'];
        var clue = '<div class="clue">' + clue_text.highlightedText + '</div>';
        $(cluesBox).append(clue);
    });
    $("#cluesWrapper").append(cluesBox);
    $("#cluesWrapper").find(".clue:not(:first-child)").each(function () {
        $(this).toggle();
    });
    gameData['solvedClues'] = [];

    $.fn.shuffle = function () {
        return this.each(function () {
            var items = $(this).children().clone(true);
            return (items.length) ? $(this).html($.shuffle(items)) : this;
        });
    }

    $.shuffle = function (arr) {
        for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x)
            ;
        return arr;
    }

    $("#replay").click(function () {
        console.log("Replaay");
        var returnValues = optionsProducer.render();
        $("#optionsWrapper").html($(returnValues['options_markup']).clone());
        toolkit.renderVertices($(".option .img_wrapper"), coordinates);
        gameData.disabledOptions = [];
        gameData.solvedClues = [];
        $("#optionsWrapper .row").shuffle();
        $("#treats").trigger("refresh");
        $("#cluesWrapper").find(".clue:not(:first-child)").each(function () {
            $(this).toggle(false);
        });
        alert("This case has been restarted. You will no longer get a star on this case now!");
    });
    $("#back").on('click', function () {
        window.location.href = "MainMenu.html";
    });
});