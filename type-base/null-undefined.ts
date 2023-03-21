export {};
let num: number;
// @ts-expect-error
num = null;
// @ts-expect-error
num = undefined;
function log(message: string): void {
  console.log(message);
  let b:never
  // @ts-expect-error
  let a: any = b
  return a
}
num.toString
