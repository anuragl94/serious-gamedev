var pointCalculator = {
    calculatePoints: function (levelNumber) {
        var stats = JSON.parse(localStorage.stats);
        var treats = parseInt(stats.stages[levelNumber].treats);
        var attempts = parseInt(stats.stages[levelNumber].attempts);
        var earnedPoints = 0;
        var multiplier = 10 * levelNumber;
        var bonusPoints = 50 * levelNumber;

        var basicPoints = (treats * multiplier);
        if (attempts === 1) {
            earnedPoints = basicPoints + bonusPoints;
        } else {
            earnedPoints = basicPoints;
        }
        var stage = window.location.search.split("stage=")[1].split("&")[0];
        this.setScore(stage, earnedPoints);
        return earnedPoints;
    },
    getHighscore: function () {
        var stats = JSON.parse(localStorage.stats);
        var highscore = 0;
        $.each(stats.stages, function () {
            if (this.highscore > highscore) {
                highscore = this.highscore;
            }
        });
        return highscore;
    },
    setScore: function (levelNumber, score) {
        var stats = JSON.parse(localStorage.stats);
        var highscore = stats.stages[levelNumber];
        if (!('highscore' in highscore))
            highscore = 0;
        if (score > highscore) {
            highscore = score;
            stats.stages[levelNumber].highscore = highscore;
            localStorage.stats = JSON.stringify(stats);
        }
    },
    init: function () {
        var self = this;
        $(document).ready(function () {
            $(".highscore").html(self.getHighscore());
        });
        return this;
    },
    exit: function () {
        var self = this;
        if (window.location.search !== "") {
            var stage = window.location.search.split("stage=")[1].split("&")[0];
            if (stage.length) {
                this.calculatePoints(parseInt(stage));
            }
        }
    }
}.init();
window.onbeforeunload = function () {
    pointCalculator.exit();
    return null;
};