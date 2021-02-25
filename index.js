
function wakeDog(dogName, dogBreed) { const rtn = `Wake ${dogName} the ${dogBreed}`; console.log(rtn); return rtn }
function leashDog(dogName, dogBreed) { const rtn = `Leash ${dogName} the ${dogBreed}`; console.log(rtn); return rtn }
function walkToPark(dogName, dogBreed) { const rtn = `Walk to the park with ${dogName} the ${dogBreed}`; console.log(rtn); return rtn }
function throwFrisbee(dogName, dogBreed) { const rtn = `Throw the frisbee for ${dogName} the ${dogBreed}`; console.log(rtn); return rtn }
function walkHome(dogName, dogBreed) { const rtn = `Walk home with ${dogName} the ${dogBreed}`; console.log(rtn); return rtn }
function unleashDog(dogName, dogBreed) { const rtn = `Unleash ${dogName} the ${dogBreed}`; console.log(rtn); return rtn }

const routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  const results = []
  for (let i = 0; i < routine.length; i++) {
    const func = routine[i];
    results.push(func(dogName, dogBreed))
  }
  return results
}