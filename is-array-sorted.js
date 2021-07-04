function isArraySorted(arr = []) {
    if (arr instanceof Array) {
        if (arr.length === 0 || arr.length === 1) {
            return true;
        }
        for (let i = 1; i < arr.length; i++) {
            // if previous value is bigger than the next value - array is not sorted
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
