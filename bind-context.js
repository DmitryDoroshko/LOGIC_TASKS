function calc() {
    return this.a + this.b;
}

const obj = {
    a: 4,
    b: 5,
}

console.log(calc.call(obj));

