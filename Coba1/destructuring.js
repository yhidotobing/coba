// const scores = [3232323, 23232323, 4324234234, 23423432, 23432423, 2342342];

// const highScores = scores[0];
// const secondHighscore = scores[1];

// const [] = scores;
// const [gold, silver, bronze] = scores;

// console.log([gold, silver, bronze]);

const dataFromForm = {
  email: "yhidotobing@gmail.com",
  password: "123456",
  username: "yhidotobing",
  born: 1930,
  died: 1978,
  bio: "Perfectionist",
};
const dataFromForm2 = {
  email: "yhidotobing@gmail.com",
  password: "123456",
  username: "timo",
  bio: "Perfectionist",
};

// function fullName(dataFromForm2) {
//   const { email, password } = dataFromForm2;
//   return `${email} ${password}`;
// }
function fullName({ email, password = "blablabla" }) {
  return `${email} ${password}`;
}

console.log(fullName(dataFromForm2));
// // const { email: mail, died: death } = dataFromForm;

// const { email, username, died = "1990" } = dataFromForm2;

// console.log(email);
// console.log(username);
// console.log(died);
