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
        hindi: "untranslated"
    },
    "replay": {
        english: "Replay",
        hindi: "untranslated"
    },
    "done": {
        english: "Done",
        hindi: "untranslated"
    },
    "treats-left": {
        english: "Treats left",
        hindi: "untranslated"
    },
    "angle-tool": {
        english: "Angle tool",
        hindi: "प्रक्रिया"
    },
    "stage": {
        english: "Stage",
        hindi: "मंच"
    },
    "level": {
        english: "Level",
        hindi: "untranslated"
    },
    "main-menu": {
        english: "Main menu",
        hindi: "untranslated"
    },
    "instructions": {
        english: "Instructions",
        hindi: "untranslated"
    },
    "instruction-text": {
        english: 'You are a police officer, named "GEO". You are the first alien police officer ever! Your strength is rational thinking and your sense of justice drives you. It is on you to save many innocents from being wrongly prosecuted! Use the clues provided to you to find innocent beings disguised as shapes. Earn points and solve cases to get promoted.',
        hindi: "untranslated"
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