// 3. Convert callback to Promise
function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 2000);
}

function getDataPromise() {
    return new Promise(resolve => {
        getData(result => resolve(result));
    });
}

getDataPromise().then(res => console.log(res));
