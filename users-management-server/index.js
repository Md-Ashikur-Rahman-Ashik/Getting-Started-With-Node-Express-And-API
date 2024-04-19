const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Jhankar", email: "jhankar@gmail.com" },
  { id: 2, name: "Programming", email: "programming@gmail.com" },
  { id: 3, name: "Hero", email: "hero@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Users Management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
