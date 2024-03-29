// Compile with --noImplicitThis
export {};
type Point = {
  x: number;
  y: number;
  moveBy(dx: number, dy: number): void;
};

let p: Point = {
  x: 10,
  y: 20,
  moveBy(dx, dy) {
    this.x += dx; // this has type Point
    this.y += dy; // this has type Point
  },
};

let foo = {
  x: "hello",
  f(_n: number) {
    this; // { x: string, f(n: number): void }
  },
};

let bar = {
  x: "hello",
  f(this: { message: string }) {
    this; // { message: string }
  },
};
let obj: typeof foo = {} as typeof foo;
obj.f = function (n) {
  // @ts-expect-error
  return this.x - n; // 'this' has same type as 'obj'
};

obj["f"] = function (n) {
  // @ts-expect-error
  return this.x - n; // 'this' has same type as 'obj'
};

// Compile with --noImplicitThis
namespace ss {
  type ObjectDescriptor<D, M> = {
    data?: D;
    methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
  };

  function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
    let data: object = desc.data || {};
    let methods: object = desc.methods || {};
    return { ...data, ...methods } as D & M;
  }

  let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
      moveBy(dx: number, dy: number) {
        this.x += dx; // Strongly typed this
        this.y += dy; // Strongly typed this
      },
    },
  });

  obj.x = 10;
  obj.y = 20;
  obj.moveBy(5, 5);
}
