var pointCalculator = {
    calculatePoints: function (levelNumber) {
        var stats = JSON.parse(localStorage.stats);
        var treats = stats.stages[levelNumber].treats;
        var attempts = stats.stages[levelNumber].attempts;
        var earnedPoints = 0;
        var multiplier = 10 * levelNumber;
        var bonusPoints = 50 * levelNumber;

        var basicPoints = (treats * multiplier);
        if (attempts === 1)
            earnedPoints = basicPoints + bonusPoints;
        else
            earnedPoints = basicPoints;
        this.setHighscore(earnedPoints);
        return earnedPoints;
    },
    getHighscore: function (levelNumber) {
        var stats = JSON.parse(localStorage.stats);
        return stats.stages[levelNumber].highscore;
    },
    setHighscore: function (levelNumber, score) {
        var stats = JSON.parse(localStorage.stats);
        var highscore = stats.stages[levelNumber].highscore;
        if (highscore == "undefined")
            highscore = 0;
        if (score > highscore) {
            highscore = score;
            stats.stages[levelNumber].highscore = highscore;
            localStorage.stats = JSON.stringify(stats);
        }
    }
};