const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karim", age: 30, gender: "male" },
  { name: "Fatima", age: 28, gender: "female" },
  { name: "Ayesha", age: 22, gender: "female" },
];

function updateAgeByName(personArray, name, newAge) {
  const person = personArray.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  } else {
    console.log(`Person with name "${name}" not found.`);
  }
}

updateAgeByName(people, "Ayesha", 35);
console.log(people);
