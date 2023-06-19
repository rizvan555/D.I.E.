import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
  category: {
    drink: { name: String, model: String },
    food: { name: String, model: String },
    medicin: { name: String, model: String },
    cosmetics: { name: String, model: String },
  },
});

const categoryData = [
  {
    category: {
      drink: { name: "Cola", model: "Zero" },
      food: { name: "Pasta", model: "Belissimo" },
      medicin: { name: "Aspirin", model: "Deutsche Pharma" },
      cosmetics: { name: "Schampoo", model: "Pantine" },
    },
  },
];

export const Category = model("Category", categorySchema);

categoryData.map((category) => {
  return Category.create(category);
});

mongoose.disconnect();
