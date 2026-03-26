import Phaser from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import {
  BATTLE_BACKGROUND_ASSET_KEYS,
  MONSTER_ASSET_KEYS,
} from "#constants/asset-keys";
import { HealthBar } from "#ui/health-bar";
import { BattleMenu } from "#ui/battle-menu";

export class BattleScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.BATTLE_SCENE });
  }

  create(): void {
    // main background
    this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);

    // render out the player and enemy monsters
    this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
    this.add.image(200, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true);

    // render out health bars
    new HealthBar({
      scene: this,
      x: 0,
      y: 0,
      monsterName: MONSTER_ASSET_KEYS.CARNODUSK,
      currentHp: "25/25",
      level: "L5",
    });

    new HealthBar({
      scene: this,
      x: 556,
      y: 318,
      monsterName: MONSTER_ASSET_KEYS.IGUANIGNITE,
      currentHp: "25/25",
      level: "L5",
    });

    // render out the main info and sub info panes
    new BattleMenu(this);
  }
}
