// import dotenv from "dotenv";
import { of, map, tap, take } from "rxjs";
// dotenv.config();

// console.log("Hello Typescript ", process.env.SERVER);

const arr: number[] = [1, 2, 3];

console.log("of Operator");

of(...arr).pipe(
  tap(console.log),
  map(item => item * 2),
  take(2)

).subscribe(console.log);







