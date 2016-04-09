$(document).ready(function () {
    if (typeof (localStorage.getItem("stats")) == 'undefined') {
        var stats = JSON.parse(localStorage.stats);
    } else {
        //init() here
        var stats = {
            stagesCrossed: [1],
            stages: {
                "1": {
                    attempts: 1,
                    treats: 5,
                    perfect: true
                }
            }
        };
    }
});