var languageApi = {
    structure: {
        "english": ["comparator", "quantity", "attribute"],
        "hindi": ["comparator", "quantity", "attribute"]
    },
    phrases: {
        "<": {
            "english": "lesser than",
            "hindi": {
                "structure": ["quantity", "comparator", "attribute"],
                "translation": "से कम"
            }
        },
        "=": {
            "english": "exactly",
            "hindi": "केवल"
        },
        ">": {
            "english": "more than",
            "hindi": {
                "structure": ["quantity", "comparator", "attribute"],
                "translation": "से अधिक"
            }
        },
        "<=": {
            "english": "at most",
            "hindi": "ज्यादा से ज्यादा"
        },
        ">=": {
            "english": "at least",
            "hindi": "कम से कम"
        },
        "straightSides": {
            "english": "straight sides",
            "hindi": "सीधे पक्ष"
        },
        "curvedSides": {
            "english": "curved sides",
            "hindi": "घुमावदार पक्ष"
        },
        "sidesEqual": {
            "english": "equal sides",
            "hindi": "बराबर पक्ष"
        },
        "rightAngles": {
            "english": "right angles",
            "hindi": "समकोण"
        },
        "obtuseAngles": {
            "english": "obtuse angles",
            "hindi": "अधिक कोण"
        },
        "acuteAngles": {
            "english": "acute angles",
            "hindi": "न्यून कोण"
        },
        "reflexAngles": {
            "english": "reflex angles",
            "hindi": "?"
        },
        "pairsOfSidesEqual": {
            "english": "pairs of equal sides",
            "hindi": "बराबर पक्षों के जोड़े"
        },
        "oppositePairsParallel": {
            "english": "pairs of parallel lines",
            "hindi": "समानांतर पक्षों के जोड़े"
        }
    },
    translate: function (attribute, comparator, quantity, language) {
        var language = localStorage.language || "english";
        localStorage.language = language;
        var output = {
            plaintext: ""
        };
//        console.log(this);
        var structure = this.structure;
        var phrases = this.phrases;
        var raw = {
            "attribute": attribute,
            "quantity": quantity,
            "comparator": comparator
        };
        if ((comparator in phrases) && (typeof phrases[comparator][language] !== "string"))
            structure = phrases[comparator][language].structure;
        $.each(structure[language], function () {
            var translatedWord = raw[this];
            if (raw[this] in phrases)
                translatedWord = phrases[raw[this]][language];
            if (typeof translatedWord !== "string")
                translatedWord = translatedWord.translation;
            output[this] = translatedWord;
            output.plaintext += " " + translatedWord;
        });
        return output;
    },
    render: null,
    init: null
};