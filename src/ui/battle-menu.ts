import Phaser from "phaser";
import { MONSTER_ASSET_KEYS } from "#constants/asset-keys";
import {
  BATTLE_MENU_OPTIONS,
  BATTLE_MENU_TEXT_STYLE,
} from "#constants/battle-menu-options";

export class BattleMenu {
  #scene: Phaser.Scene;
  #mainInfoTextContainerGameObjects: Phaser.GameObjects.Text[];
  #battleMenuPaneContainerGameObject: Phaser.GameObjects.Container;
  #moveSelectContainerGameObject: Phaser.GameObjects.Container;

  constructor(scene: Phaser.Scene) {
    this.#scene = scene;
    this.#createMainInfoPane();
    this.#moveSelectContainerGameObject = this.#createMoveSelectSubPane();
    this.#mainInfoTextContainerGameObjects =
      this.#createMainInfoTextGameObjects();
    this.#battleMenuPaneContainerGameObject = this.#createBattleMenuPane();
  }

  showBattleMenu(): void {
    // TODO: monster name will be passed in dynamically in a future episode
    this.#mainInfoTextContainerGameObjects[0].setText("what should");
    this.#mainInfoTextContainerGameObjects[1].setText(
      `${MONSTER_ASSET_KEYS.IGUANIGNITE} do next?`,
    );
    this.#mainInfoTextContainerGameObjects[0].setAlpha(1);
    this.#mainInfoTextContainerGameObjects[1].setAlpha(1);
    this.#battleMenuPaneContainerGameObject.setAlpha(1);
  }

  hideBattleMenu(): void {
    this.#mainInfoTextContainerGameObjects[0].setAlpha(0);
    this.#mainInfoTextContainerGameObjects[1].setAlpha(0);
    this.#battleMenuPaneContainerGameObject.setAlpha(0);
  }

  showMoveSelectSubPane(): void {
    this.#moveSelectContainerGameObject.setAlpha(1);
  }

  hideMoveSelectSubPane(): void {
    this.#moveSelectContainerGameObject.setAlpha(0);
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

  #createMainInfoTextGameObjects(): Phaser.GameObjects.Text[] {
    // Positioned at the same relative offsets as the move/battle menu buttons
    // so they align with the left half of the info pane
    const infoAreaY = this.#scene.scale.height - 124 - 4; // top of info pane
    const line1 = this.#scene.add
      .text(55, infoAreaY + 22, "", BATTLE_MENU_TEXT_STYLE)
      .setAlpha(0);
    const line2 = this.#scene.add
      .text(55, infoAreaY + 70, "", BATTLE_MENU_TEXT_STYLE)
      .setAlpha(0);
    return [line1, line2];
  }

  #createBattleMenuPane(): Phaser.GameObjects.Container {
    return this.#scene.add
      .container(520, 448, [
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
      ])
      .setAlpha(0);
  }

  #createMoveSelectSubPane(): Phaser.GameObjects.Container {
    return this.#scene.add
      .container(0, 448, [
        this.#scene.add.text(55, 22, "slash", BATTLE_MENU_TEXT_STYLE),
        this.#scene.add.text(240, 22, "growl", BATTLE_MENU_TEXT_STYLE),
        this.#scene.add.text(55, 70, "-", BATTLE_MENU_TEXT_STYLE),
        this.#scene.add.text(240, 70, "-", BATTLE_MENU_TEXT_STYLE),
      ])
      .setAlpha(0);
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
