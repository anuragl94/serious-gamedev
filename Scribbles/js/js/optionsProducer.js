var optionsProducer = {
    returnValues : null,
    init: function(){
            var config = {
                "questionsRepo": [
                    {
                        "stage": "0",
                        "noOfOptions": "2",
                        "elimSeq": [1],
                        "attributes": ["straightSides", "pairsOfSidesEqual"],
                        "comparator": ["="]
                    },
                    {
                        "stage": "1",
                        "noOfOptions": "4",
                        "elimSeq": [1, 2],
                        "attributes": ["straightSides", "pairsOfSidesEqual"],
                        "comparator": ["="]
                    },
                    {
                        "stage": "2",
                        "noOfOptions": "4",
                        "elimSeq": [1, 1, 1],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles"],
                        "comparator": ["="]
                    },
                    {
                        "stage": "3",
                        "noOfOptions": "4",
                        "elimSeq": [1, 1, 1],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles"],
                        "comparator": ["=", "<", ">"]
                    },
                    {
                        "stage": "4",
                        "noOfOptions": "6",
                        "elimSeq": [1, 2, 2],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles", "obtuseAngles"],
                        "comparator": ["=", "<", ">"]
                    },
                    {
                        "stage": "5",
                        "noOfOptions": "6",
                        "elimSeq": [1, 2, 2],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles", "obtuseAngles", "acuteAngles"],
                        "comparator": ["=", "<", ">"]
                    },
                    {
                        "stage": "6",
                        "noOfOptions": "6",
                        "elimSeq": [1, 2, 2],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles", "obtuseAngles", "acuteAngles", "reflexAngles"],
                        "comparator": ["=", "<", ">"]
                    },
                    {
                        "stage": "7",
                        "noOfOptions": "6",
                        "elimSeq": [2, 2, 1],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles", "obtuseAngles", "acuteAngles", "reflexAngles", "oppositePairsParallel"],
                        "comparator": ["=", "<", ">"]
                    },
                    {
                        "stage": "8",
                        "noOfOptions": "6",
                        "elimSeq": [2, 1, 2],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles", "obtuseAngles", "acuteAngles", "reflexAngles", "oppositePairsParallel"],
                        "comparator": ["=", "<", ">", "<="]
                    },
                    {
                        "stage": "9",
                        "noOfOptions": "6",
                        "elimSeq": [1, 1, 3],
                        "attributes": ["straightSides", "pairsOfSidesEqual", "rightAngles", "obtuseAngles", "acuteAngles", "reflexAngles", "oppositePairsParallel"],
                        "comparator": ["=", "<", ">", "<=", ">="]
                    }                ]
            };
            function isInArray(value, array) {
                return array.indexOf(value) > -1;
            };
            shapes3 = {
                "data": [
                    {
                        "id": "fig001.png",
                        "straightSides": "3",
                        "curvedSides": "0",
                        "sidesEqual": "3",
                        "rightAngles": "0",
                        "obtuseAngles": "0",
                        "acuteAngles": "3",
                        "reflexAngles": "0"
                    },
                    {
                        "id": "fig002.png",
                        "straightSides": "3",
                        "curvedSides": "0",
                        "sidesEqual": "2",
                        "rightAngles": "0",
                        "obtuseAngles": "0",
                        "acuteAngles": "3",
                        "reflexAngles": "0"
                    },
                    {
                        "id": "fig003.png",
                        "straightSides": "3",
                        "curvedSides": "0",
                        "sidesEqual": "2",
                        "rightAngles": "1",
                        "obtuseAngles": "0",
                        "acuteAngles": "2",
                        "reflexAngles": "0"
                    },
                    {
                        "id": "fig004.png",
                        "straightSides": "3",
                        "curvedSides": "0",
                        "sidesEqual": "2",
                        "rightAngles": "0",
                        "obtuseAngles": "1",
                        "acuteAngles": "2",
                        "reflexAngles": "0"
                    },
                    {
                        "id": "fig005.png",
                        "straightSides": "3",
                        "curvedSides": "0",
                        "sidesEqual": "0",
                        "rightAngles": "0",
                        "obtuseAngles": "0",
                        "acuteAngles": "3",
                        "reflexAngles": "0"
                    },
                    {
                        "id": "fig006.png",
                        "straightSides": "3",
                        "curvedSides": "0",
                        "sidesEqual": "0",
                        "rightAngles": "1",
                        "obtuseAngles": "0",
                        "acuteAngles": "2",
                        "reflexAngles": "0"
                    },
                    {
                        "id": "fig007.png",
                        "straightSides": "3",
                        "curvedSides": "0",
                        "sidesEqual": "0",
                        "rightAngles": "0",
                        "obtuseAngles": "1",
                        "acuteAngles": "2",
                        "reflexAngles": "0"
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
                        "id": "fig025.png",
                        "straightSides": "4",
                        "curvedSides": "0",
                        "pairsOfSidesEqual": "2",
                        "rightAngles": "4",
                        "obtuseAngles": "0",
                        "acuteAngles": "0",
                        "reflexAngles": "0",
                        "oppositePairsParallel": "2"
                    },
                    {
                        "id": "fig026.png",
                        "straightSides": "4",
                        "curvedSides": "0",
                        "sidesEqual": "4",
                        "rightAngles": "4",
                        "obtuseAngles": "0",
                        "acuteAngles": "0",
                        "reflexAngles": "0",
                        "oppositePairsParallel": "2"
                    },
                    {
                        "id": "fig027.png",
                        "straightSides": "4",
                        "curvedSides": "0",
                        "pairsOfSidesEqual": "2",
                        "rightAngles": "0",
                        "obtuseAngles": "3",
                        "acuteAngles": "1",
                        "reflexAngles": "0",
                        "oppositePairsParallel": "0"
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
                        "id": "fig039.png",
                        "straightSides": "5",
                        "curvedSides": "0",
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
                        "curvedSides": "0",
                        "sidesEqual": "0",
                        "rightAngles": "0",
                        "obtuseAngles": "4",
                        "acuteAngles": "1",
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
                        "id": "fig055.png",
                        "straightSides": "8",
                        "curvedSides": "0",
                        "sidesEqual": "8",
                        "rightAngles": "0",
                        "obtuseAngles": "8",
                        "acuteAngles": "0",
                        "reflexAngles": "0",
                        "oppositePairsParallel": "4"
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
                        "rightAngles": "1",
                        "obtuseAngles": "2",
                        "acuteAngles": "3",
                        "reflexAngles": "2",
                        "oppositePairsParallel": "0"
                    }
                ]};
                
            function urlParse(val) {
                var result = "Not found",
                        tmp = [];
                location.search
                        //.replace ( "?", "" ) 
                        // this is better, there might be a question mark inside
                        .substr(1)
                        .split("&")
                        .forEach(function (item) {
                            tmp = item.split("=");
                            if (tmp[0] === val)
                                result = decodeURIComponent(tmp[1]);
                        });
                return result;
            };
  var stage = urlParse("stage");
  if (stage === "Not found")
    stage = 6;
  var noOfOptions = parseInt(config.questionsRepo[stage].noOfOptions);
  var Options = new Array(noOfOptions);
  var elimSeq = config.questionsRepo[stage].elimSeq;
  var legalComp = config.questionsRepo[stage].comparator;

  while(true) {
    var shapesLeft = shapes3['data'].slice();
    var legalAttr = config.questionsRepo[stage].attributes.slice();
    var clueSeq = [];
    var elimIndex = 0;
    var optionsIndex = 0;
    var tries = 10;
    while(tries > 0 && optionsIndex < noOfOptions-1) {
      var attr_i = Math.floor(Math.random()*legalAttr.length);
      var attr = legalAttr[attr_i];
      var comp = legalComp[Math.floor(Math.random()*legalComp.length)];
      var quant = 1 + Math.floor(Math.random() * (4 + stage/4));
      var illegalShapes = [];
      var suspectShapes = [];
      var innocentShapes = [];

      for(var i = 0; i < shapesLeft.length; i++) {
        var ans = checkClue(shapesLeft[i], attr, comp, quant);
        if(ans === 0) {
          innocentShapes.push(shapesLeft[i]);
        } else if(ans === 1) {
          suspectShapes.push(shapesLeft[i]);
        } else {
          illegalShapes.push(shapesLeft[i]);
        }
      }
      var innocentNeeded = elimSeq[elimIndex];
      if(innocentShapes.length >= innocentNeeded &&
         suspectShapes.length >= noOfOptions - innocentNeeded
                                 - optionsIndex) {
        clueSeq.push({"attribute": attr,
                      "comparator": comp,
                      "quantity": quant});
        shapesLeft = suspectShapes;
        legalAttr.splice(attr_i, 1);
        for(var i = 0; i < innocentNeeded; i++) {
          Options[optionsIndex++] = innocentShapes.splice(
         Math.floor(Math.random()*innocentShapes.length), 1)[0];
        }
        elimIndex++;
      } else {
        tries--;
      }
    }
    if(tries > 0 && shapesLeft.length > 0) {
      Options[optionsIndex] = shapesLeft[Math.floor(Math.random()*shapesLeft.length)];
      Options[optionsIndex]['correctAnswer'] = true;
      gameData['clues'] = clueSeq;
      break;
    }
  }

  Options = shuffle(Options);
  var optionsMarkup = document.createElement("div");
  $(optionsMarkup).addClass("row");
  for (var i = 0; i < noOfOptions; i++) {
    var markup = document.createElement("div");
    $(markup).addClass("col-lg-4 col-md-4");
    var label = document.createElement("label");
    $(label).addClass("option");
    var temp = document.createElement("img");
    temp.class = "option"
    temp.src = "../Modules/Generators/version3/" + Options[i].id;
    var wrapper = document.createElement("div");
    wrapper.className = "img_wrapper";
    wrapper.appendChild(temp);
    label.appendChild(wrapper);
    temp = '<div class="checkbox_wrapper"><input type="checkbox" index="' + i + '" /><label></label></div>';
    $(label).append(temp);
    markup.appendChild(label);
    optionsMarkup.appendChild(markup);
  }

  // Helper function
  function checkClue(shape, attr, comp, quant) {
    var attrValue = shape[attr];
    if(attrValue === undefined) { return 2; }
    attrValue = parseInt(attrValue);
    if(comp === "=") { return attrValue === quant ? 1 : 0; }
    if(comp === "<") { return attrValue < quant ? 1 : 0; }
    if(comp === ">") { return attrValue > quant ? 1 : 0; }
    if(comp === "<=") { return attrValue <= quant ? 1 : 0; }
    if(comp === ">=") { return attrValue >= quant ? 1 : 0; }
    return 2;
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

  gameData['options'] = Options;
  gameData['includedModules'].push('options_renderer');
  gameData['returnValues'] = {
                    "clues": gameData['clues'],
                    "options": Options,
                    "options_markup": optionsMarkup
                };
  this.returnValues = gameData['returnValues'];
            },
    
    render: function () {
    return this.returnValues;
    }
};