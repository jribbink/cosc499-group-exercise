import _ from "lodash";
import { useEffect, useState } from "react";
import { addMatrix, multiplyMatrix, subtractMatrix } from "./calculate";
import Matrix from "./Matrix";

function App() {
  const [a, setA] = useState([
    [[0], [0], [0]],
    [[0], [0], [0]],
    [[0], [0], [0]],
  ]);

  const [b, setB] = useState([
    [[0], [0], [0]],
    [[0], [0], [0]],
    [[0], [0], [0]],
  ]);

  const [c, setC] = useState([
    [[0], [0], [0]],
    [[0], [0], [0]],
    [[0], [0], [0]],
  ]);

  const [op, setOp] = useState("x");

  useEffect(() => {
    let res;
    try {
      switch (op) {
        case "+":
          res = addMatrix(a, b);
          break;
        case "-":
          res = subtractMatrix(a, b);
          break;
        case "x":
          res = multiplyMatrix(a, b);
          break;
        default:
          return;
      }
    } catch {}
    setC(res);
  }, [a, b, op]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <Matrix value={a} onChange={setA}></Matrix>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <select value={op} onChange={(e) => setOp(e.target.value)}>
            <option value="x">x</option>
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
        </div>
        <Matrix value={b} onChange={setB}></Matrix>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          =
        </div>
        <Matrix value={c} readOnly={true}></Matrix>
      </div>
    </div>
  );
}

export default App;
