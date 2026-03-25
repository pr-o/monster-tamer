import Phaser from "phaser";

export abstract class UiHandler {
  protected scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  abstract show(): void;
  abstract hide(): void;
}
