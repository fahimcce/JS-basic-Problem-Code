const people = [
  { name: "Rahim", age: 25, gender: "male" },
  { name: "Karim", age: 30, gender: "male" },
  { name: "Fatima", age: 28, gender: "female" },
  { name: "Ayesha", age: 22, gender: "female" },
  { name: "Hasan", age: 35, gender: "male" },
  { name: "Jahanara", age: 27, gender: "female" },
];

function getMaleNames(personArray) {
  return personArray
    .filter((person) => person.gender === "male")
    .map((person) => person.name);
}

const maleNames = getMaleNames(people);
console.log(maleNames);
