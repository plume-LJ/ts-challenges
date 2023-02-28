type PromiseType<T> = (args: any[]) => Promise<T>;

type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;

async function stringPromise() {
  return "string promise";
}

async function numberPromise() {
  return 1;
}

interface Person {
  name: string;
  age: number;
}

async function personPromise() {
  return { name: "Wayou", age: 999 } as Person;
}

type extractStringPromise = UnPromisify<typeof stringPromise>; // string

type extractNumberPromise = UnPromisify<typeof numberPromise>; // number

type extractPersonPromise = UnPromisify<typeof personPromise>; // Person