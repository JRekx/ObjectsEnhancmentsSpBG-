//Keys and values

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

  //becomes

  function createInstructorEs(firstName, lastName){
    return{
        firstName,
        lastName
    }
  }

//Computed property names

var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//becomes

let favNum = 42;

const instructorEs = {
    fistName: `Colt`,
    [favNum]: `That is my Favortie!`
}

//Object methods

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName " + "says bye!";
//     }
//   }

  //becomes

  const instructor = {
    firstName: `Colt`,
    sayHi() {
        return `Hi`;
    },
    sayBye(){
        return this.firstName + `says bye!`;
    }
  }

  const d = createAnimal(`dog`,`bark`, `woof`)
  d.bark()

  const s = creatAnimal(`sheep`,`bleet`,`Baaa`)
  s.bleet()


  function createAnimal( species, verb, noise) {
    return{
        species,
        [verb](){
            return noise;
        }
    }
  }
