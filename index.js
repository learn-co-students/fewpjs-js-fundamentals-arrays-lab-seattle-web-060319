// Write your solution here!
const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
let removeFirst = ["Milo", "Otis", "Garfield"];
let removeLast = ["Milo", "Otis", "Garfield"];

append.push("Odie")
prepend.unshift("Odie")
removeFirst = removeFirst.slice(1)
removeLast = removeLast.slice(0, -1)
