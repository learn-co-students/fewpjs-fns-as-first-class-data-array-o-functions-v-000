function wakeDog(dogName, dogBreed) {
    const actionString = `Wake ${dogName} the ${dogBreed}`;
    console.log(actionString);
    return actionString;
}

function leashDog(dogName, dogBreed) {
    const actionString = `Leash ${dogName} the ${dogBreed}`;
    console.log(actionString);
    return actionString;
}

function walkToPark(dogName, dogBreed) {
    const actionString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(actionString);
    return actionString;
}

function throwFrisbee(dogName, dogBreed) {
    const actionString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(actionString);
    return actionString;
}

function walkHome(dogName, dogBreed) {
    const actionString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(actionString);
    return actionString;
}

function unleashDog(dogName, dogBreed) {
    const actionString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(actionString);
    return actionString;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog(dogName, dogBreed) {
    let returnVals = [];
    for (let i = 0; i < routine.length; i++) {
        let func = routine[i];
        returnVals[i] = func(dogName, dogBreed);
    }
    return returnVals;
}