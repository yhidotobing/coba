const fs = require("fs");

fs.readFile("yhido.txt", "utf-8", (error, yhido) => {
  if (error) throw error;

  fs.readFile("adib.txt", "utf-8", (error, adib) => {
    if (error) throw error;

    fs.readFile("amri.txt", "utf-8", (error, amri) => {
      if (error) throw error;
      fs.writeFile("./newfile.txt", `${yhido}, ${amri}, ${adib}`, (error) => {
        if (error) throw error;
        console.log("Write done!");
      });
    });
  });
});
