/**
 * Created by Janne on 11.11.2014.
 */

var Events = {
    _hashTriggerPlayerDies : "ei00dtn4put2zkt9",
    _hashCheckPlayerDeaths : "99xm7kmwpxim5cdi",
    _hashTriggerGameOver : "0o1nodsdl6315rk9",
    _hashCheckPlayerGameOvers : "wmiiy720dal15rk9",
    _hashTriggerStartNewGame : "glf740icj7x5stt9",
    _hashTriggerNewLevel : "0uo8lvcx7dlpu8fr",

    _gainAchievementHashes : {
        "newPlayer" : "xpzu7z6vlfim5cdi",
        "destroyFirstAsteroid" : "tckj68ft636561or",
        "score1000Points" : "m93jz2qd9sdlhaor",
        "10GamesInARow" : "4ufxcmhu5d1pds4i",
        "idler" : "d8sgdux7otdfgvi"
    },

    _askAschievementHashes : {
        newPlayer : "txiz7jzpz8jv2t9",
        destroyFirstAsteroid : "8dgu0jurtlqh0k9",
        score1000Points : "xume0dtx7tsrwwmi",
        "10GamesInARow" : "rmjehzogj4p4aemi",
        idler : "nnjcn5j0e3lerk9"
    },

    /**
     * Event fired when triggering player death event
     * @param {String} playerId The id of the player in question
     * @param {String} characterId The id of the character in question
     * @constructor
     */
    TriggerDeath : function(playerId, characterId) {

        // Send the trigger event to backend
        triggersEvent("nokey", this._hashTriggerPlayerDies, playerId, characterId);

    },

    giveAchievement : function(achievementName) {
        var achievement = this._gainAchievementHashes[achievementName];
        if(!achievement) {
            throw new Error("Now achievement exists with name:", achievementName);
        }
        Gamecloud.giveAchievement("NOAUTH", this._gainAchievementHashes[achievementName], Gamecloud.getUserId(), Gamecloud.getCharacterId());
    },

    checkOwnedAchievementFromGamecloud : function(playerId) {
        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes.newPlayer, playerId, function (err, result) {
            if (err) {
                throw err;
            }
            console.log("--RESULTS FROM GAMECLOUD: <newPlayer>", result);
            // We have some results
            if(result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("newPlayer");
            }

        });
        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes.destroyFirstAsteroid, playerId, function (err, result) {
            if (err) {
                throw err;
            }
            // We have some results
            console.log("--RESULTS FROM GAMECLOUD: <destroyFirstAsteroid>", result);
            if(result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("destroyFirstAsteroid");
            }
        });
        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes.score1000Points, playerId, function (err, result) {
            if (err) {
                throw err;
            }
            // We have some results
            console.log("--RESULTS FROM GAMECLOUD: <score1000Points>", result);
            if(result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("score1000Points");
            }
        });
        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes["10GamesInARow"], playerId, function (err, result) {
            if (err) {
                throw err;
            }
            // We have some results
            console.log("--RESULTS FROM GAMECLOUD: <10GamesInARow>", result);
            if(result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("10GamesInARow");
            }
        });
        Gamecloud.hasAchievement("NOAUTH", this._askAschievementHashes.idler, playerId, function (err, result) {
            if (err) {
                throw err;
            }
            // We have some results
            console.log("--RESULTS FROM GAMECLOUD: <idler>", result);
            if(result.count > 0) {
                // Set the achievement owned already
                Achievements.addAchievementToOwned("idler");
            }
        });
    }
};


