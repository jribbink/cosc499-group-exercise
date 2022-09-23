/* eslint-disable no-loop-func */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
import { createRoot } from "react-dom/client";
import { addMatrix } from "./calculate";
import { subtractMatrix } from "./calculate";

describe("Calculate tests", () => {
  let container, root;
  beforeEach(() => {
    container = document.createElement("div");
    root = createRoot(container);
  });

  test("addition of values", async() => {
    let add1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    let add2 = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ];
    let add3 = addMatrix(add1,add2);
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        expect(add3[i][j]).toEqual(10);
      }
    }
  });

  test("subtraction of values", async() => {
    let sub1 = [
      [10, 14, 10],
      [11, 12, 14],
      [15, 16, 17],
    ];
    let sub2 = [
      [0, 4, 0],
      [1, 2, 4],
      [5, 6, 7],
    ];
    let sub3 = subtractMatrix(sub1,sub2);
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        expect(sub3[i][j]).toEqual(10);
      }
    }
  });

});
