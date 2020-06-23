var routine = []

routine[0] = wakeDog;
routine[1] = leashDog;
routine[2] = walkToPark;
routine[3] = throwFrisbee;
routine[4] = walkHome;
routine[5] = unleashDog;

function wakeDog(dogName, dogBreed){
  const str = `Wake ${dogName} the ${dogBreed}`
  return str
}

function leashDog(dogName, dogBreed){
  const str = `Leash ${dogName} the ${dogBreed}`
  return str
}

function walkToPark(dogName, dogBreed){
  const str = `Walk to the park with ${dogName} the ${dogBreed}`
  return str
}

function throwFrisbee(dogName, dogBreed){
  const str = `Throw the frisbee for ${dogName} the ${dogBreed}`
  return str
}

function walkHome(dogName, dogBreed){
  const str = `Walk home with ${dogName} the ${dogBreed}`
  return str
}

function unleashDog(dogName, dogBreed){
  const str = `Unleash ${dogName} the ${dogBreed}`
  return str
}

function exerciseDog(dogName, dogBreed){
  routine = routine.map((activity) => {
		return activity(dogName, dogBreed)
		}
	)
	return routine
}