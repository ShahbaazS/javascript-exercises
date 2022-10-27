const fibonacci = function (num) {
    num = Number(num);
    if (num < 0) return "OOPS";
    if (num <= 2) return 1;
    let first = 1;
    let second = 1;
    let sum = 0;
    for (let index = 2; index < num; index++) {
        sum = first + second;
        first = second;
        second = sum;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
