const palindromes = function (word) {
    const newWord = word.toLowerCase().replace(/[\p{P}\p{S}\s]/gu, '');
    let end = newWord.length - 1;

    for (let start = 0; start < newWord.length; start++) {
        if (newWord.charAt(start) !== newWord.charAt(end)) return false;
        end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
