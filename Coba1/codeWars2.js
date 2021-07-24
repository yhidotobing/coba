function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}\n`;
  }
  return table;
}

console.log(multiTable(5));

const multiTable = (angka) => {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    if (i <= 9) {
      table += `${i} * ${angka} = ${i * angka}\n`;
    } else table += `${i} * ${angka} = ${i * angka}`;
  }
  return table;
};

console.log(multiTable(3));

//link : https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
