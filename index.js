
function wakeDog(dogName, dogBreed){
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}


function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}


function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}


function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}


// const routine = [
//   function() {wakeDog(dogName, dogBreed)},
//   function() {leashDog(dogName, dogBreed)}
//   function() {walkToPark(dogName, dogBreed)},
//   function() {throwFrisbee(dogName, dogBreed)},
//   function() {unleashDog(dogName, dogBreed)},
//   function() {walkHome(dogName, dogBreed)}
//
// ];

// const routine = [
//   wakeDog(dogName, dogBreed),
//   leashDog(dogName, dogBreed),
//   walkToPark(dogName, dogBreed),
//   throwFrisbee(dogName, dogBreed),
//   unleashDog(dogName, dogBreed),
//   walkHome(dogName, dogBreed)
// ];

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  unleashDog,
  walkHome
];


function exerciseDog(dogName, dogBreed) {
  let new_array = []
for (var i = 0; i < routine.length; i++) {
  new_array.push(routine[i](dogName, dogBreed))
}
  return new_array
}

// function exerciseDog(dogName, dogBreed) {
//   for (var i = 0; i < routine.length; i++) {
//       routine.map(dogName, dogBreed)
// }
