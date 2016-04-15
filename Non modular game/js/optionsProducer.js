var optionsProducer = {
    returnValues : null,
    init: function(){
        //Qset Data
        var   qset = [
                {
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
                },
                {
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
                            "quantity": "0"
                        }
                    ]
                },
                {
                    "q1": [
                        {
                            "attribute": "straightSides",
                            "comparator": "=",
                            "quantity": "4"
                        },
                        {
                            "attribute": "pairsOfSidesEqual",
                            "comparator": "=",
                            "quantity": "1"
                        },
                        {
                            "attribute": "obtuseAngles",
                            "comparator": "=",
                            "quantity": "2"
                        }
                    ]
                },
                {
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
                }
            ];
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
                        "noOfClues": "3",
                        "passLimit": "3"
                    },
                    {
                        "stage": "2",
                        "noOfOptions": "4",
                        "noOfCorrectOptions": "1",
                        "noOfClues": "3",
                        "passLimit": "5"
                    },
                    {
                        "stage": "3",
                        "noOfOptions": "4",
                        "noOfCorrectOptions": "1",
                        "noOfClues": "3",
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
                        "noOfCorrectOptions": "1",
                        "noOfClues": "3",
                        "passLimit": "15"
                    },
                    {
                        "stage": "8",
                        "noOfOptions": "8",
                        "noOfCorrectOptions": "1",
                        "noOfClues": "3",
                        "passLimit": "15"
                    },
                    {
                        "stage": "9",
                        "noOfOptions": "8",
                        "noOfCorrectOptions": "1",
                        "noOfClues": "3",
                        "passLimit": "15"
                    }
                ]
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
                        "id": "figc001.png",
                        "straightSides": "0",
                        "curvedSides": "yes"
                    },
                    {
                        "id": "figc002.png",
                        "straightSides": "0",
                        "curvedSides": "yes"
                    },
                    {
                        "id": "figc005.png",
                        "straightSides": "2",
                        "curvedSides": "yes",
                        "pairsOfSidesEqual": "1"
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
            
                var qno = urlParse("qno");
                var stage = urlParse("stage");
                if (stage === "Not found")
                    var stage = 6;
//                console.log("Stage: " + stage);
                if (qno === "Not found")
                    var qno = Math.floor(Math.random() * (3 - 0 + 1) + 0);
//                console.log("Question: " + qno);
                var noOfClues = parseInt(config.questionsRepo[stage].noOfClues);
                var noOfOptions = parseInt(config.questionsRepo[stage].noOfOptions);
                var noOfCorrectOptions = parseInt(config.questionsRepo[stage].noOfCorrectOptions);
                var Options = new Array(noOfOptions);
                var correctOptions = new Array(noOfCorrectOptions);
                //var shapesJSON = JSON.parse(shapes3);
                var shapesJSON = shapes3['data'];
                var fitCount = 0;
                var clueFit = (noOfOptions - 2) / 2; //TODO:Use better way to do so
                for (var i = 0; i < noOfOptions && noOfClues >= 0; i++)
                {
                    //Random j value for different options
                    var j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0 + 1) + 0);
                    while (!Options[i]) {
                        var shape = shapesJSON[j];
                        if ((shape['obtuseAngles'] !== undefined) && (shape['pairsOfSidesEqual'] !== undefined) && (shape['straightSides'] !== undefined))
                        {
                            if (noOfClues == 3) {
                                if (qset[qno].q1[0].attribute == "straightSides" && qset[qno].q1[0].comparator == "=" && parseInt(qset[qno].q1[0].quantity) != parseInt(shape['straightSides']) && !isInArray(shape, Options)) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == clueFit) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                } else if (qset[qno].q1[0].attribute == "straightSides" && qset[qno].q1[0].comparator == ">" && parseInt(qset[qno].q1[0].quantity) <= parseInt(shape['straightSides']) && !isInArray(shape, Options)) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == clueFit) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                } else if (qset[qno].q1[0].attribute == "straightSides" && qset[qno].q1[0].comparator == "<" && parseInt(qset[qno].q1[0].quantity) >= parseInt(shape['straightSides']) && !isInArray(shape, Options)) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == clueFit) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                }

                            } else if (noOfClues == 2) {
                                if (qset[qno].q1[1].attribute == "pairsOfSidesEqual" && qset[qno].q1[1].comparator == "=" && qset[qno].q1[1].quantity != shape['pairsOfSidesEqual'] && !isInArray(shape, Options) && !(parseInt(qset[qno].q1[0].quantity) != parseInt(shape['straightSides']))) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == clueFit) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                } else if (qset[qno].q1[1].attribute == "pairsOfSidesEqual" && qset[qno].q1[1].comparator == ">" && qset[qno].q1[1].quantity <= shape['pairsOfSidesEqual'] && !isInArray(shape, Options) && !(parseInt(qset[qno].q1[0].quantity) != parseInt(shape['straightSides']))) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == clueFit) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                } else if (qset[qno].q1[1].attribute == "pairsOfSidesEqual" && qset[qno].q1[1].comparator == "<" && qset[qno].q1[1].quantity >= shape['pairsOfSidesEqual'] && !isInArray(shape, Options) && !(parseInt(qset[qno].q1[0].quantity) != parseInt(shape['straightSides']))) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == clueFit) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                }
                            } else if (noOfClues == 1) {
                                if (qset[qno].q1[2].attribute == "obtuseAngles" && qset[qno].q1[2].comparator == "=" && qset[qno].q1[2].quantity != shape['obtuseAngles'] && !isInArray(shape, Options) && !(qset[qno].q1[1].quantity != shape['pairsOfSidesEqual']) && !(parseInt(qset[qno].q1[0].quantity) != parseInt(shape['straightSides']))) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == 1) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                } else if (qset[qno].q1[2].attribute == "obtuseAngles" && qset[qno].q1[2].comparator == ">" && qset[qno].q1[2].quantity <= shape['obtuseAngles'] && !isInArray(shape, Options) && !(qset[qno].q1[1].quantity != shape['pairsOfSidesEqual']) && !(parseInt(qset[qno].q1[0].quantity) != parseInt(shape['straightSides']))) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == 1) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                } else if (qset[qno].q1[2].attribute == "obtuseAngles" && qset[qno].q1[2].comparator == "<" && qset[qno].q1[2].quantity >= shape['obtuseAngles'] && !isInArray(shape, Options) && !(qset[qno].q1[1].quantity != shape['pairsOfSidesEqual']) && !(parseInt(qset[qno].q1[0].quantity) != parseInt(shape['straightSides']))) {
                                    Options[i] = shape;
                                    fitCount++;
                                    if (fitCount == 1) {
                                        fitCount = 0;
                                        noOfClues--;
                                    }
                                    break;
                                }

                            } else if (noOfClues == 0) {
                                //Get answer
                                if (qset[qno].q1[2].quantity == shape['obtuseAngles'] && qset[qno].q1[1].quantity == shape['pairsOfSidesEqual'] && qset[qno].q1[0].quantity == shape['straightSides'] && !isInArray(shape, Options)) {
                                    Options[i] = shape;
                                    //console.log(shape['id'] + "Answer");
                                    Options[i]['correctAnswer'] = true
                                    break;
                                }

                            }
                        }
                        j++;
                        if (j == shapesJSON.length) {
                            //Randomize
                            j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0 + 1) + 0);
                        }

                    }
                    //TODO: use a list from a config file to fill such values
                    // Fill properties not available for the shapes
                    if (!Options[i].straightSides)
                        Options[i].straightSides = 0;
                    if (!Options[i].curvedSides)
                        Options[i].curvedSides = 0;
                    if (!Options[i].pairsOfSidesEqual)
                        Options[i].pairsOfSidesEqual = 0;
                    if (!Options[i].rightAngles)
                        Options[i].rightAngles = 0;
                    if (!Options[i].obtuseAngles)
                        Options[i].obtuseAngles = 0;
                    if (!Options[i].acuteAngles)
                        Options[i].acuteAngles = 0;
                    if (!Options[i].reflexAngles)
                        Options[i].reflexAngles = 0;
                    if (!Options[i].oppositePairsParallel)
                        Options[i].oppositePairsParallel = 0;

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
                    temp = '<div class="checkbox_wrapper"><input type="checkbox" index="' + i + '" /><label></label></div>';
                    $(label).append(temp);
                    markup.appendChild(label);
                    optionsMarkup.appendChild(markup);
//                    console.log(Options[i].id + " : " + JSON.stringify(Options[i])); // Help to solve
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

                gameData['clues'] = qset[qno]['q1'];
                gameData['options'] = Options;
                gameData['includedModules'].push('options_renderer')

                this.returnValues = {
                    "clues": qset[qno]['q1'],
                    "options": Options,
                    "options_markup": optionsMarkup
                }
            },
    
    render: function () {
    return this.returnValues;
    }
};