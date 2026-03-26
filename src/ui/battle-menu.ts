import Phaser from "phaser";
import {
  BATTLE_MENU_OPTIONS,
  BATTLE_MENU_TEXT_STYLE,
} from "#constants/battle-menu-options";

export class BattleMenu {
  #scene: Phaser.Scene;
  #battleMenuPaneContainerGameObject: Phaser.GameObjects.Container;

  constructor(scene: Phaser.Scene) {
    this.#scene = scene;
    this.#createMainInfoPane();
    this.#battleMenuPaneContainerGameObject = this.#scene.add.container(
      520,
      448,
      [
        this.#createMainInfoSubPane(),
        this.#scene.add.text(
          55,
          22,
          BATTLE_MENU_OPTIONS.FIGHT,
          BATTLE_MENU_TEXT_STYLE,
        ),
        this.#scene.add.text(
          240,
          22,
          BATTLE_MENU_OPTIONS.SWITCH,
          BATTLE_MENU_TEXT_STYLE,
        ),
        this.#scene.add.text(
          55,
          70,
          BATTLE_MENU_OPTIONS.ITEM,
          BATTLE_MENU_TEXT_STYLE,
        ),
        this.#scene.add.text(
          240,
          70,
          BATTLE_MENU_OPTIONS.FLEE,
          BATTLE_MENU_TEXT_STYLE,
        ),
      ],
    );

    this.#scene.add.container(0, 448, [
      this.#scene.add.text(55, 22, "SLASH", BATTLE_MENU_TEXT_STYLE),
      this.#scene.add.text(240, 22, "GROWL", BATTLE_MENU_TEXT_STYLE),
      this.#scene.add.text(55, 70, "-", BATTLE_MENU_TEXT_STYLE),
      this.#scene.add.text(240, 70, "-", BATTLE_MENU_TEXT_STYLE),
    ]);
  }

  showBattleMenu(): void {
    this.#battleMenuPaneContainerGameObject.setAlpha(1);
  }

  hideBattleMenu(): void {
    this.#battleMenuPaneContainerGameObject.setAlpha(0);
  }

  #createMainInfoPane(): void {
    const padding = 4;
    const rectHeight = 124;

    this.#scene.add
      .rectangle(
        padding,
        this.#scene.scale.height - rectHeight - padding,
        this.#scene.scale.width - padding * 2,
        rectHeight,
        0xede4f3,
        1,
      )
      .setOrigin(0)
      .setStrokeStyle(8, 0xe4434a, 1);
  }

  #createMainInfoSubPane(): Phaser.GameObjects.Rectangle {
    const rectWidth = 500;
    const rectHeight = 124;

    return this.#scene.add
      .rectangle(0, 0, rectWidth, rectHeight, 0xede4f3, 1)
      .setOrigin(0)
      .setStrokeStyle(8, 0x905ac2, 1);
  }
}
