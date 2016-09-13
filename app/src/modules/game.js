/**
 * Keeps track of player's throws and scoring
 * @class Game
 */
var Game = function (max) {
  var currentScore = 0;
  var maxFrames = max || 10;
  var frames = [];
  var currentFrame = 1;
  var stack = [];

  for (var i = 0; i < maxFrames; i++) {
    var shots;
    shots = {1:'', 2:''};
    if (i == maxFrames - 1) {
      shots = {1:'', 2:'', 3:''};
    }
    frames.push({
      number: i + 1,
      shots: shots,
      score: 0,
      cumScore: 0
    });
  }

  /**
   * Returns the current score for user
   * @returns {number}
   */
  this.getCurrentScore = function() {
    return currentScore;
  };

  /**
   * Every new shot in the game is registerd
   * @param {mixed} shot
   */
  this.newShot = function(shot) {
    var frame;
    if (!isNaN(shot) && (shot >= 0 && shot <= 9)){
      currentScore += parseInt(shot);
      if (frames[currentFrame].shot1 === '') {
        frames[currentFrame].shot1 = shot;
        frames[currentFrame].score = parseInt(shot);
      }
      else if (frames[currentFrame].shot2 === '') {
        frames[currentFrame].shot2 = shot;
        frames[currentFrame].score += parseInt(shot);
      }
    }
  };


  var calculateScore = function()
  {
    if (stack.length > 0) {

    }
  };


  var getCurrentFrame = function() {

  };

  /**
   * Get the frames with their respective values
   * @returns {Array}
   */
  this.getFrames = function(){
    return frames;
  };
};
