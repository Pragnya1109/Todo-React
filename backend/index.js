const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(PORT, () => {
  [console.log(`Server is running on PORT ${PORT}`)];
});
