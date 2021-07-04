function meanValueFromArray(arr = []) {
    if (arr instanceof Array) {
        if (arr.length === 0) {
            return null;
        }
        let sumOfArrayElements = 0;
        for (let value of arr) {
            sumOfArrayElements += value;
        }
        return sumOfArrayElements / arr.length;
    }
    return null;
}
