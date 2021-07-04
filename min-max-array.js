function minMaxArray(arr = []) {
    let min = null;
    let max = null;

    if (arr instanceof Array) {
        if (arr.length === 0) {
            return { min, max };
        }

        min = arr[0];
        max = arr[0];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= min) {
                min = arr[i];
            }
            if (arr[i] >= max) {
                max = arr[i];
            }
        }
     }
    return { min , max };
}

