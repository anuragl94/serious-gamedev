$(document).ready(function () {
    
    gangProducer.init();
    var returnValues = gangProducer.render();
    $("#optionsWrapper").append(returnValues["options_markup"]);
    document.getElementById("optionsWrapper2").innerHTML+= "<h3>Now find the leader of the gang</h3>";
    $("#optionsWrapper2").append(returnValues["options_markup2"]);

    $("#inspect").onclick(function () {
        //Here we get a list of selected options along with their attributes
        var selectedOptions = $(this).find("input:checked").map(function () {
            if ("correctAnswer" in this.att)
            return $(this).attr("index");
        });
        if(selectedOptions)
        $("#cluesWrapper").trigger("checkIfCorrectOptions", [selectedOptions]);
    });
});