function fibonacci(num) {
    let resultado = [];
    let a = 1, b = 1;
    for (let i = 0; i < num; i++) {
      resultado.push(a);
      let temp = a;
      a = b;
      b += temp;
    }
    return resultado;
  }