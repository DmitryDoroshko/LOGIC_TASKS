function calc() {
    return this.a + this.b;
}

const obj = {
    a: 4,
    b: 5,
}

const calculate = calc.bind(obj);

console.log(calculate());

