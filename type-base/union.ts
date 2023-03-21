interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

// 有人仅仅是添加了 `Circle` 类型
// 我们可能希望 TypeScript 能在任何被需要的地方抛出错误
interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s.width * s.height;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}

interface Bar {
  [key: string]: number;
  x: number;
  // @ts-expect-error
  y: string; // Error: y 属性必须为 number 类型
}

const cc: unique symbol = Symbol(2);

interface Bar1 {
  x: number;
  [cc]: string; // Error: y 属性必须为 number 类型
  [key: string]: number;
}
