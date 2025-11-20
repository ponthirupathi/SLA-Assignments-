// 10. Closure + Promise + async logging
function asyncCounter() {
    let count = 0;

    return function () {
        count++;
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Updated Count: ${count}`);
            }, 1000);
        });
    };
}

let counterFn = asyncCounter();

counterFn().then(console.log);
counterFn().then(console.log);
counterFn().then(console.log);
