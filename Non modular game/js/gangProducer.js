var gangProducer = {
    returnValues: null,
    init: function () {
        var shapesJSON = shapes['data'];
        var config = 
            {
                "data": [
                    {
                        "stage": "6",
                        "noOfOptions": "4",
                        "noOfCorrectOptions": "1",
                        "parameters": ["straightSides", "sidesEqual", "rightAngles", "obtuseAngles", "acuteAngles", "reflexAngles"],
                        "passLimit": "1"
                    } ]
            };
        var qset = 
                {
                    "q1": [
                        {
                            "attributes": ["rightAngles", "obtuseAngles", "acuteAngles"],
                            "leaderAttribute": "reflexAngles",
                            "comparator": "=",
                            "quantity": "1"
                        }
                    ]
                };
        var noOfOptions = config.data[0].noOfOptions;
        var attributes = qset.q1[0].attributes;
        var leaderAttribute = qset.q1[0].leaderAttribute;
        var cmp = qset.q1[0].comparator;
        var qty = qset.q1[0].quantity;
        var optionSet1 = new Array();
        var optionSet2 = new Array();
        var fit = 0;
        while(optionSet1.length < noOfOptions)
        {
            var j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0 + 1) + 0);
            var shape = shapesJSON[j];
            if (!shape[leaderAttribute] || parseInt(shape[leaderAttribute]) < qty)
            {
                fit = 0;
                for(var atr in attributes)
                {
                    if (parseInt(shape[attributes[atr]]) >= 1)
                        fit++;
                }
                if ((noOfOptions - 1 ) == optionSet1.length && (fit >= 2) && (fit < attributes.length) )
                {
                    shape['correctAnswer'] = true;
                    optionSet1.push(shape);
                    break;
                }
                else if (fit == attributes.length && !isInArray(shape, optionSet1) && !((noOfOptions - 1) == optionSet1.length))
                {
                    optionSet1.push(shape);
                }
            }
        }
        Options1 = shuffle(optionSet1);
        var optionsMarkup = document.createElement("div");
        $(optionsMarkup).addClass("row");
        for (var i = 0; i < optionSet1.length; i++) {
            var markup = document.createElement("div");
            $(markup).addClass("col-lg-4 col-md-4");
            var label = document.createElement("label");
            $(label).addClass("option");
            var temp = document.createElement("img");
            temp.class = "option"
            temp.src = "../Modules/Generators/version3/" + Options1[i].id;
            var wrapper = document.createElement("div");
            wrapper.className = "img_wrapper";
            wrapper.appendChild(temp);
            label.appendChild(wrapper);
            temp = '<div class="checkbox_wrapper"><input type="checkbox" index="' + i + '" /><label></label></div>';
            $(label).append(temp);
            markup.appendChild(label);
            optionsMarkup.appendChild(markup);
            console.log("OptionSet1 : "+Options1[i].id + " : " + JSON.stringify(Options1[i])); // Help to solve
        }

        while (optionSet2.length < noOfOptions - 1) {
            var j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0 + 1) + 0);
            var shape = shapesJSON[j];
            if ((!shape[leaderAttribute] || parseInt(shape[leaderAttribute]) < qty) ) {
                fit = 0;
                for (var atr in attributes) {
                    if (parseInt(shape[attributes[atr]]) >= 1)
                        fit++;
                }
                if (fit === attributes.length && !isInArray(shape, optionSet2)) {
                    optionSet2.push(shape);
                }
            }
        }
        while (optionSet2.length < noOfOptions) {
            var j = Math.floor(Math.random() * ((shapesJSON.length - 1) - 0 + 1) + 0);
            var shape = shapesJSON[j];
            if ((shape[leaderAttribute] && parseInt(shape[leaderAttribute]) == qty)) {
                fit = 0;
                for (var atr in attributes) {
                    if (parseInt(shape[attributes[atr]]) >= 1)
                        fit++;
                }
                if (fit === attributes.length && !isInArray(shape, optionSet2)) {
                    optionSet2.push(shape);
                    shape['correctAnswer'] = true;
                    break;
                }
            }
        }
        Options2 = shuffle(optionSet2);
        var optionsMarkup2 = document.createElement("div");
        $(optionsMarkup2).addClass("row");
        for (var i = 0; i < optionSet2.length; i++) {
            var markup = document.createElement("div");
            $(markup).addClass("col-lg-4 col-md-4");
            var label = document.createElement("label");
            $(label).addClass("option");
            var temp = document.createElement("img");
            temp.class = "option"
            temp.src = "../Modules/Generators/version3/" + Options2[i].id;
            var wrapper = document.createElement("div");
            wrapper.className = "img_wrapper";
            wrapper.appendChild(temp);
            label.appendChild(wrapper);
            temp = '<div class="checkbox_wrapper"><input type="checkbox" index="' + i + '" /><label></label></div>';
            $(label).append(temp);
            markup.appendChild(label);
            optionsMarkup2.appendChild(markup);
            console.log("OptionSet2 : " + Options2[i].id + " : " + JSON.stringify(Options2[i])); // Help to solve
        }

        this.returnValues = {
            "options": Options1,
            "options2": Options2,
            "options_markup": optionsMarkup,
            "options_markup2": optionsMarkup2
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

        //Boolean isInArray
        function isInArray(value, array) {
            return array.indexOf(value) > -1;
        };
    },

    render: function () {
        return this.returnValues;
    }
};