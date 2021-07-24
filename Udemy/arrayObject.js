const students = [
  {
    name: "Yhido",
    address: [
      {
        home: true,
        city: "Medan",
        kodepos: "20135",
        alamat: "Jl.Flora Raya ",
      },
      {
        home: false,
        city: "Jakarta",
        kodepos: "20111",
        alamat: "Jl.Tianglistrik",
      },
    ],
  },
];

console.log(students[0].address[1].city);

if (students[0].address[0].home === true) {
  console.log("Medan");
}
