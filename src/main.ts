import Phaser from "phaser";
import { GameScene } from "#app/scenes/game-scene";
import { PreloadScene } from "#app/scenes/preload-scene";
import { TitleScene } from "#app/scenes/title-scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "app",
  backgroundColor: "#000000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [PreloadScene, TitleScene, GameScene],
};

new Phaser.Game(config);
