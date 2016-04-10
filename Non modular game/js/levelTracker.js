$(document).ready(function () {
    var stats;
    if (typeof localStorage.stats !== 'undefined') {
        stats = JSON.parse(localStorage.stats);
    } else {
        //init() here. Only for testing
        stats = {
            stagesCrossed: [],
            stages: {
            }
        };
        localStorage.stats = JSON.stringify(stats);
    }
    
    if (window.location.search !== "") {
        var stage = window.location.search.split("stage=")[1].split("&")[0];
        var stats = JSON.parse(localStorage.stats);
        console.log(stats);
        console.log(stage, stats.stages);
        if (!(stage in stats.stages)) {
            stats.stages[stage] = {
                attempts: 0,
                treats: 0,
                perfect: false
            };
        }
        stats.stages[stage].attempts += 1;
        localStorage.stats = JSON.stringify(stats);
    }

    $(document).on('stageCompletion', function (event, treats, maxTreats) {
        var stats = JSON.parse(localStorage.stats);
        var stage = window.location.search.split("stage=")[1].split("&")[0];
        //First attempt
        if (stats.stages[stage].attempts === 1)
        {
            stats.stages[stage].treats = treats;
            stats.stages[stage].perfect = (treats === maxTreats);
            if (treats === maxTreats) {
                if ($.inArray(parseInt(stage), stats.stagesCrossed) === -1)
                    stats.stagesCrossed.push(parseInt(stage));
            }
            localStorage.stats = JSON.stringify(stats);
        }
    });

//    window.onbeforeunload = function () {
//        return "If you do that, you will not be eligible to be promoted anymore! Press 'Don't reload'!";
//    };
});