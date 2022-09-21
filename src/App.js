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
    // fallback to empty value for C
    let res = [
      [[], [], []],
      [[], [], []],
      [[], [], []],
    ];

    try {
      const mapNumber = (m) => m.map((r) => r.map((x) => Number(x)));
      let _a = mapNumber(a);
      let _b = mapNumber(b);

      switch (op) {
        case "+":
          res = addMatrix(_a, _b);
          break;
        case "-":
          res = subtractMatrix(_a, _b);
          break;
        case "x":
          res = multiplyMatrix(_a, _b);
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
