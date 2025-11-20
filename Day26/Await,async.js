// 4. Async/await data fetching
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Fetched data"), 2000);
    });
}

async function load() {
    let data = await fetchData();
    console.log(data);
}
load();
