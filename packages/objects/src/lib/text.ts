import { Carobj } from "./carobj";
import { IPositionedMut } from "../interfaces/Positioned";
import { ITextEditable } from "../interfaces/TextEditable";
import { type carobject } from "./carobj";

export type textobject = {
  text: string;
  x: number;
  y: number;
  size?: number;
  color?: string;
  fontFamily?: string;
  align?: CanvasTextAlign;
  baseline?: CanvasTextBaseline;
};

export class Text extends Carobj implements ITextEditable, IPositionedMut {
  #text: string;
  #size: number;
  #color: string;
  #fontFamily = "sans-serif";
  #align: CanvasTextAlign = "start";
  #baseline: CanvasTextBaseline = "middle";
  constructor(datas: textobject & carobject) {
    super(datas);
    this.#text = datas.text;
    this.x = datas.x;
    this.y = datas.y;
    typeof datas.size === "undefined" ? (this.#size = 10) : (this.#size = datas.size);
    typeof datas.color === "undefined" ? (this.#color = "black") : (this.#color = datas.color);
    if (typeof datas.fontFamily !== "undefined") this.fontFamily = datas.fontFamily;
    if (typeof datas.align !== "undefined") this.#align = datas.align;
    if (typeof datas.baseline !== "undefined") this.#baseline = datas.baseline;
  }

  override onDraw(ctx: CanvasRenderingContext2D) {
    super.onDraw(ctx);
    ctx.font = `${this.#size}px ${this.#fontFamily}`;
    // console.log(this.#size, this.#fontFamily);
    // console.log(`${this.#size}px ${this.#fontFamily}`);
    ctx.textAlign = this.#align;
    ctx.textBaseline = this.#baseline;
    ctx.fillStyle = this.#color;
    ctx.fillText(this.#text, 0, 0);
    return ctx;
  }

  get color() {
    return this.#color;
  }

  set color(value: string) {
    this.#color = value;
  }

  get fontFamily() {
    return this.#fontFamily;
  }

  set fontFamily(value: string) {
    this.#fontFamily = value;
  }

  get align() {
    return this.#align;
  }

  set align(value: CanvasTextAlign) {
    this.#align = value;
  }

  get baseline() {
    return this.#baseline;
  }

  set baseline(value: CanvasTextBaseline) {
    this.#baseline = value;
  }

  get text() {
    return this.#text;
  }

  set text(value) {
    this.#text = value;
  }

  get size() {
    return this.#size;
  }

  set size(value: number) {
    this.#size = value;
  }

  get sigh() {
    return "Text";
  }
}
