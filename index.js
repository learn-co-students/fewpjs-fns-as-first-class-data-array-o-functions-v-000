function wakeDog(dogName, dogBreed) {
    var str = `Wake ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }
  function leashDog(dogName, dogBreed) {
    var str = `Leash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }
  function walkToPark(dogName, dogBreed) {
    var str = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }
  function throwFrisbee(dogName, dogBreed) {
    var str = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }
  function walkHome(dogName, dogBreed) {
    var str = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }
  function unleashDog(dogName, dogBreed) {
    var str = `Unleash ${dogName} the ${dogBreed}`;
    console.log(str);
    return str;
  }
  const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
  
  function exerciseDog(dogName, dogBreed) {
    var i;
    var a = [];
    for (i=0; i<routine.length; i++) {
     a.push(routine[i] (dogName, dogBreed));
    }
    return a;
  }
l
  
