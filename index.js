function wakeDog(dogName, dogBreed) {
    let dogActivity = `Wake ${dogName} the ${dogBreed}`;
    console.log(dogActivity);
    return dogActivity;
}

function leashDog(dogName, dogBreed) {
    let dogActivity = `Leash ${dogName} the ${dogBreed}`;
    console.log(dogActivity);
    return dogActivity;
}

function walkToPark(dogName, dogBreed) {
    let dogActivity = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(dogActivity);
    return dogActivity;
}

function throwFrisbee(dogName, dogBreed) {
    let dogActivity = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(dogActivity);
    return dogActivity;
}

function walkHome(dogName, dogBreed) {
    let dogActivity = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(dogActivity);
    return dogActivity;
}

function unleashDog(dogName, dogBreed) {
    let dogActivity = `Unleash ${dogName} the ${dogBreed}`;
    console.log(dogActivity);
    return dogActivity;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let result = []

    for (let i=0 ; i < routine.length; i++) {
        result.push(routine[i](dogName, dogBreed));
    }
    return result;
}