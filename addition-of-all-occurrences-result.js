function additionOfAllOccurrencesResult(num = 0) {
    if (num <= 0) {
        return null;
    }
    if (num === 1) {
        return 1;
    }
    return num + additionOfAllOccurrencesResult(num - 1);
}
