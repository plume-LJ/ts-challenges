export {};
let foo = (_x: number, _y: number) => {};
let bar = (_x?: number, _y?: number) => {};
let bas = (..._args: number[]) => {};
// @ts-expect-error
foo = bar = bas;
// @ts-expect-error
bas = bar = foo;
// 事件等级
interface Event {
  timestamp: number;
}
interface MouseEvent extends Event {
  x: number;
  y: number;
}
interface KeyEvent extends Event {
  keyCode: number;
}

// 简单的事件监听
enum EventType {
  Mouse,
  Keyboard,
}
function addEventListener(_eventType: EventType, _handler: (n: Event) => void) {
  // ...
}
// @ts-expect-error

// 不安全，但是有用，常见。函数参数的比较是双向协变。
addEventListener(EventType.Mouse, (e: MouseEvent) =>
  console.log(e.x + "," + e.y)
);

// 在安全情景下的一种不好方案
addEventListener(EventType.Mouse, (e: Event) =>
  console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y)
);
addEventListener(EventType.Mouse, <(e: Event) => void>(
  ((e: MouseEvent) => console.log(e.x + "," + e.y))
));
// @ts-expect-error

// 仍然不允许明确的错误，对完全不兼容的类型会强制检查
addEventListener(EventType.Mouse, (e: number) => console.log(e));

interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

let iTakePoint2D = (_point: Point2D) => {};
let iTakePoint3D = (_point: Point3D) => {};

iTakePoint3D = iTakePoint2D; // ok, 这是合理的
// @ts-expect-error
iTakePoint2D = iTakePoint3D; // ok，为什么？
namespace ss {
  class Animal {
    protected feet: number | undefined;
  }
  class Cat extends Animal {}

  let animal: Animal = new Animal();
  let cat: Cat = new Cat();

  animal = cat; // ok
  cat = animal; // ok

  class Size {
    protected feet: number | undefined;
  }

  let size: Size;

  // @ts-expect-error
  animal = size; // ERROR
  // @ts-expect-error
  size = animal; // ERROR
}

class Animal {
  constructor(public name: string) {}
}
class Cat extends Animal {
  meow() {
    console.log("cat");
  }
}

let animal = new Animal("animal");
let cat = new Cat("cat");

// 多态
// Animal <= Cat

animal = cat; // ok
// @ts-expect-error
cat = animal; // ERROR: cat 继承于 animal

// 演示每个数组形式
let animalArr: Animal[] = [animal];
let catArr: Cat[] = [cat];

// 明显的坏处，逆变
// Animal <= Cat
// Animal[] >= Cat[]
  // @ts-expect-error
  catArr = animalArr; // ok, 如有有逆变
catArr[0]?.meow(); // 允许，但是会在运行时报错

// 另外一个坏处，协变
// Animal <= Cat
// Animal[] <= Cat[]
animalArr = catArr; // ok，协变

animalArr.push(new Animal("another animal")); // 仅仅是 push 一个 animal 至 carArr 里
catArr.forEach((c) => c.meow()); // 允许，但是会在运行时报错。
