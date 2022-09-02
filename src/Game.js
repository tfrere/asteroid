import * as PIXI from "pixi.js";
import * as PixiGraphicsExtras from "@pixi/graphics-extras";

import Player from "./Player";

class Game {
  constructor(canvasElem) {
    this.screen = { width: window.innerWidth, height: window.innerHeight };
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.activeState = "game";
    this.colors = {
      background: 0x1099bb,
      line: 0xffffff
    };
    this.score = 0;
    this.canvas = canvasElem;

    this.player = new Player(this);

    this.init();

    window.addEventListener("resize", this.onWindowResize.bind(this), false);
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
  }

  // EVENTS

  onMouseMove() {}

  onWindowResize() {
    this.screen.width = window.innerWidth;
    this.screen.height = window.innerHeight;

    this.renderer.resize(this.screen.width, this.screen.height);
  }

  // ACCESSORS

  get center() {
    return { x: this.screen.width / 2, y: this.screen.height / 2 };
  }

  // INIT

  init() {
    this.renderer = new PIXI.autoDetectRenderer({
      backgroundColor: 0x1099bb,
      antialias: true
    });
    this.renderer.resize(this.screen.width, this.screen.height);

    this.canvas.appendChild(this.renderer.view);
    this.container = new PIXI.Container();
    this.container.addChild(this.player.graphics);

    this.animate();
  }

  // initEnnemy() {
  //   this.ennemy.beginFill(this.colors.background);
  //   this.ennemy.lineStyle(2, this.colors.line, 1);
  //   this.ennemy.moveTo(0, 0);
  //   this.ennemy.lineTo(50, 25);
  //   this.ennemy.lineTo(0, 50);
  //   this.ennemy.lineTo(10, 25);
  //   this.ennemy.closePath();
  //   this.ennemy.endFill();
  // }

  // ANIMATE

  animate() {
    this.player.update(this);
    this.renderer.render(this.container);

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default Game;
