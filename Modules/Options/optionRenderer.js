//Qset Data
//TODO: make questions randomize from development-hotfixes and fix correct answer
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
var qno = Math.floor(Math.random() * (3 - 0 + 1) + 0); console.log("Question: " + qno);
var noOfClues = parseInt(config.questionsRepo[4].noOfClues) - 1;
var totalClues = noOfClues;
var noOfOptions = parseInt(config.questionsRepo[4].noOfOptions);
var noOfCorrectOptions = parseInt(config.questionsRepo[4].noOfCorrectOptions);
var Options = new Array(noOfOptions);
var correctOptions = new Array(noOfCorrectOptions);
var shapesJSON = JSON.parse(shapes3);
var optionDoms = document.getElementsByClassName("opimg");
var shapesJSON = JSON.parse(shapes3);
var fitCount = 0;
for (var i = 0; i < noOfOptions && noOfClues >= 0; i++) {
    var j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0 + 1) + 0);
    while (!Options[i]) {
        var shape = shapesJSON[j];
        if (i <= noOfOptions) {
            if (qset.q1[noOfClues].attribute == "straightSides" && qset.q1[noOfClues].comparator == "=" && parseInt(qset.q1[noOfClues].quantity) == parseInt(shape.straightSides) && !isInArray(shape, Options)) {
                Options[i] = shape;
                fitCount++;
                if (fitCount == 2) {
                    fitCount = 0;
                    noOfClues--;
                    j = 0;
                }
                break;
            }


            if (qset.q1[noOfClues].attribute == "pairsOfSidesEqual" && qset.q1[noOfClues].comparator == "=" && qset.q1[noOfClues].quantity == shape.pairsOfSidesEqual && !isInArray(shape, Options)) {
                Options[i] = shape;
                fitCount++;
                if (fitCount == 2) {
                    fitCount = 0;
                    noOfClues--;
                    j = 0;
                }
                break;
            }


            if (qset.q1[noOfClues].attribute == "obtuseAngles" && qset.q1[noOfClues].comparator == "=" && qset.q1[noOfClues].quantity == shape.obtuseAngles && !isInArray(shape, Options)) {
                Options[i] = shape;
                fitCount++;
                if (fitCount == 2) {
                    fitCount = 0;
                    noOfClues--;
                    j = 0;
                }
                break;
            }
            //}
        }
        j++; 
        if (j == shapesJSON.length) { 
            //Randomize 
            j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0 + 1) + 0); 
            } 
    }
    if(!Options[i].straightSides) 
        Options[i].straightSides = 0; 
    if(!Options[i].curvedSides) 
        Options[i].curvedSides = 0; 
    if(!Options[i].pairsOfSidesEqual) 
        Options[i].pairsOfSidesEqual = 0; 
    if(!Options[i].rightAngles) 
        Options[i].rightAngles = 0; 
    if(!Options[i].obtuseAngles) 
        Options[i].obtuseAngles = 0; 
    if(!Options[i].acuteAngles) 
        Options[i].acuteAngles = 0; 
    if(!Options[i].reflexAngles) 
        Options[i].reflexAngles = 0; 
    if (!Options[i].oppositePairsParallel) 
        Options[i].oppositePairsParallel = 0; 

    console.log(Options[i]);
}
    for (var j = 0; j < shapesJSON.length; j++) {
        //Get answer
        var satcount = 0;
        for (z = totalClues; z >= 0;z--)
        {
            if (shape[qset.q1[z].attribute] == qset.q1[z].quantity && !isInArray(shape, Options))
            {
                satcount++;    
            }
            else
                satcount = 0
        }
        if(satcount == totalClues)
        {
            Options[0] = shape; console.log(shape.id + "Answer");
            break;
        }
    }
    Options = shuffle(Options);
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
function drawDoms()
{
    for (var i = 0; i < noOfOptions; i++) {
        document.body.appendChild(optionDoms[i]);
    }
}
drawDoms();