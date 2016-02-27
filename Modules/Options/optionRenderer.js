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
var noOfClues = parseInt(config.questionsRepo[4].noOfClues);
var noOfOptions = parseInt(config.questionsRepo[4].noOfOptions);
var noOfCorrectOptions = parseInt(config.questionsRepo[4].noOfCorrectOptions);
var Options = new Array(noOfOptions);
var correctOptions = new Array(noOfCorrectOptions);
var shapesJSON = JSON.parse(shapes3);
var optionDoms = document.getElementsByClassName("opimg");
var shapesJSON = JSON.parse(shapes3);
var fitCount = 0;
for (var i = 0; i < noOfOptions && noOfClues >= 0; i++) {
    for (var j = 0; j < shapesJSON.length; j++) {
        var shape = shapesJSON[j];
        if (noOfClues == 3) {
            if (qset.q1[0].attribute == "straightSides" && qset.q1[0].comparator == "=" && parseInt(qset.q1[0].quantity) == parseInt(shape.straightSides) && !isInArray(shape, Options)) {
                Options[i] = shape; Options[i].id = shape.id;
                fitCount++;
                if (fitCount == 2) {
                    fitCount = 0;
                    noOfClues--;
                    j = 0;
                }
                break;
            }

        }
        else if (noOfClues == 2) {
            if (qset.q1[1].attribute == "pairsOfSidesEqual" && qset.q1[1].comparator == "=" && qset.q1[1].quantity == shape.pairsOfSidesEqual && !isInArray(shape.id, Options)) {
                Options[i] = shape; Options[i].id = shape.id;
                fitCount++;
                if (fitCount == 2) {
                    fitCount = 0;
                    noOfClues--;
                    j = 0;
                }
                break;
            }

        }
        else if (noOfClues == 1) {
            if (qset.q1[2].attribute == "obtuseAngles" && qset.q1[2].comparator == "=" && qset.q1[2].quantity == shape.obtuseAngles && !isInArray(shape, Options)) {
                Options[i] = shape; Options[i].id = shape.id;
                fitCount++;
                if (fitCount == 1) {
                    fitCount = 0;
                    noOfClues--;
                    j = 0;
                }
                break;
            }
        }
        else {
            //Get answer
            if (qset.q1[2].quantity == shape.obtuseAngles && qset.q1[1].quantity == shape.pairsOfSidesEqual && qset.q1[0].quantity == shape.straightSides && !isInArray(shape, Options)) {
                Options[i] = shape; console.log(shape.id + " is the Answer");
                break;
            }

        }
    }
    console.log(Options[i]);
}
Options = shuffle(Options);
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
createDoms();
function createDoms()
{
    for (var i = 0; i < noOfOptions; i++)
    {
        optionDoms[i] = document.createElement("img");
        optionDoms[i].class = "opimg"
        optionDoms[i].src = "../Generators/version3/" + Options[i].id;
        console.log(" This is doms :" + optionDoms[i].src);
    }
    console.log("This is the options :" + Options);
    console.log(" This is doms :" + optionDoms[0].src);
}
function optionGen()
{
    return Options;
}
function optionRend() {
    return optionDoms;
}