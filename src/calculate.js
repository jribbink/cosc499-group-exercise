export function addMatrix(a, b) {
  if (a.length !== b.length || a[0].length !== b[0].length) {
    throw new Error("Matrices are different dimensions");
  }

  let c = [];
  for (let i = 0; i < a.length; i++) {
    let r = [];
    for (let j = 0; j < a[0].length; j++) {
      r.push(a[i][j] + b[i][j]);
    }
    c.push(r);
  }
  return c;
}

export function subtractMatrix(a, b) {
  return addMatrix(a,b.map((r) => r.map((v) => -v)));
}

export function multiplyMatrix(a, b) {
  return null;
}
