const createConcat = () => {
    let concatString = '';

    return (string = null) => {
        if (string === null) return concatString;
        concatString += string;
    }
}
const concat = createConcat();

concat('test string 1');
concat('test2');
concat('finish');
console.log(concat());
