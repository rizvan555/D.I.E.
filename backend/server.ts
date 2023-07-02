import express from "express";
import { Category } from "./seed.ts";
import mongoose from "mongoose";
import cors from "cors";

mongoose.connect("mongodb://localhost:27017/categories");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/categories/category", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    console.log(error);
  }
});
app.post("/categories/category", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});
app.get("/categories/category/img", async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    console.log(error);
  }
});
app.post("/categories/category/img", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(port);
});
