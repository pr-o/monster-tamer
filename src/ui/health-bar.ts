import Phaser from "phaser";
import {
  BATTLE_ASSET_KEYS,
  HEALTH_BAR_ASSET_KEYS,
} from "#constants/asset-keys";

interface HealthBarConfig {
  scene: Phaser.Scene;
  x: number;
  y: number;
  monsterName: string;
  currentHp: string;
  level: string;
}

export class HealthBar {
  #scene: Phaser.Scene;
  #container: Phaser.GameObjects.Container;

  constructor(config: HealthBarConfig) {
    this.#scene = config.scene;
    this.#container = this.#createContainer(config);
  }

  get container(): Phaser.GameObjects.Container {
    return this.#container;
  }

  #createContainer(config: HealthBarConfig): Phaser.GameObjects.Container {
    const monsterName = this.#scene.add.text(30, 20, config.monsterName, {
      color: "#7E3D3F",
      fontSize: "32px",
    });

    const level = this.#scene.add.text(
      monsterName.width + 35,
      23,
      config.level,
      {
        color: "#ED474B",
        fontSize: "28px",
      },
    );

    const hpLabel = this.#scene.add.text(30, 55, "HP ", {
      color: "#FF6505",
      fontSize: "24px",
      fontStyle: "italic",
    });

    const currentHp = this.#scene.add
      .text(440, 80, config.currentHp, {
        color: "#7E3D3F",
        fontSize: "16px",
      })
      .setOrigin(1, 0);

    return this.#scene.add.container(config.x, config.y, [
      this.#scene.add
        .image(0, 0, BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND)
        .setOrigin(0)
        .setScale(1, 0.8),
      monsterName,
      this.#createBar(34, 34),
      hpLabel,
      level,
      currentHp,
    ]);
  }

  #createBar(x: number, y: number): Phaser.GameObjects.Container {
    const scaleY = 0.7;

    const leftCap = this.#scene.add
      .image(x, y, HEALTH_BAR_ASSET_KEYS.LEFT_CAP)
      .setOrigin(0, 0.5)
      .setScale(1, scaleY);
    const middle = this.#scene.add
      .image(leftCap.x + leftCap.width, y, HEALTH_BAR_ASSET_KEYS.MIDDLE)
      .setOrigin(0, 0.5)
      .setScale(1, scaleY);
    middle.displayWidth = 360;
    const rightCap = this.#scene.add
      .image(middle.x + middle.displayWidth, y, HEALTH_BAR_ASSET_KEYS.RIGHT_CAP)
      .setOrigin(0, 0.5)
      .setScale(1, scaleY);

    return this.#scene.add.container(x, y, [leftCap, middle, rightCap]);
  }
}
