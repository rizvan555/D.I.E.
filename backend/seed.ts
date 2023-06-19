import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
  category: {
    drink: [{ name: String, models: [String] }],
    food: [{ name: String, models: [String] }],
    medicin: [{ name: String, models: [String] }],
    cosmetics: [{ name: String, models: [String] }],
  },
});

const categoryData = [
  {
    category: {
      drink: [
        { name: "Cola", models: ["Zero", "Light"] },
        { name: "Fanta", models: ["Orange", "Limon"] },
      ],
      food: [{ name: "Pasta", models: ["Belissimo"] }],
      medicin: [{ name: "Aspirin", models: ["Deutsche Pharma"] }],
      cosmetics: [{ name: "Schampoo", models: ["Pantine"] }],
    },
  },
];

export const Category = model("Category", categorySchema);

categoryData.map((category) => {
  return Category.create(category);
});

mongoose.disconnect();
