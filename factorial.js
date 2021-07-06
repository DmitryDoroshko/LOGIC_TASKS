function factorial(num = 0) {
    if (num < 0) {
        return null;
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
