import express from "express";
import mongoose from "mongoose";
import router from "./Routes";


const app = express();

app.use(express.json())
app.use(router)

mongoose.connect("mongodb+srv://matheuswander:dVb9FpeUtBhxIL2o@cluster0.w7nmvux.mongodb.net/?retryWrites=true&w=majority")

  .then((data) => {
    console.log("MongoDB Connection Succeded");
  })

  .catch((err) => {
    console.log("MongoDB Connection Failed", err.message);
  });



app.listen(3030);

