import Phaser from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import {
  BATTLE_BACKGROUND_ASSET_KEYS,
  MONSTER_ASSET_KEYS,
} from "#constants/asset-keys";
import { HealthBar } from "#ui/health-bar";
import {
  BATTLE_MENU_OPTIONS,
  BATTLE_MENU_TEXT_STYLE,
} from "@app/constants/battle-menu-options";

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
    this.#createMainInfoPane();

    this.add.container(520, 448, [
      this.#createMainInfoSubPane(),
      this.add.text(55, 22, BATTLE_MENU_OPTIONS.FIGHT, BATTLE_MENU_TEXT_STYLE),
      this.add.text(
        240,
        22,
        BATTLE_MENU_OPTIONS.SWITCH,
        BATTLE_MENU_TEXT_STYLE,
      ),
      this.add.text(55, 70, BATTLE_MENU_OPTIONS.ITEM, BATTLE_MENU_TEXT_STYLE),
      this.add.text(240, 70, BATTLE_MENU_OPTIONS.FLEE, BATTLE_MENU_TEXT_STYLE),
    ]);

    this.add.container(0, 448, [
      this.add.text(55, 22, "SLASH", BATTLE_MENU_TEXT_STYLE),
      this.add.text(240, 22, "GROWL", BATTLE_MENU_TEXT_STYLE),
      this.add.text(55, 70, "-", BATTLE_MENU_TEXT_STYLE),
      this.add.text(240, 70, "-", BATTLE_MENU_TEXT_STYLE),
    ]);
  }

  #createMainInfoPane(): void {
    const padding = 4;
    const rectHeight = 124;

    this.add
      .rectangle(
        padding,
        this.scale.height - rectHeight - padding,
        this.scale.width - padding * 2,
        rectHeight,
        0xede4f3,
        1,
      )
      .setOrigin(0)
      .setStrokeStyle(8, 0xe4434a, 1);
  }

  #createMainInfoSubPane() {
    const rectWidth = 500;
    const rectHeight = 124;

    return this.add
      .rectangle(0, 0, rectWidth, rectHeight, 0xede4f3, 1)
      .setOrigin(0)
      .setStrokeStyle(8, 0x905ac2, 1);
  }
}
