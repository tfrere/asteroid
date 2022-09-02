import * as PIXI from "pixi.js";
import * as PixiGraphicsExtras from "@pixi/graphics-extras";

class Stars {
  constructor(game) {
    this.pos = { x: 0, y: 0 };
    this.speed = 0;
    this.graphics = new PIXI.Graphics();
  }

  update(game) {
    this.colors = game.colors;
    this.center = game.center;

    this.graphics.clear();
    this.graphics.lineStyle(2, this.colors.line, 1);
    this.graphics.beginFill(this.colors.background, 1);
    this.graphics.drawEllipse(this.center.x, this.center.y, 60, 60);
    this.graphics.endFill();
  }
}

export default Stars;
