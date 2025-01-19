const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Hyundai", model: "Elantra", year: 2018 },
];

function Sorts(arr) {
  return arr.sort((a, b) => a.year - b.year);
}
const SortedCar = Sorts(cars);
console.log(SortedCar);
