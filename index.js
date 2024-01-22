const express = require("express");
const fs = require("fs");

const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect(
    `mongodb://127.0.0.1:27017/`, 
    {
        dbName: "expense-tracker"
    }
).then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch(error => {
    console.log("Error connecting to MongoDB", error);
})

app.use(bodyParser.json());
app.use(cors());


const ExpenseModel = mongoose.model('expenses', {
    title: String,
    description: String,
    amount: Number,
    type: Number,
    date: String
});


app.get("/expenses", async (req, res) => {
    const data = await ExpenseModel.find();
    return res.send(data);
})

app.get("/expenses/:id", async (req, res) => {
    const data = await ExpenseModel.findById(req.params.id);
    return res.send(data);
})

app.post("/expenses", async (req, res) => {

    const expense = new ExpenseModel(req.body);
    const item = await expense.save();

    console.log("POST OPERATION, ITEM: ", item);

    res.send({ message: "SUCCESS" })
})

app.put("/expenses/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    console.log("PUT API: ", payload, id);

    const item = await ExpenseModel.findByIdAndUpdate(id, payload);
    console.log(item);

    res.send({ message: "SUCCESS" })
})

app.delete("/expenses/:id", async (req, res) => {
    const id = req.params.id;
    console.log(`Data to be deleted: ${id}`);

    const item = await ExpenseModel.findByIdAndDelete(id);
    console.log(item);

    res.send({ message: "SUCCESS" })
})


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Connected to the server on PORT: ${PORT}`);
});