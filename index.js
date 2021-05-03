var wakeDog = function(dogName="Bruce", dogBreed="Pug") {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }

  var leashDog = function(dogName="Jeffrey", dogBreed="Mastiff") {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }

  var walkToPark = function(dogName="Janet", dogBreed="Saluki") {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }

  var throwFrisbee = function(dogName="Chuck", dogBreed="Laborador") {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }


  var walkHome = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName="Jackson", dogBreed="Jack Russell") {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

 function exerciseDog(dog, breed) {
     return routine.map(fn => fn(dog,breed))
 } 

