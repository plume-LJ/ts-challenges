type ClassPublicKeys<T> = keyof T;
/**
 * In typescript, when you wrote a class A, you defined two types in its type system:
 * A is the type of the instance of class A
 * typeof A is the type of the class object, sayclass A
 */
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

class A {
  public str: string;
  protected num: number;
  private bool: boolean;
  constructor() {
    this.str = "naive";
    this.num = 19260917;
    this.bool = true;
  }

  getNum() {
    return Math.random();
  }
}

type c = typeof A;
type d = InstanceType<c> ;

type cases = [Expect<Equal<ClassPublicKeys<A>, "str" | "getNum">>];
