import "reflect-metadata";
const METHOD_METADATA = "method";
const PATH_METADATA = "path";

const Controller = (path: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(PATH_METADATA, path, target);
  };
};

const createMappingDecorator =
  (method: string) =>
  (path: string): MethodDecorator => {
    return (_target, _key, _descriptor) => {
      Reflect.defineMetadata(PATH_METADATA, path, _target, _key);
      Reflect.defineMetadata(METHOD_METADATA, method, _target, _key);
    };
  };

const Get = createMappingDecorator("GET");
const Post = createMappingDecorator("POST");

@Controller("/test")
class SomeClass {
  @Get("/a")
  someGetMethod() {
    return "hello world";
  }

  @Post("/b")
  somePostMethod() {}
}

function isConstructor(item: string) {
  return item === 'constructor'
}

function isFunction(item: any) {
  return typeof item === "function";
}

function mapRoute(instance: Object) {
  const prototype = Object.getPrototypeOf(instance);

  // 筛选出类的 methodName
  const methodsNames = Object.getOwnPropertyNames(prototype).filter(
    (item) => !isConstructor(item) && isFunction(prototype[item])
  );
  return methodsNames.map((methodName) => {
    const fn = prototype[methodName];

    // 取出定义的 metadata
    const route = Reflect.getMetadata(PATH_METADATA,prototype, methodName);
    const method = Reflect.getMetadata(METHOD_METADATA,prototype, methodName);
    return {
      route,
      method,
      fn,
      methodName,
    };
  });
}

console.log(Reflect.getMetadata(PATH_METADATA, SomeClass)); // '/test'
console.log(Reflect.getMetadata(METHOD_METADATA, new SomeClass(), 'someGetMethod')); // '/test'
console.log(Reflect.getMetadata(PATH_METADATA, new SomeClass(), 'someGetMethod')); // '/test'

console.log(mapRoute(new SomeClass()));
