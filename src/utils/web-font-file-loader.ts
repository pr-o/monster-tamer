import Phaser from "phaser";
import WebFontLoader from "webfontloader";

export class WebFontFileLoader extends Phaser.Loader.File {
  #fontNames: string[];

  constructor(loader: Phaser.Loader.LoaderPlugin, fontNames: string[]) {
    super(loader, {
      type: "webfont",
      key: fontNames.toString(),
    });

    this.#fontNames = fontNames;
  }

  load(): void {
    WebFontLoader.load({
      custom: {
        families: this.#fontNames,
      },
      active: () => {
        this.loader.nextFile(this, true);
      },
      inactive: () => {
        console.error(
          `Failed to load custom fonts ${JSON.stringify(this.#fontNames)}`,
        );
        this.loader.nextFile(this, false);
      },
    });
  }
}
