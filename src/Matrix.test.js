/* eslint-disable no-loop-func */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-node-access */
import React from "react";
import { createRoot } from "react-dom/client";
import { act, fireEvent } from "@testing-library/react";
import { Matrix } from "./Matrix"

describe("Matrix tests", () => {
  let container, root;
  beforeEach(() => {
    container = document.createElement("div");
    root = createRoot(container);
  });

  test("matrix created with n x m (1 <= n <= 5, 1 <= m <= 5) cells", async () => {
    for (let n = 1; n < 5; n++) {
      for (let m = 1; m < 5; m++) {
        let matrix = [];
        for (let j = 0; j < n; j++) {
          let row = [];
          for (let k = 0; k < m; k++) row.push(row);
          matrix.push(row);
        }

        act(() => {
          root.render(<Matrix value={matrix}></Matrix>);
        });
        const table = container.children[0].children[0];
        expect(table.children.length).toBe(matrix.length);
        [...table.children].forEach((child, i) => {
          expect(child.children.length).toBe(matrix[i].length);
        });
      }
    }
  });

  test("input updates matrix value", async () => {
    let matrix = [
      [0, 0],
      [0, 0],
    ];

    let onChangeHandler;
    let onChange = (v) => {
      if (onChangeHandler) onChangeHandler(v);
    };

    act(() => {
      root.render(<Matrix value={matrix} onChange={onChange}></Matrix>);
    });
    const table = container.children[0].children[0];

    let i = 1,
      j = 0,
      v = "123";

    const newValue = await new Promise((resolve) => {
      onChangeHandler = resolve;
      fireEvent.change(table.children[i].children[j], {
        target: { value: "123" },
      });
    });

    expect(newValue[i][j]).toEqual(v);
  });

});
