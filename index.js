function wakeDog(dogName,dogBreed) {
console.log(`Wake ${dogName} the ${dogBreed}`)
return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName,dogBreed) {
console.log(`Leash ${dogName} the ${dogBreed}`)
return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName,dogBreed) {
console.log(`Walk to the park with ${dogName} the ${dogBreed}`)
return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName,dogBreed) {
console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName,dogBreed) {
console.log(`Walk home with ${dogName} the ${dogBreed}`)
return `Walk home with ${dogName} the ${dogBreed}`
}
    


function unleashDog(dogName,dogBreed) {
console.log(`Unleash ${dogName} the ${dogBreed}`)
return `Unleash ${dogName} the ${dogBreed}`
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
//let routine = [wakeDog(),leashDog(),walkToPark(),throwFrisbee(),walkHome(),unleashDog()]
// you aren't calling the each of the functions with in the array.
//you are naming them first and calling them in the function
function exerciseDog(dogName,dogBreed)
{  //for (let i = 0; i < routine.length; i++){
        //routine[i(dogName,dogBreed)];
    //}
    // y = f(X) 
    return routine.map(fn => fn(dogName,dogBreed)) //.map was suggested by matteo
    //map works like hashes and key and value
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map from charlotte
}