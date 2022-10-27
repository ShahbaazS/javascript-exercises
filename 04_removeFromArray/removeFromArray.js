const removeFromArray = function (array, ...remove) {
    for (const item of remove) {
        if (!array.includes(item)) continue;
        array.splice(array.indexOf(item), 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
