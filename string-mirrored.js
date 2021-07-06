function stringMirrored(str = "") {
    let strLength = str?.length;
    if (strLength === 0) {
        return "";
    }
    let newStr = "";

    for (let i = 0; i < strLength; i++) {
        newStr += str[strLength - i - 1];
    }
    return newStr;
}
