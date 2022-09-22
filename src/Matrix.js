import { useEffect, useState } from "react";
import _ from "lodash";

function Matrix({ value: matrix, onChange = () => {}, readOnly }) {
  function handleMatrixChange(i, j, v) {
    if (matrix[i][j] !== v) {
      let temp = [...matrix];
      temp[i][j] = v;
      onChange(temp);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        data-testid="input_table"
      >
        {matrix
          ? matrix.map((r, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "row" }}>
                {r.map((x, j) => (
                  <input
                    key={j}
                    value={x}
                    type="number"
                    onChange={(v) => handleMatrixChange(i, j, v.target.value)}
                    style={{ width: "50px" }}
                    readOnly={readOnly}
                    data-testid="matrix_input"
                  ></input>
                ))}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Matrix;
