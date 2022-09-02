// tslint:disable:no-bitwise
const WORD_SIZE = 32;

export class KeyPoll {
  constructor() {
    this.keys = new Int32Array(4);

    window.addEventListener("keyup", this.keyUpHandler);
    window.addEventListener("keydown", this.keyDownHandler);
  }

  isDown(key) {
    const i = Math.floor(key / WORD_SIZE);
    return (this.keys[i] & (1 << (key - i * WORD_SIZE))) !== 0;
  }

  isUp(key) {
    return !this.isDown(key);
  }

  keyDownHandler(event) {
    const { keyCode } = event;
    const index = Math.floor(keyCode / WORD_SIZE);
    this.keys[index] |= 1 << (keyCode - index * WORD_SIZE);
  }

  keyUpHandler(event) {
    const { keyCode } = event;
    const index = Math.floor(keyCode / WORD_SIZE);
    this.keys[index] &= ~(1 << (keyCode - index * WORD_SIZE));
  }
}
