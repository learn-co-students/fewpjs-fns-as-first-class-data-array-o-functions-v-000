function wakeDog(dogName, dogBreed) {
  const sentence = `Wake ${dogName} the ${dogBreed}`;
  console.log(sentence);
  return sentence
};

function leashDog(dogName, dogBreed) {
  const sentence = `Leash ${dogName} the ${dogBreed}`;
  console.log(sentence);
  return sentence
};

function walkToPark(dogName, dogBreed) {
  const sentence = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(sentence);
  return sentence
};

function throwFrisbee(dogName, dogBreed) {
  const sentence = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(sentence);
  return sentence
};

function walkHome(dogName, dogBreed) {
  const sentence = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(sentence);
  return sentence
};

function unleashDog(dogName, dogBreed) {
  const sentence = `Unleash ${dogName} the ${dogBreed}`;
  console.log(sentence);
  return sentence
};

const routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome,
unleashDog ]

function exerciseDog(dogName, dogBreed) {
  return routine.map( f => f(dogName, dogBreed))
}
