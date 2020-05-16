function wakeDog(dogName, dogBreed) {
    return (`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(doggyName, doggyBreed) {
  return (`Leash ${doggyName} the ${doggyBreed}`);
}

function walkToPark(doggyName, doggyBreed) {
  return (`Walk to the park with ${doggyName} the ${doggyBreed}`);
}

function throwFrisbee(doggyName, doggyBreed) {
  return (`Throw the frisbee for ${doggyName} the ${doggyBreed}`);
}

function walkHome(doggyName, doggyBreed) {
  return (`Walk home with ${doggyName} the ${doggyBreed}`);
}

function unleashDog(doggyName, doggyBreed) {
  return (`Unleash ${doggyName} the ${doggyBreed}`);
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}