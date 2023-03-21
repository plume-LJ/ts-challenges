// function metadata(
//   metadataKey: any,
//   metadataValue: any
// ): {
//   (target: Function): void;
//   (target: Object, propertyKey: string | symbol): void;
// };
import  'reflect-metadata'
@Reflect.metadata('inClass', 'A')
class Test {
  @Reflect.metadata('inMethod', 'B')
  public hello(): string {
    return 'hello world';
  }
}

// console.log(Reflect.getMetadata('inClass', Test)); // 'A'
// console.log(Reflect.getMetadata('inMethod', new Test(), 'hello')); // 'B'

class A {
  @Reflect.metadata('name', 'hello')
  hello() {}
}

const t1 = new A()
const t2 = new A()
console.log(Reflect.defineMetadata('otherName', 'world', t2, 'hello'))
console.log(Reflect.getMetadata('name', t1, 'hello')) // 'hello'
console.log(Reflect.getMetadata('name', t2, 'hello')) // 'hello'
console.log(Reflect.getMetadata('otherName', t2, 'hello')) // 'world'
console.log(Reflect.getMetadata('otherName', t1, 'hello')) // undefined

console.log(Reflect.getOwnMetadata('name', t2, 'hello')) // undefined
console.log(Reflect.getOwnMetadata('otherName', t2, 'hello')) // 'world'

@Reflect.metadata('name', 'A')
class AA {
  @Reflect.metadata('name', 'hello')
  hello() {}
}

const objs = [AA, new AA, AA.prototype]
const res = objs.map(obj => [
  Reflect.getMetadata('name', obj),
  Reflect.getMetadata('name', obj, 'hello'),
  Reflect.getOwnMetadata('name', obj),
  Reflect.getOwnMetadata('name', obj ,'hello')
])

// console.log(res)