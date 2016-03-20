$(document).ready(function () {
    var selectedShapes = [];

    $(shapes).each(function () {
        selectedShapes.push(this);
        var newShape = $(".shapeTemplate").children().first().clone();
        var source = this['id'];
        $(newShape).attr('data-id', source.split(".")[0]);
        $(newShape).find("img").attr('src', "shapes/" + source);
        $(".shapes").append(newShape);

        // Following lines are for demo purposes
        if (selectedShapes.length == 11)
            return false;
    });
    $(".shapeTemplate").remove();

    var selector = $(".queryTemplate").children().first();
    var options = $(selector).find(".attributeSelector");
    $.each(allowedAttributes, function (key, value) {
        options.append($("<option />").val(key).text(value));
    });

    // All of the following custom events MUST be delegated events so that we don't create duplicate events handlers for each new querySelector
    $(".queries").on('change', ".attributeSelector", function () {
        $(this).siblings(".valueSelector").val("").toggle(true);
    });

    $(".queries").on('change', ".comparatorSelector", function () {
        var valSel = $(this).siblings(".valueSelector");
        $(valSel).find("option").remove().end();
        var attribute = $(this).siblings(".attributeSelector").val(), min = attributes[attribute][0], max = attributes[attribute][1];
        switch (this.value) {
            case ">":
                max -= 1;
                break;
            case "<":
                min += 1;
                break;
            default:
                break;
        }

        for (i = min; i <= max; i++) {
            valSel.append($("<option />").val(i).text(i));
        }
        valSel.val("").toggle(true);
    });

    $(".queries").on('change', ".valueSelector", function () {
        $(this).siblings("button").toggle(true);
    });

    $(".queries").on('click', "button", function () {
        $(".queries").trigger("disableLastQuerySelector");
        $(".queries").trigger("addNewQuerySelector");
        //What to do to options when this button is clicked?
    });

    $(".queries").on("disableLastQuerySelector", function () {
        lastSelector = $(this).children().last(".querySelector");
        $(lastSelector).addClass("disabled").find("button,select").prop("disabled", true);
    });

    $(".queries").on("addNewQuerySelector", function () {
        var newQuerySelector = selector.clone();
        newQuerySelector.find(".attributeSelector").siblings().val("");
        $(".queries").append(newQuerySelector);
    });

    $(".queries").trigger("addNewQuerySelector");
});