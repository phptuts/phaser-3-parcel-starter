console.log('hello world');
import Phaser from 'phaser';
import sceneMain from './sceneMain';
window.game;
window.onload = function() {
  var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: 'phaser-game',
    scene: [sceneMain]
  };

  window.game = new Phaser.Game(config);
};
