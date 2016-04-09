$(window).load(function () {
    // The following code that was commented read the coordinates from the svgs. For now, we have manually supplied the coordinates.
//                $(".optionWrapper").append('<img src="' + document.getElementById('option1').data + '" class="imageUnderlay" id="option1"/>');
//
//                //Almost everything is hardcoded for testing
//                $(".canvasOverlay").each(function () {
//                    var svgObject = document.getElementById('option1').contentDocument;
//                    var paths = $(svgObject).find("path");
//                    var coords = $($(svgObject).find("svg path")[0]).attr("d");
//                    coords = coords.match(/[MLHVCSQTAZ] [0-9.]+ [0-9.]+/g);
//                    coordinates['option1'] = $.map(coords, function (value) {
//                        var temp = value.split(' ');
//                        return [[temp[1], temp[2]]];
//                    });
//
//                    //Tool specific code ends here
//                    var underlay = $(this).closest(".objectWrapper").find("img");
//                });
//                $("object").remove();

    $.each(coordinates, function (key, coords) {
        $.each(coords, function () {
            var target = $('#' + key).closest(".optionWrapper");
            var vertex = document.createElement("div");
            $(vertex).addClass("vertex").css({"left": this[0]}).css({"top": this[1]});
            $(target).append(vertex);
        });
    });

    function getAngle(cx, cy, ex, ey) {
        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx); // range (-PI, PI]
        theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
        //if (theta < 0) theta = 360 + theta; // range [0, 360)
        return theta;
    }

    $(".optionWrapper").click(function (e) {
        e.preventDefault();
        if ($(".activeTool").hasClass("snapped")) {
            $(".activeTool").removeClass("snapped");
            //following = true;
            $(".activeTool").rotate({
                "angle": 0,
                "center": ["0%", "100%"]
            });
        } else {
            console.log("I'm now tracing coordinates");
            var closest = null;
            var closest_distance = 9999;
            $(this).find(".vertex").each(function () {
                var vertex = this;
                //console.log(vertex.style.left);
                var vertex_coords = $(this).offset();
                var x = parseInt(vertex_coords["left"]) - event.pageX;
                var y = parseInt(vertex_coords["top"]) - event.pageY;
                var dist = Math.sqrt(x * x + y * y);
                console.log("Distance to point is ", dist);
                if ((dist < closest_distance) && (dist < snap_offset)) {
                    closest_distance = dist;
                    closest = this;
                }
            });
            if (closest !== null) {
                console.log("Found my soulmate. Now I'll be attached to it.");
                following = false;
                var vertex_coords = $(closest).offset();
                $(".activeTool").css({
                    "top": vertex_coords["top"],
                    "left": vertex_coords["left"]
                });
                $(".options").css("pointer-events", "none");
            }
        }
    });

    $(".rotationHandle").mousedown(function () {
        rotating = true;
    });

    $(document).mouseup(function () {
        rotating = false;
    });

    $(document).mousemove(function () {
        if (following === true) {
            $(".activeTool").css({
                "left": event.pageX,
                "top": event.pageY
            });
        }
        if (rotating === true) {
            var angle = getAngle(parseInt($(".activeTool").css("left")), parseInt($(".activeTool").css("top")), event.pageX, event.pageY);
            $(".activeTool").rotate({
                "angle": angle + 45,
                "center": ["0%", "100%"]
            });
        }
    });

    $(".beginFollowing").click(function () {
        following = true;
        $(".options").css("pointer-events", "");
    });

    $(".toolButton").click(function () {
        $(".activeTool").removeClass("activeTool").toggle(false);
        $("#" + $(this).attr("data-tool")).addClass("activeTool").toggle(true);
    });
});