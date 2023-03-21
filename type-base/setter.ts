export class Foo {
  a: number | undefined;
  b: number | undefined;
  set bar(value: { a: number; b: number }) {
    this.a = value.a;
    this.b = value.b;
  }
}

let foo = new Foo();