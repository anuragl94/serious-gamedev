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
        english: "Replay",
        hindi: "undefined"
    },
    "replay": {
        english: "Replay",
        hindi: "undefined"
    },
    "done": {
        english: "Done",
        hindi: "undefined"
    },
    "treats-left": {
        english: "Treats left",
        hindi: "undefined"
    },
    "angle-tool": {
        english: "Angle tool",
        hindi: "प्रक्रिया"
    },
    init: function () {
        var language = localStorage.language || "english";
        localStorage.language = language;
        var self = this;
        $(document).ready(function () {
            $.each($("[data-translate]"), function () {
                console.log(self, this);
                var translation = self[$(this).attr("data-translate")][language];
                $(this).html(translation);
            });
        });
    }
}.init();