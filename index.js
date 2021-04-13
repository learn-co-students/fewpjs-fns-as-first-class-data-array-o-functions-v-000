function wakeDog(dogName, dogBreed) {
  const wakeRoutine = `Wake ${dogName} the ${dogBreed}`;
  console.log(wakeRoutine);
  return wakeRoutine;
}

function leashDog(dogName, dogBreed) {
  const leashRoutine = `Leash ${dogName} the ${dogBreed}`;
  console.log(leashRoutine);
  return leashRoutine;
}

function walkToPark(dogName, dogBreed) {
  const walkRoutine = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(walkRoutine);
  return walkRoutine;
}

function throwFrisbee(dogName, dogBreed) {
  const frisbeeRoutine = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(frisbeeRoutine);
  return frisbeeRoutine;
}

function walkHome(dogName, dogBreed) {
  const walkHomeRoutine = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(walkHomeRoutine);
  return walkHomeRoutine;
}

function unleashDog(dogName, dogBreed) {
  const unleashRoutine = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleashRoutine);
  return unleashRoutine;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  const exerciseOutput = routine.map(action => action(dogName, dogBreed));
  return exerciseOutput;
}s