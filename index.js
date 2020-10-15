function wakeDog(dogName, dogBreed) {
    return(`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName, dogBreed) {
    return(`Leash ${dogName} the ${dogBreed}`);
}
function walkToPark(dogName, dogBreed) {
    return(`Walk to the park with ${dogName} the ${dogBreed}`);
}
function throwFrisbee(dogName, dogBreed) {
    return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHome(dogName, dogBreed) {
    return(`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName, dogBreed) {
    return(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    for (let i = 0; i < routine.length; i++) {
        routine[0] = wakeDog(dogName, dogBreed);
        routine[1] = leashDog(dogName, dogBreed);
        routine[2] = walkToPark(dogName, dogBreed);
        routine[3] = throwFrisbee(dogName, dogBreed);
        routine[4] = walkHome(dogName, dogBreed);
        routine[5] = unleashDog(dogName, dogBreed);
    }   
    return routine; 
}
console.log(exerciseDog);
// let result = exerciseDog(dogName, dogBreed);
// console.log(result); 

// function exerciseDog(dogName, dogBreed) {
//     let i = 0;
//     while (i < routine.length) {
//         wakeDog(dogName, dogBreed);
//         leashDog(dogName, dogBreed);
//         walkToPark(dogName, dogBreed);
//         throwFrisbee(dogName, dogBreed);
//         walkHome(dogName, dogBreed);
//         unleashDog(dogName, dogBreed);
//         i++
//     }   
//     return routine; 
// }