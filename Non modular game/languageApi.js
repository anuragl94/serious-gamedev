var languageApi = {
    structure: {
        "english": ["comparator", "quantity", "attribute"],
        "hindi": ["comparator", "quantity", "attribute"]
    },
    phrases: {
        "<": {
            "english": "lesser than"
        },
        "=": {
            "english": "exactly"
        },
        ">": {
            "english": "more than"
        },
        "<=": {
            "english": "at most"
        },
        ">=": {
            "english": "at least"
        },
        "straightSides": {
            "english": "straight sides"
        },
        "curvedSides": {
            "english": "curved sides"
        },
        "sidesEqual": {
            "english": "equal sides"
        },
        "rightAngles": {
            "english": "right angles"
        },
        "obtuseAngles": {
            "english": "obtuse angles"
        },
        "acuteAngles": {
            "english": "acute angles"
        },
        "reflexAngles": {
            "english": "reflex angles"
        },
        "pairsOfSidesEqual": {
            "english": "pairs of equal sides"
        },
        "oppositePairsParallel": {
            "english": "pairs of parallel lines"
        }
    },
    translate: function (attribute, comparator, quantity, language) {
        language = language || "english";
        var output = {
            plaintext: ""
        };
        var structure = this.structure;
        var phrases = this.phrases;
        var raw = {
            "attribute": attribute,
            "quantity": quantity,
            "comparator": comparator
        };
        $.each(structure[language], function () {
            var translatedWord = raw[this];
            if (raw[this] in phrases)
                translatedWord = phrases[raw[this]][language];
            output[this] = translatedWord;
            output.plaintext += " " + translatedWord;
        });
        return output;
    }
};