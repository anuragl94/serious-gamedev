var glossaryTerms = {
    "acuteAngles": "Explanation of the term 'acute'",
    "obtuseAngles": "Explanation of the term obtuse",
    "straightSides": "A straight side is a side that is straight"
};

function showGlossaryPopup(target) {
    //Target is the DOM element in which we will highlight the glossary terms
    alert(glossaryTerms[target]);
    console.log(target);
}

$(document).on("click", ".glossaryTerm", function () {
    showGlossaryPopup($(this).html());
});