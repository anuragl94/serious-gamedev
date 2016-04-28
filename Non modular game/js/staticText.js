var staticText = {
    "gs1-title": {
        english: "Police Quad",
        hindi: "पुलिस Quad"
    },
    "gs1-hint": {
        english: "The culprit's shape marker has",
        hindi: "अपराधी की आकृति मार्कर है"
    },
    "clues": {
        english: "Clues",
        hindi: "सुराग"
    },
    "actions": {
        english: "Actions",
        hindi: "प्रक्रिया"
    },
    "tools": {
        english: "Tools",
        hindi: "उपकरण"
    },
    "next-clue": {
        english: "Next clue",
        hindi: "अगले सुराग"
    },
    "next": {
        english: "Next",
        hindi: "untranslated"
    },
    "replay": {
        english: "Replay",
        hindi: "फिर से खेलना"
    },
    "done": {
        english: "Done",
        hindi: "ख़त्म"
    },
    "treats-left": {
        english: "Treats left",
        hindi: "कैंडी"
    },
    "angle-tool": {
        english: "Angle tool",
        hindi: "कोण उपकरण"
    },
    "stage": {
        english: "Stage",
        hindi: "मंच"
    },
    "level": {
        english: "Level",
        hindi: "स्तर"
    },
    "back": {
        english: "Go Back&nbsp",
        hindi: "वापस जाओ&nbsp"
    },
    "main-menu": {
        english: "Main menu",
        hindi: "मुख्य मेनू"
    },
    "instructions": {
        english: "Instructions",
        hindi: "अनुदेश"
    },
    "instruction-text": {
        english: 'You are a police officer, named "GEO". You are the first alien police officer ever! Your strength is rational thinking and your sense of justice drives you. It is on you to save many innocents from being wrongly prosecuted! Use the clues provided to you to find innocent beings disguised as shapes. Earn points and solve cases to get promoted.',
        hindi: 'आप एक पुलिस अधिकारी, "जियो " नाम हैं । आप पहली बार विदेशी पुलिस अधिकारी कभी भी कर रहे हैं! अपनी ताकत तर्कसंगत सोच रही है और न्याय की अपनी भावना आप ड्राइव। यह गलत तरीके से मुकदमा चलाया जा रहा कई निर्दोष लोगों को बचाने के लिए आप पर है! आप के लिए प्रदान सुराग का प्रयोग आकार के वेश में निर्दोष प्राणी खोजने के लिए। अंक कमाने के लिए और मामलों को हल करने के लिए बढ़ावा दिया'
    },
    renderLanguageSelect: function () {
        var languages = ["english", "hindi"];
        var output = "";
        $.each(languages, function () {
            output += '<option value="' + this + '">' + this.charAt(0).toUpperCase() + this.slice(1) + '</option>';
        });
        output = '<select id="languageSelect">' + output + '</select>';
        return output;
    },
    translate: function (language) {
        var self = this;
        $.each($("[data-translate]"), function () {
            var translation = self[$(this).attr("data-translate")][language];
            $(this).html(translation);
        });
    },
    init: function () {
        var language = localStorage.language || "english";
        localStorage.language = language;
        var self = this;
        $(document).ready(function () {
            self.translate(language);
        });
        $(document).on("change", "#languageSelect", function () {
            localStorage.language = this.value;
            self.translate(this.value);
        });
        return this;
    }
}.init();