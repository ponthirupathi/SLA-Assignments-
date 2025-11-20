// 6. Rest operator
function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sum(10, 20, 30));
