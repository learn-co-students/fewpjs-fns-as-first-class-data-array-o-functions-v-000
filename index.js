

function wakeDog(dogName, dogBreed) {
 let action = `Wake ${dogName} the ${dogBreed}`;
  console.log(`${action}`);
  return action;
}

function leashDog(dogName, dogBreed) {
  let action = `Leash ${dogName} the ${dogBreed}`;
  console.log(`${action}`);
  return action;
}

function walkToPark(dogName, dogBreed) {
  let action = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(`${action}`);
  return action;
}

function throwFrisbee(dogName, dogBreed) {
 let action = `Throw the frisbee for ${dogName} the ${dogBreed}`;
 console.log(`${action}`);
 return action;
}

function walkHome(dogName, dogBreed) {
  let action = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(`${action}`);
  return action;
}

function unleashDog(dogName, dogBreed) {
  let action = `Unleash ${dogName} the ${dogBreed}`;
  console.log(`${action}`);
  return action;
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed){

    for (i = 0; i < routine.length; i++) {
       const a = [];
       a.push(`${routine[i](dogName,dogBreed)}`);
       return a;
  }
}

//exerciseDog("Johnnhy", "Boxer");
