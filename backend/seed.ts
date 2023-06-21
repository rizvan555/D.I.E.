import mongoose, { Schema, model } from "mongoose";

const categorySchema = new Schema({
  category: {
    drink: [
      {
        name: String,
        models: [{ name: String, alcohol: String, allergic: String }],
      },
    ],
    food: [
      {
        name: String,
        models: [{ name: String, alcohol: String, allergic: String }],
      },
    ],
    medicine: [
      {
        name: String,
        models: [{ name: String, alcohol: String, allergic: String }],
      },
    ],
    cosmetics: [
      {
        name: String,
        models: [{ name: String, alcohol: String, allergic: String }],
      },
    ],
  },
});

const categoryData = [
  {
    category: {
      drink: [
        {
          name: "PepsiCola",
          models: [
            { name: "Zero", alcohol: "No", allergic: "No" },
            { name: "Light", alcohol: "No", allergic: "No" },
          ],
        },
        {
          name: "Fanta",
          models: [
            { name: "Orange", alcohol: "No", allergic: "No" },
            { name: "Limon", alcohol: "No", allergic: "No" },
          ],
        },
        {
          name: "RedBull",
          models: [{ name: "Redbull", alcohol: "No", allergic: "Yes" }],
        },
      ],
      food: [
        {
          name: "Pasta",
          models: [
            { name: "Bellisimo", alcohol: "No", allergic: "Yes" },
            { name: "Ankara ", alcohol: "No", allergic: "No" },
          ],
        },
        {
          name: "Rice",
          models: [
            { name: "Mahmood", alcohol: "No", allergic: "No" },
            { name: "Basmati ", alcohol: "No", allergic: "No" },
          ],
        },
      ],
      medicine: [
        {
          name: "Aspirin",
          models: [{ name: "Aspirin", alcohol: "No", allergic: "No" }],
        },
        {
          name: "Novalgin",
          models: [{ name: "Novalgin", alcohol: "No", allergic: "Yes" }],
        },
      ],
      cosmetics: [
        {
          name: "Schampoo",
          models: [{ name: "Pantine", alcohol: "No", allergic: "No" }],
        },
      ],
    },
  },
];

export const Category = model("Category", categorySchema);

categoryData.map((category) => {
  return Category.create(category);
});

mongoose.disconnect();
