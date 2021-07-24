let isRaining = false;
let day = "Monday";

if (isRaining) {
  console.log("Saya Tidak Lari");
} else if (day == "Monday" && !isRaining) {
  console.log("Saya Lari");
} else {
  console.log("Saya Kerja ");
}

let a = 1 + "1";
console.log(typeof a);

let b = Math.pow(3, 3);
console.log(b);

let c = 1 + "Saya";
console.log(c);
console.log(typeof c);

console.log((true && false) || (true && false));

day = "monday" ? console.log("Keluar") : console.log("Dirumah");

isRaining = true ? console.log("Dirumah Saja") : console.log("Main keluar");
