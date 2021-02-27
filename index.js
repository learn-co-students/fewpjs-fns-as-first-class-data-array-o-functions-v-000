function wakeDog(dogName="Byron", dogBreed="poodle"){
  return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName="Byron", dogBreed="poodle"){
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName="Byron", dogBreed="poodle"){
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName="Byron", dogBreed="poodle"){
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName="Byron", dogBreed="poodle"){
  return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName="Byron", dogBreed="poodle"){
  return `Unleash ${dogName} the ${dogBreed}`
}


let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]


function exerciseDog(dogName="Byron", dogBreed="poodle"){
  return routine.map(purple => purple(dogName, dogBreed))
  // let instructions = []
  // for (const step of routine) {
  //   let instruction = step(dogName, dogBreed)
  //   instructions.push(instruction)
  // }
  // return instructions
}