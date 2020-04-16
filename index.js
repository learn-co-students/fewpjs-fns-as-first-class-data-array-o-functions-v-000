// This DEFINITELY ought to be refactored! The code smell is pungent!

function wakeDog(dogName, dogBreed) {
  const dogString = `Wake ${dogName} the ${dogBreed}`;
  console.log(dogString);
  return dogString;
}

function leashDog(dogName, dogBreed) {
  const dogString = `Leash ${dogName} the ${dogBreed}`;
  console.log(dogString);
  return dogString;
}

function walkToPark(dogName, dogBreed) {
  const dogString = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(dogString);
  return dogString;
}

function throwFrisbee(dogName, dogBreed) {
  const dogString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(dogString);
  return dogString;
}

function walkHome(dogName, dogBreed) {
  const dogString = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(dogString);
  return dogString;
}

function unleashDog(dogName, dogBreed) {
  const dogString = `Unleash ${dogName} the ${dogBreed}`;
  console.log(dogString);
  return dogString;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  /* const completedRoutines = [];
  
  for (let i = 0; i < routine.length; i++) {
    completedRoutines.push(routine[i](dogName, dogBreed));
  }

  return completedRoutines; */

  // Refactored form:
  return Array.from(routine, action => action(dogName, dogBreed));
}