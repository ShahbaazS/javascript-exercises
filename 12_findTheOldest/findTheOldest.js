const findTheOldest = function (people) {
    return people.reduce((oldest, newPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const newAge = getAge(newPerson.yearOfBirth, newPerson.yearOfDeath);

        return oldestAge > newAge ? oldest : newPerson;
    })

    // const oldest = people.sort((a, b) => {
    //     let aAge = 0;
    //     let bAge = 0;
    //     if (!a.yearOfDeath) {
    //         aAge = new Date().getFullYear() - a.yearOfBirth;
    //     } else {
    //         aAge = a.yearOfDeath - a.yearOfBirth;
    //     }

    //     if (!b.yearOfDeath) {
    //         bAge = new Date().getFullYear() - b.yearOfBirth;
    //     } else {
    //         bAge = b.yearOfDeath - b.yearOfBirth;
    //     }

    //     return aAge > bAge ? -1 : 1;
    // })
    // return oldest[0];
};

const getAge = function (birthYear, deathYear = new Date().getFullYear()) {
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
