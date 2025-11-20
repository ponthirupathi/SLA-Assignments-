// 2. Callback after 3 seconds
function finishTask(callback) {
    setTimeout(() => {
        callback("Task Completed");
    }, 3000);
}
finishTask(msg => console.log(msg));
