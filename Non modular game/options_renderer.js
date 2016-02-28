// The following logic is really bad practice as I'm setting a global variable. The whole point of the IIFE was to avoid that, and to not have conflicts with variables in the caller's scope.
// Must find a good alternative
returnValue = (function () {
//Qset Data
    var qset = {
        "q1": [
            {
                "attribute": "straightSides",
                "comparator": "=",
                "quantity": "4"
            },
            {
                "attribute": "pairsOfSidesEqual",
                "comparator": "=",
                "quantity": "2"
            },
            {
                "attribute": "obtuseAngles",
                "comparator": "=",
                "quantity": "2"
            }
        ]
    };
    var config = {
        "questionsRepo": [
            {
                "stage": "0",
                "noOfOptions": "2",
                "noOfCorrectOptions": "1",
                "noOfClues": "1",
                "passLimit": "3"
            },
            {
                "stage": "1",
                "noOfOptions": "4",
                "noOfCorrectOptions": "1",
                "noOfClues": "2",
                "passLimit": "3"
            },
            {
                "stage": "2",
                "noOfOptions": "4",
                "noOfCorrectOptions": "1",
                "noOfClues": "2",
                "passLimit": "5"
            },
            {
                "stage": "3",
                "noOfOptions": "4",
                "noOfCorrectOptions": "1",
                "noOfClues": "2",
                "passLimit": "5"
            },
            {
                "stage": "4",
                "noOfOptions": "6",
                "noOfCorrectOptions": "1",
                "noOfClues": "3",
                "passLimit": "10"
            },
            {
                "stage": "5",
                "noOfOptions": "6",
                "noOfCorrectOptions": "1",
                "noOfClues": "3",
                "passLimit": "10"
            },
            {
                "stage": "6",
                "noOfOptions": "6",
                "noOfCorrectOptions": "1",
                "noOfClues": "3",
                "passLimit": "10"
            },
            {
                "stage": "7",
                "noOfOptions": "8",
                "noOfCorrectOptions": "2",
                "noOfClues": "4",
                "passLimit": "15"
            },
            {
                "stage": "8",
                "noOfOptions": "8",
                "noOfCorrectOptions": "2",
                "noOfClues": "4",
                "passLimit": "15"
            },
            {
                "stage": "9",
                "noOfOptions": "8",
                "noOfCorrectOptions": "2",
                "noOfClues": "4",
                "passLimit": "15"
            }
        ]
    };
    function isInArray(value, array) {
        return array.indexOf(value) > -1;
    }
    var shapes3 = {
        "data": [
              {
                  "id" : "fig001.png",
                  "straightSides" : "3",
                  "curvedSides" : "0",
                  "sidesEqual" : "3",
                  "rightAngles" : "0",
                  "obtuseAngles" : "0",
                  "acuteAngles" : "3",
                  "reflexAngles" : "0"
              },
              {
                    "id" : "fig002.png",
                    "straightSides" : "3",
                    "curvedSides" : "0",
                    "sidesEqual" : "2",
                    "rightAngles" : "0",
                    "obtuseAngles" : "0",
                    "acuteAngles" : "3",
                    "reflexAngles" : "0"
              },
              {
                    "id" : "fig025.png",
                    "straightSides" : "4",
                    "curvedSides" : "0",
                    "pairsOfSidesEqual" : "2",
                    "rightAngles" : "4",
                    "obtuseAngles" : "0",
                    "acuteAngles" : "0",
                    "reflexAngles" : "0",
                    "oppositePairsParallel" : "2"
              },
              {
                    "id" : "fig026.png",
                    "straightSides" : "4",
                    "curvedSides" : "0",
                    "sidesEqual" : "4",
                    "rightAngles" : "4",
                    "obtuseAngles" : "0",
                    "acuteAngles" : "0",
                    "reflexAngles" : "0",
                    "oppositePairsParallel" : "2"
              },
              {
                    "id" : "fig027.png",
                    "straightSides" : "4",
                    "curvedSides" : "0",
                    "pairsOfSidesEqual" : "2",
                    "rightAngles" : "0",
                    "obtuseAngles" : "3",
                    "acuteAngles" : "1",
                    "reflexAngles" : "0",
                    "oppositePairsParallel" : "0"
              },
              {
                    "id" : "fig039.png",
                    "straightSides" : "5",
                    "curvedSides" : "0",
                    "sidesEqual" : "2",
                    "rightAngles" : "0",
                    "obtuseAngles" : "3",
                    "acuteAngles" : "2",
                    "reflexAngles" : "0",
                    "oppositePairsParallel" : "2"
              },
              {
                    "id" : "fig040.png",
                    "straightSides" : "5",
                    "curvedSides" : "0",
                    "sidesEqual" : "0",
                    "rightAngles" : "0",
                    "obtuseAngles" : "4",
                    "acuteAngles" : "1",
                    "reflexAngles" : "0",
                    "oppositePairsParallel" : "1"
                },
                {
                    "id" : "fig055.png",
                    "straightSides" : "8",
                    "curvedSides" : "0",
                    "sidesEqual" : "8",
                    "rightAngles" : "0",
                    "obtuseAngles" : "8",
                    "acuteAngles" : "0",
                    "reflexAngles" : "0",
                    "oppositePairsParallel" : "4"
                },
                {
                    "id" : "figc001.png",
                    "straightSides" : "0",
                    "curvedSides" : "yes"
                },
                {
                    "id" : "figc002.png",
                    "straightSides" : "0",
                    "curvedSides" : "yes"
                },
                {
                    "id" : "figc005.png",
                    "straightSides" : "2",
                    "curvedSides" : "yes",
                    "pairsOfSidesEqual" : "1"
                },
            {
                 "id" : "fig003.png",
                 "straightSides" : "3",
                 "curvedSides" : "0",
                 "sidesEqual" : "2",
                 "rightAngles" : "1",
                 "obtuseAngles" : "0",
                 "acuteAngles" : "2",
                 "reflexAngles" : "0"
            },
            {
                 "id" : "fig004.png",
                 "straightSides" : "3",
                 "curvedSides" : "0",
                 "sidesEqual" : "2",
                 "rightAngles" : "0",
                 "obtuseAngles" : "1",
                 "acuteAngles" : "2",
                 "reflexAngles" : "0"
            },
            {
                 "id" : "fig005.png",
                 "straightSides" : "3",
                 "curvedSides" : "0",
                 "sidesEqual" : "0",
                 "rightAngles" : "0",
                 "obtuseAngles" : "0",
                 "acuteAngles" : "3",
                 "reflexAngles" : "0"
            },
            {
                 "id" : "fig006.png",
                 "straightSides" : "3",
                 "curvedSides" : "0",
                 "sidesEqual" : "0",
                 "rightAngles" : "1",
                 "obtuseAngles" : "0",
                 "acuteAngles" : "2",
                 "reflexAngles" : "0"
            },
            {
                 "id" : "fig007.png",
                 "straightSides" : "3",
                 "curvedSides" : "0",
                 "sidesEqual" : "0",
                 "rightAngles" : "0",
                 "obtuseAngles" : "1",
                 "acuteAngles" : "2",
                 "reflexAngles" : "0"
            },
            {
                "id": "fig004.png",
                "straightSides": "3",
                "sidesEqual": "2",
                "rightAngles": "0",
                "obtuseAngles": "1",
                "acuteAngles": "2",
                "reflexAngles": "0"
            },
            {
                "id": "fig005.png",
                "straightSides": "3",
                "sidesEqual": "0",
                "rightAngles": "0",
                "obtuseAngles": "0",
                "acuteAngles": "3",
                "reflexAngles": "0"
            },
            {
                "id": "fig018.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "0",
                "rightAngles": "0",
                "obtuseAngles": "2",
                "acuteAngles": "2",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig019.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "1",
                "rightAngles": "0",
                "obtuseAngles": "2",
                "acuteAngles": "2",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig022.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "0",
                "rightAngles": "0",
                "obtuseAngles": "2",
                "acuteAngles": "2",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig023.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "2",
                "rightAngles": "0",
                "obtuseAngles": "2",
                "acuteAngles": "2",
                "reflexAngles": "0",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig024.png",
                "straightSides": "4",
                "sidesEqual": "4",
                "rightAngles": "0",
                "obtuseAngles": "2",
                "acuteAngles": "2",
                "reflexAngles": "0",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig028.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "2",
                "rightAngles": "0",
                "obtuseAngles": "1",
                "acuteAngles": "3",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig036.png",
                "straightSides": "5",
                "sidesEqual": "5",
                "rightAngles": "0",
                "obtuseAngles": "5",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig039.png",
                "straightSides": "5",
                "sidesEqual": "2",
                "rightAngles": "0",
                "obtuseAngles": "3",
                "acuteAngles": "2",
                "reflexAngles": "0",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig040.png",
                "straightSides": "5",
                "sidesEqual": "0",
                "rightAngles": "0",
                "obtuseAngles": "4",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig048.png",
                "straightSides": "6",
                "sidesEqual": "6",
                "rightAngles": "0",
                "obtuseAngles": "6",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "3"
            },
            {
                "id": "fig050.png",
                "straightSides": "6",
                "sidesEqual": "2",
                "rightAngles": "2",
                "obtuseAngles": "4",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig052.png",
                "straightSides": "6",
                "sidesEqual": "0",
                "rightAngles": "0",
                "obtuseAngles": "6",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig053.png",
                "straightSides": "7",
                "sidesEqual": "7",
                "rightAngles": "0",
                "obtuseAngles": "7",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig055.png",
                "straightSides": "8",
                "sidesEqual": "8",
                "rightAngles": "0",
                "obtuseAngles": "8",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "4"
            },
            {
                "id": "fig011.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "2",
                "rightAngles": "1",
                "obtuseAngles": "0",
                "acuteAngles": "2",
                "reflexAngles": "1",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig016.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "1",
                "rightAngles": "1",
                "obtuseAngles": "2",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig017.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "0",
                "rightAngles": "1",
                "obtuseAngles": "2",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig030.png",
                "straightSides": "5",
                "pairsOfSidesEqual": "2",
                "rightAngles": "2",
                "obtuseAngles": "0",
                "acuteAngles": "2",
                "reflexAngles": "1",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig037.png",
                "straightSides": "5",
                "pairsOfSidesEqual": "2",
                "rightAngles": "0",
                "obtuseAngles": "4",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig038.png",
                "straightSides": "5",
                "pairsOfSidesEqual": "2",
                "rightAngles": "2",
                "obtuseAngles": "3",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig042.png",
                "straightSides": "5",
                "pairsOfSidesEqual": "2",
                "rightAngles": "2",
                "obtuseAngles": "2",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig051.png",
                "straightSides": "6",
                "pairsOfSidesEqual": "0",
                "rightAngles": "2",
                "obtuseAngles": "4",
                "acuteAngles": "0",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig020.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "1",
                "rightAngles": "2",
                "obtuseAngles": "1",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig021.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "0",
                "rightAngles": "2",
                "obtuseAngles": "1",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig029.png",
                "straightSides": "4",
                "pairsOfSidesEqual": "2",
                "rightAngles": "1",
                "obtuseAngles": "2",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "0"
            },
            {
                "id": "fig035.png",
                "straightSides": "5",
                "pairsOfSidesEqual": "0",
                "rightAngles": "3",
                "obtuseAngles": "0",
                "acuteAngles": "1",
                "reflexAngles": "1",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig043.png",
                "straightSides": "6",
                "sidesEqual": "6",
                "rightAngles": "0",
                "obtuseAngles": "2",
                "acuteAngles": "3",
                "reflexAngles": "1",
                "oppositePairsParallel": "3"
            },
            {
                "id": "fig044.png",
                "straightSides": "6",
                "pairsOfSidesEqual": "3",
                "rightAngles": "0",
                "obtuseAngles": "2",
                "acuteAngles": "3",
                "reflexAngles": "1",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig045.png",
                "straightSides": "6",
                "pairsOfSidesEqual": "2",
                "rightAngles": "2",
                "obtuseAngles": "0",
                "acuteAngles": "2",
                "reflexAngles": "2",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig046.png",
                "straightSides": "6",
                "pairsOfSidesEqual": "0",
                "rightAngles": "2",
                "obtuseAngles": "2",
                "acuteAngles": "1",
                "reflexAngles": "1",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig047.png",
                "straightSides": "6",
                "pairsOfSidesEqual": "0",
                "rightAngles": "4",
                "obtuseAngles": "0",
                "acuteAngles": "1",
                "reflexAngles": "1",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig049.png",
                "straightSides": "6",
                "pairsOfSidesEqual": "0",
                "rightAngles": "0",
                "obtuseAngles": "5",
                "acuteAngles": "1",
                "reflexAngles": "0",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig054.png",
                "straightSides": "7",
                "pairsOfSidesEqual": "3",
                "rightAngles": "2",
                "obtuseAngles": "0",
                "acuteAngles": "3",
                "reflexAngles": "2",
                "oppositePairsParallel": "1"
            },
            {
                "id": "fig056.png",
                "straightSides": "8",
                "pairsOfSidesEqual": "4",
                "rightAngles": "2",
                "obtuseAngles": "2",
                "acuteAngles": "2",
                "reflexAngles": "2",
                "oppositePairsParallel": "2"
            },
            {
                "id": "fig057.png",
                "straightSides": "8",
                "pairsOfSidesEqual": "4",
                "rightAngles": "0",
                "obtuseAngles": "3",
                "acuteAngles": "3",
                "reflexAngles": "2",
                "oppositePairsParallel": "0"
            }
        ]};

    var noOfClues = parseInt(config.questionsRepo[4].noOfClues);
    var noOfOptions = parseInt(config.questionsRepo[4].noOfOptions);
    var noOfCorrectOptions = parseInt(config.questionsRepo[4].noOfCorrectOptions);
    var Options = new Array(noOfOptions);
    var correctOptions = new Array(noOfCorrectOptions);
    //var shapesJSON = JSON.parse(shapes3);
    var shapesJSON = shapes3['data'];
    var fitCount = 0;
    for (var i = 0; i < noOfOptions && noOfClues >= 0; i++)
    {
        //Random j value for different options
        var j = Math.floor( Math.random() * ((shapesJSON.length - 1) - 0) + 0);
        while (!Options[i]) {
            var shape = shapesJSON[j];
            if (noOfClues == 3)
            {
                if (qset.q1[0].attribute == "straightSides" && qset.q1[0].comparator == "=" && parseInt(qset.q1[0].quantity) != parseInt(shape.straightSides) && !isInArray(shape, Options)) {
                    Options[i] = shape;
                    fitCount++;
                    if (fitCount == 2) {
                        fitCount = 0;
                        noOfClues--;
                    }
                    break;
                }

            } else if (noOfClues == 2)
            {
                if (qset.q1[1].attribute == "pairsOfSidesEqual" && qset.q1[1].comparator == "=" && qset.q1[1].quantity != shape.pairsOfSidesEqual && !isInArray(shape, Options) && !(parseInt(qset.q1[0].quantity) != parseInt(shape.straightSides))) {
                    Options[i] = shape;
                    fitCount++;
                    if (fitCount == 2) {
                        fitCount = 0;
                        noOfClues--;
                    }
                    break;
                }
            } else if (noOfClues == 1)
            {
                if (qset.q1[2].attribute == "obtuseAngles" && qset.q1[2].comparator == "=" && qset.q1[2].quantity != shape.obtuseAngles && !isInArray(shape, Options) && !(qset.q1[1].quantity != shape.pairsOfSidesEqual) && !(parseInt(qset.q1[0].quantity) != parseInt(shape.straightSides))) {
                    Options[i] = shape;
                    fitCount++;
                    if (fitCount == 1) {
                        fitCount = 0;
                        noOfClues--;
                    }
                    break;
                }
            } else
            {
//Get answer
                if (qset.q1[2].quantity == shape.obtuseAngles && qset.q1[1].quantity == shape.pairsOfSidesEqual && qset.q1[0].quantity == shape.straightSides && !isInArray(shape, Options))
                {
                    Options[i] = shape;
                    //console.log(shape.id + "Answer");
                    break;
                }

            }
            j++;
            if (j == shapesJSON.length) {
                //Randomize
                j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0) + 0);
            }
        }
        // Fill properties not available for the shapes
        if(!Options[i].straightSides)
            Options[i].straightSides = -1;
        if(!Options[i].curvedSides)
            Options[i].curvedSides = -1;
        if(!Options[i].pairsOfSidesEqual)
            Options[i].pairsOfSidesEqual = -1;
        if(!Options[i].rightAngles)
            Options[i].rightAngles = -1;
        if(!Options[i].obtuseAngles)
            Options[i].obtuseAngles = -1;
        if(!Options[i].acuteAngles)
            Options[i].acuteAngles = -1;
        if(!Options[i].reflexAngles)
            Options[i].reflexAngles = -1;
        if (!Options[i].oppositePairsParallel)
            Option[i].oppositePairsParallel = -1;
        console.log(Options[i].id + " for "+ i);
    }
    //Options = shuffle(Options);
    var optionsMarkup = document.createElement("div");
    $(optionsMarkup).addClass("row");
    for (var i = 0; i < noOfOptions; i++)
    {
        var markup = document.createElement("div");
        $(markup).addClass("col-lg-4 col-md-4");
        var label = document.createElement("label");
        $(label).addClass("option");
        var temp = document.createElement("img");
        temp.class = "option"
        temp.src = "../Modules/Generators/version3/" + Options[i].id;
        label.appendChild(temp);
        temp = document.createElement("input");
        temp.type = "checkbox";
        $(temp).attr("index", i);
        label.appendChild(temp);
        markup.appendChild(label);
        optionsMarkup.appendChild(markup);
    }

//Fisher-Yates Shuffle.
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


    //console.log("This is the options :" + Options);
    //console.log(" This is doms :" + optionsDOM[0].src);

    gameData['clues'] = qset['q1'];
    gameData['options'] = Options;
    gameData['includedModules'].push('options_renderer');
    
    var returnValues = {
        "clues": qset['q1'],
        "options": Options,
        "options_markup": optionsMarkup
    }
    return returnValues;
}());