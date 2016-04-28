var questionGenerator = {
        init : function () {
            document.addEventListener("DOMContentLoaded", function(event) { 
                //Question config parameters
                //Common variables to access dom elements
                var clueParams = document.getElementById("ClueParams");
                var shapeSelect = document.getElementById("ShapeSelect");
                var parameterTypeSelect = document.getElementById("ParameterTypeSelect");
                var parameterSelect = document.getElementById("ParameterSelect");
                var conditionSelect = document.getElementById("ConditionSelect");
                var conditionalArgument = document.getElementById("ConditionalArgument");
                var correctImage = document.getElementById("CorrectImage");
                var output = document.getElementById("Output");
                document.getElementById("clearClue").onclick = clearClues;
                document.getElementById("addClue").onclick = generateSampleAnswer;
                var questionGenerated = 
                {
                    "q1": [
                    ]
                };
                
                //Function to generate sample answer
                function generateSampleAnswer()
                {
                    var newClue = new Array();
                    newClue.attribute = parameterSelect.value;
                    newClue.comparator = conditionSelect.value;
                    newClue.quantity = conditionalArgument.value;
                    if(!isInArray(newClue, questionGenerated.q1)) {
                        questionGenerated.q1.push(newClue);
                    }
                    var correctImageSrc = "";
                    var isValid = false;
                    var fitCount = 0;
                    var j =0;
                    while(!isValid){
                        shape = shapes.data[j];
                        fitCount = 0;
                        for(var clue in questionGenerated.q1){
                            //Straight Sides
                            if (questionGenerated.q1[clue].quantity == shape[questionGenerated.q1[clue].attribute] && questionGenerated.q1[clue].comparator == "=") {
                                fitCount++;
                            }
                            else if (questionGenerated.q1[clue].quantity < shape[questionGenerated.q1[clue].attribute] && questionGenerated.q1[clue].comparator == ">") {
                                fitCount++;
                            }
                            else if (questionGenerated.q1[clue].quantity > shape[questionGenerated.q1[clue].attribute] && questionGenerated.q1[clue].comparator == "<") {
                                fitCount++;
                            }
                            else
                                break;
                        }
                        if(fitCount == questionGenerated.q1.length)
                        {
                            correctImageSrc="../Modules/Generators/version3/"+shape.id;
                            isValid = true;
                            j=0;
                        }
                        if(j < shapes.data.length-1)
                            j++;
                        else {
                            alert("No shape matching the given parameters were found.");
                            j=0;
                            clearClues();
                            break;
                        }
                    }
                    if(isValid){
                        document.getElementById("SampleCorrectAnswer").style.opacity="100";
                        correctImage.src=correctImageSrc;
                        output.innerHTML = "{\n";
                        for(var clue in questionGenerated.q1){
                            output.innerHTML += "{\n";
                            for(var atr in questionGenerated.q1[clue]){
                                output.innerHTML += ("'"+atr+"' : '"+questionGenerated.q1[clue][atr]+"',\n");
                            }
                            output.innerHTML +="}";
                        }
                        output.innerHTML +="\n}";
                    }
                    
                }
                
                function clearClues()
                {
                    questionGenerated = 
                {
                    "q1": [
                    ]
                };
                document.getElementById("SampleCorrectAnswer").style.opacity="0";
                correctImage.src="";
                output.innerHTML = "";
                }
                function isInArray(value, array) {
                    return array.indexOf(value) > -1;
                }
                
                var shapes = {
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
            });
        }
}.init();