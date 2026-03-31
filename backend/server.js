const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Transaction = require("./model");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/expenseDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/add", async (req, res) => {
  const txn = new Transaction(req.body);
  await txn.save();
  res.send(txn);
});

app.get("/all", async (req, res) => {
  const data = await Transaction.find().sort({ _id: -1 });
  res.send(data);
});

app.listen(5000, () => console.log("Server running on port 5000"));