const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/todo", (req, res) => {
    const creatPayload = req.body,
    const parsedPayload = createTodo.safeParse(creatPayload)
    if(!parsedPayload.success){
        res,status(411).json({
            msg:'You sent the wrong inputs',
        })
        return;
    }
});

app.get("/todos", (req, res) => {

});

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs",
        })
        return;
    }
});

app.listen(PORT, () => {
  [console.log(`Server is running on PORT ${PORT}`)];
});
