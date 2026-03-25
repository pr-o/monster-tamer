import Phaser from "phaser";

export class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "TitleScene" });
  }

  create(): void {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2, "Monster Tamer", {
        fontSize: "48px",
        color: "#ffffff",
      })
      .setOrigin(0.5);
  }
}
