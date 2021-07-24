let input = prompt("what would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean litter box"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("Donee");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the new list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("ok, enter an index to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`${deleted[0]} is deleted!`);
    } else {
      console.log("Unknown Index");
    }
  }
  input = prompt("what would you like to do?");
}
console.log("OK Quit the app");
