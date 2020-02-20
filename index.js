

function wakeDog(dogName, dogBreed) {
  let phrase = `Wake ${dogName} the ${dogBreed}`
  console.log(phrase)
  return phrase
}

function leashDog(dogName, dogBreed) {
  let phrase = `Leash ${dogName} the ${dogBreed}`
  console.log(phrase)
  return phrase
}

function walkToPark(dogName, dogBreed) {
  let phrase = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(phrase)
  return phrase
}

function throwFrisbee(dogName, dogBreed) {
  let phrase = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(phrase)
  return phrase
}

function walkHome(dogName, dogBreed) {
  let phrase = `Walk home with ${dogName} the ${dogBreed}`
  console.log(phrase)
  return phrase
}

function unleashDog(dogName, dogBreed) {
  let phrase = `Unleash ${dogName} the ${dogBreed}`
  console.log(phrase)
  return phrase
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

/*Need to focus in on mapping in JavaScript. Had lots of trouble finding this. Could not figue out 
how to do w/o using arrow functions*/

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed)) 
}