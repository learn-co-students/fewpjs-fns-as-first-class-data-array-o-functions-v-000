const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function wakeDog(dogName = "Xerox", dogBreed = "Border Collie") {
  return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(){
  return "Leash Boo Radley the Pibble";
}

function walkToPark(){
  return "Walk to the park with Bunny the Labrador";
}

function throwFrisbee(){
  return "Throw the frisbee for Mary J. Blige the Papillon";
}

function walkHome(){
  return "Walk home with Santa Paws the Husky";
}

function unleashDog(dogName, dogBreed){
  return `Unleash ${dogName} the ${dogBreed}`;
}

function exerciseDog(dogName,dogBreed){
  return routine.map(fun => fun(dogName,dogBreed))
}
