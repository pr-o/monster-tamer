import Phaser from "phaser";
import { PreloadScene } from "#scenes/preload-scene";
import { SCENE_KEYS } from "#scenes/scene-keys";
import { BattleScene } from "#scenes/battle-scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  pixelArt: false,
  width: 1024,
  height: 576,
  parent: "app",
  backgroundColor: "#000000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

game.scene.add(SCENE_KEYS.PRELOAD_SCENE, PreloadScene);
game.scene.add(SCENE_KEYS.BATTLE_SCENE, BattleScene);

game.scene.start(SCENE_KEYS.PRELOAD_SCENE);
