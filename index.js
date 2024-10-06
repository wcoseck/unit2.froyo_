let orders = prompt(
  "Please input some ice cream flavors, please separate through commas!"
).split(",");
// examples: vanilla, vanilla, vanilla, strawberry, coffee, coffee
let flavorCount = {};

for (let i = 0; i < orders.length; i++) {
  let flavor = orders[i].trim();

  if (flavorCount[flavor]) {
    flavorCount[flavor] += 1;
  } else {
    flavorCount[flavor] = 1;
  }
}
console.table(flavorCount);
