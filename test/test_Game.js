/**
 * Created by jorge.guridi on 9/16/16.
 */
var assert = chai.assert;

describe('Game tests', function() {
  it('asserts something', function() {
      var mygame = new Game();
      assert.isFunction(mygame.newShot, 'is function');
  });
});