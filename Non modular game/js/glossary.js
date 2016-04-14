// Here is how a regular module would look like
// Name of the file = module name
var glossary = {
    terms: {
        "acuteAngles": "Explanation of the term 'acute'",
        "obtuseAngles": "Explanation of the term obtuse",
        "straightSides": "A straight side is a side that is straight"
    },
    showPopup: function (target) {
        //Target is the DOM element in which we will highlight the glossary terms
        alert(this.terms[target]);
        console.log(target);
    },
    init: function () {
        $(document).on("click", ".glossaryTerm", function () {
            showPopup($(this).html());
        });

    }
}.init();