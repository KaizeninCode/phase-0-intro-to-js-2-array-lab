// Write your solution here!
// cats is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push(name)
}

function destructivelyPrependCat(name) {
  return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
  return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift(name)
}


function appendCat(name) {
  var newArr = cats.slice(name)
  newArr.push(name)
  return newArr
}

function prependCat(name) {
  var newArr = [name, ...cats]
  return newArr
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1)
}

function removeFirstCat() {
  return cats.slice(1)
}
