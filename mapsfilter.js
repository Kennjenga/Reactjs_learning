const nums = [1, 2, 3, 4, 5];

let num = nums.map((x) => {
  return x * x;
});
console.log(num);

const names = ["ken", "Alice", "Brad", "oscar", "Purity"];

let nam = names.map((nae) => {
  return nae[0].toUpperCase() + nae.slice(1);
});

console.log(nam);
