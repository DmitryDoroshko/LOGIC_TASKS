const obj = {
    a: 4,
    b: 5,
}

const calc = () => {
    return this.a + this.b;
}

console.log(calc.call(obj));

