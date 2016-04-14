var toolkit = {
    snap_offset: 15,
    getAngle: function (cx, cy, ex, ey) {
        var dy = ey - cy;
        var dx = ex - cx;
        var theta = Math.atan2(dy, dx); // range (-PI, PI]
        theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
        //if (theta < 0) theta = 360 + theta; // range [0, 360)
        return theta;
    },
    renderVertices: function (shapes, coordinates) {
        $.each($(shapes), function (index, option) {
            var figure = $(option).find("img").attr("src").split("/");
            figure = figure[figure.length - 1].split(".")[0];
            console.log(figure);
            var target = this;
            var imageOffset = $(this).offset();
            var offset = $(this).find("img").offset();
            offset.left = offset.left - imageOffset.left;
            offset.top = offset.top - imageOffset.top;
            $.each(coordinates[figure], function () {
                var vertex = document.createElement("div");
                //All vertices were off by 15px to the left. Unable to trace the reason. So, hardcoded the offset here.
                $(vertex).addClass("vertex").css({"left": this[0] + offset.left + 15}).css({"top": this[1] + offset.top});
                $(target).append(vertex);
            });
        });
    },
    init: function () {
        var following = true;
        var rotating = true;
        var toolActive = false;
        $(document).ready(function () {
            $(".option").click(function (e) {
                if (!toolActive)
                    return;
                e.preventDefault();
                if ($(".activeTool").attr("id") === "perpTool") {
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
                        if ((dist < closest_distance) && (dist < this.snap_offset)) {
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
                } else if ($(".activeTool").attr("id") === "parallelTool") {
                    var closest1 = null, closest2 = null;
                    var closest_distance = 9999;
                    var coords = $(this).find(".vertex").map(function (index, element) {
                        var val = $(element).offset();
                        return [[val['left'], val['top']]];
                    });
                    $(coords).each(function (index, coord1) {
                        var coord2 = coords[(index + 1) % coords.length];
                        var x0 = event.pageX;
                        var y0 = event.pageY;
                        var x1 = coord1[0];
                        var y1 = coord1[1];
                        var x2 = coord2[0];
                        var y2 = coord2[1];
                        var numerator = (y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1;
                        var denominator = Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
                        var dist = Math.abs((numerator) / (denominator));
                        if (dist < closest_distance) {
                            console.log("closest distance", dist);
                            closest1 = coord1;
                            closest2 = coord2;
                            closest_distance = dist;
                        }
                    });
                    if (closest_distance < snap_offset) {
                        //Start drawing the tool from here
                        following = false;
                        var angle = this.getAngle(closest1[0], closest1[1], closest2[0], closest2[1]);
                        $(".activeTool .baseLine").css({
                            width: Math.sqrt(Math.pow((closest1[0] - closest2[0]), 2) + Math.pow((closest1[1] - closest2[1]), 2)),
                        }).rotate({
                            center: ["50%", "50%"]
                        });
                        $(".activeTool .ghostLine").css({
                            width: 1.2 * Math.sqrt(Math.pow((closest1[0] - closest2[0]), 2) + Math.pow((closest1[1] - closest2[1]), 2)),
                        }).rotate({
                            center: ["50%", "50%"]
                        });
                        $(".activeTool").css({
                            left: (closest1[0] + closest2[0]) / 2,
                            top: (closest1[1] + closest2[1]) / 2
                        }).rotate({
                            angle: angle,
                            center: ["100%", "100%"]
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
                if ($(".activeTool").attr("id") === "perpTool") {
                    if (rotating === true) {
                        var angle = this.getAngle(parseInt($(".activeTool").css("left")), parseInt($(".activeTool").css("top")), event.pageX, event.pageY);
                        $(".activeTool").rotate({
                            "angle": angle + 45,
                            "center": ["0%", "100%"]
                        });
                    }
                    if ((following) && (event.pageY < 200)) {
                        $(".activeTool").rotate({
                            "angle": 90,
                            "center": ["0%", "100%"]
                        });
                    }
                } else if ($(".activeTool").attr("id") === "parallelTool") {

                }
            });
            $(".beginFollowing").click(function () {
                following = true;
                $(".options").css("pointer-events", "");
            });
            $(".toolButton").click(function () {
                if ($(".activeTool").attr("id") === $(this).attr("data-tool")) {
                    $(".activeTool").removeClass("activeTool").toggle(false);
                } else {
                    console.log("Nope");
                    $(".activeTool").removeClass("activeTool").toggle(false);
                    $("#" + $(this).attr("data-tool")).addClass("activeTool").toggle(true);
                }
                following = true;
                rotating = false;
                toolActive = !toolActive;
                $(".options").css("pointer-events", "");
            });
        });
        return this;
    }
}.init();