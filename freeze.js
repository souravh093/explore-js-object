const bottle = {
  color: "yellow",
  price: 50,
  isClean: true,
  capacity: 1,
};
console.log(bottle);
// Object.seal(bottle);
Object.freeze(bottle);
delete bottle.isClean;
bottle.price = 100;
bottle.height = 12;
console.log(bottle);

const keys = Object.keys(bottle);
// console.log(keys);
const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair);

const getGirlFriend = (name = "chokina") => name;
console.log(getGirlFriend());
