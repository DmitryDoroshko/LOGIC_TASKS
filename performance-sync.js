function checkPerformanceSync(callback) {
    let timeStamp1 = performance.now();
    callback();
    let timeStamp2 = performance.now();
    return timeStamp2 - timeStamp1;
}

function f1() {
    for (let i = 0; i < 100000; i++) {
        let j = i * i;
    }
}

console.log(checkPerformanceSync(f1));
