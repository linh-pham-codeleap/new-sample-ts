const world = 'world';

export function hello(who: string = world): string {
    console.log(who);
    console.log("abc");
  return `Hello ${who}! `;
}

console.log(hello("test"))