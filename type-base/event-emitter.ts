import { EventEmitter } from "events";
const emitter = new EventEmitter();

// Listen
emitter.on("foo", (foo: any) => console.log(foo));
emitter.on("bar", (bar: any) => console.log(bar));

// Emit
emitter.emit("foo", {foo:2});
emitter.emit("bar", {ba:2});
export interface Listener<T> {
  (event: T): any;
}
export interface Disposable {
  dispose(): any;
}
export class TypedEvent<T> {
  private listeners: Listener<T>[] = [];
  private listenersOncer: Listener<T>[] = [];
  public on = (listener: Listener<T>): Disposable => {
    this.listeners.push(listener);
    return {
      dispose: () => this.off(listener)
    };
  };
  public once = (listener: Listener<T>): void => {
    this.listenersOncer.push(listener);
  };
  public off = (listener: Listener<T>) => {
    const callbackIndex = this.listeners.indexOf(listener);
    if (callbackIndex > -1) this.listeners.splice(callbackIndex, 1);
  };
  public emit = (event: T) => {
    this.listeners.forEach(listener => listener(event));
    this.listenersOncer.forEach(listener => listener(event));
    this.listenersOncer = [];
  };
  public pipe = (te: TypedEvent<T>): Disposable => {
    return this.on(e => te.emit(e));
  };
}
interface Foo {
  foo: 2
}
interface Bar {
  bar: 2
}
const onFoo = new TypedEvent<Foo>();
const onBar = new TypedEvent<Bar>();
// Listen:
onFoo.on(foo => console.log(foo));
onBar.on(bar => console.log(bar));

// Emit:
onFoo.emit({foo: 2});
onBar.emit({bar: 2});


export {}