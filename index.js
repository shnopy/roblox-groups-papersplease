const fetch = require("node-fetch");
const included = ["united fed", "arstotzka", "republia", "kolechia", "impor", "antegria", "obristan", "papers please", "department", "ministry", "division", "ppg"];
const input = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question("User id: ", async id => {
  id = id.toString();

  await fetch(`https://api.roblox.com/users/${id}/groups`)
    .then(res => res.json())
    .then(json => {
      json.forEach(group => {
        included.forEach(toinclude => {
          if (group.Name.toLowerCase().includes(toinclude)) console.log(group.Name);
        });
      });
    })
    .catch(() => console.error(`No user found with id: ${id || "No input"}`));

  return input.close();
});

input.on("close", () => {
  process.exit(0);
});