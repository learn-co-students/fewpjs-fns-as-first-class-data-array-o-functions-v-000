let wakeDog = function(dogName, dogBreed) {
    const string = `Wake ${dogName} the ${dogBreed}`;
    return string
}

let leashDog = function(dogName, dogBreed) {
    const string = `Leash ${dogName} the ${dogBreed}`;
    return string 
}

let walkToPark = function(dogName, dogBreed) {
    const string = `Walk to the park with ${dogName} the ${dogBreed}`;
    return string 
}

let throwFrisbee = function(dogName, dogBreed) {
    const string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return string 
}

let walkHome = function(dogName, dogBreed) {
    const string = `Walk home with ${dogName} the ${dogBreed}`
    return string
}

let unleashDog = function(dogName, dogBreed) {
    const string = `Unleash ${dogName} the ${dogBreed}`
    return string
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName,dogBreed) {
    return routine.map(formula => formula(dogName, dogBreed))
}

