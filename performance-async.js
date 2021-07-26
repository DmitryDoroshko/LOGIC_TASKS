async function checkPerformanceAsync(callback) {
    let timeStamp1 = performance.now();
    await callback();
    let timeStamp2 = performance.now();
    return timeStamp2 - timeStamp1;
}

function f1() {
    for (let i = 0; i < 5; i++) {
        let prom = new Promise((resolve, reject) => {
          setTimeout(resolve => console.log("resolved " + i), 1000);
        });
    }
}

console.log(await checkPerformanceAsync(f1));
