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
    medicin: [
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
          name: "Cola",
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
      ],
      food: [
        {
          name: "Pasta",
          models: [
            { name: "Bellisimo", alcohol: "No", allergic: "Yes" },
            { name: "Ankara ", alcohol: "No", allergic: "No" },
          ],
        },
      ],
      medicin: [
        {
          name: "Aspirin",
          models: [{ name: "Aspirin", alcohol: "No", allergic: "No" }],
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
