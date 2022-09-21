import { useEffect, useState } from "react";
import _ from "lodash";

function Matrix({ value: matrix, onChange = () => {}, readOnly }) {
  function handleMatrixChange(i, j, v) {
    if (matrix[i][j] !== v)
      onChange((matrix) => {
        matrix[i][j] = v;
        return [...matrix];
      });
  }

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
