import Phaser from "phaser";
import { SCENE_KEYS } from "./scene-keys";
import {
  BATTLE_ASSET_KEYS,
  BATTLE_BACKGROUND_ASSET_KEYS,
  HEALTH_BAR_ASSET_KEYS,
  MONSTER_ASSET_KEYS,
} from "#constants/asset-keys";
import { WebFontFileLoader } from "@app/utils/web-font-file-loader";
import { KENNEY_FUTURE_NARROW_FONT_NAME } from "@app/constants/font-keys";

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_KEYS.PRELOAD_SCENE });
  }

  init() {
    // console.log("init");
  }

  preload(): void {
    const monsterTamerAssetPath = "assets/images/monster-tamer";
    const kenneysAssetPath = "assets/images/kenneys-assets";

    // load custom fonts
    this.load.addFile(
      new WebFontFileLoader(this.load, [KENNEY_FUTURE_NARROW_FONT_NAME]),
    );

    // battle backgrounds
    this.load.image(
      BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
      `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`,
    );

    // battle assets
    this.load.image(
      BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
      `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`,
    );

    // health bar assets
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`,
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.MIDDLE,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`,
    );
    this.load.image(
      HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
      `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`,
    );

    // monster assets
    this.load.image(
      MONSTER_ASSET_KEYS.CARNODUSK,
      `${monsterTamerAssetPath}/monsters/carnodusk.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.IGUANIGNITE,
      `${monsterTamerAssetPath}/monsters/iguanignite.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.AQUAVALOR,
      `${monsterTamerAssetPath}/monsters/aquavalor.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.FROSTSABER,
      `${monsterTamerAssetPath}/monsters/frostsaber.png`,
    );
    this.load.image(
      MONSTER_ASSET_KEYS.IGNIVOLT,
      `${monsterTamerAssetPath}/monsters/ignivolt.png`,
    );
  }

  create(): void {
    this.scene.start(SCENE_KEYS.BATTLE_SCENE);
  }
}
