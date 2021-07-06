const createConcat = () => {
    let concatString = '';

    return (string = null) => {
        if (string === null) return concatString;
        concatString += string;
    }
}
const concat = createConcat();
а
