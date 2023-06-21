import mongoose, { Schema, model } from "mongoose";
import { Gluten } from "next/font/google";

const categorySchema = new Schema({
  category: {
    drink: [
      {
        name: String,
        models: [
          {
            name: String,
            alcohol: String,
            allergic: {
              Gluten: String,
              Milk: String,
              Egg: String,
              Nuts: String,
              Sesame: String,
              Wheat: String,
              Fish: String,
            },
            halal: String,
            vegan: String,
            vegetarian: String,
          },
        ],
      },
    ],
    food: [
      {
        name: String,
        models: [
          {
            name: String,
            alcohol: String,
            allergic: {
              Gluten: String,
              Milk: String,
              Egg: String,
              Nuts: String,
              Sesame: String,
              Wheat: String,
              Fish: String,
            },
            halal: String,
            vegan: String,
            vegetarian: String,
          },
        ],
      },
    ],
    medicine: [
      {
        name: String,
        models: [
          {
            name: String,
            alcohol: String,
            allergic: {
              Gluten: String,
              Milk: String,
              Egg: String,
              Nuts: String,
              Sesame: String,
              Wheat: String,
              Fish: String,
            },
            halal: String,
            vegan: String,
            vegetarian: String,
          },
        ],
      },
    ],
    cosmetics: [
      {
        name: String,
        models: [
          {
            name: String,
            alcohol: String,
            allergic: {
              Gluten: String,
              Milk: String,
              Egg: String,
              Nuts: String,
              Sesame: String,
              Wheat: String,
              Fish: String,
            },
            halal: String,
            vegan: String,
            vegetarian: String,
          },
        ],
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
            {
              name: "Zero",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
            {
              name: "Light",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
        },
        {
          name: "Fanta",
          models: [
            {
              name: "Orange",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
            {
              name: "Limon",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
        },
        {
          name: "RedBull",
          models: [
            {
              name: "Redbull",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
        },
      ],
      food: [
        {
          name: "Pasta",
          models: [
            {
              name: "Bellisimo",
              alcohol: "No",
              allergic: {
                Gluten: "Yes",
                Milk: "No",
                Egg: "Yes",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
            {
              name: "Ankara ",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "Yes",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
        },
        {
          name: "Rice",
          models: [
            {
              name: "Mahmood",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
            {
              name: "Basmati ",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
        },
      ],
      medicine: [
        {
          name: "Aspirin",
          models: [
            {
              name: "Aspirin",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
        },
        {
          name: "Novalgin",
          models: [
            {
              name: "Novalgin",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
        },
      ],
      cosmetics: [
        {
          name: "Schampoo",
          models: [
            {
              name: "Pantine",
              alcohol: "No",
              allergic: {
                Gluten: "No",
                Milk: "No",
                Egg: "No",
                Nuts: "No",
                Sesame: "No",
                Wheat: "No",
                Fish: "No",
              },
              halal: "Yes",
              vegan: "Yes",
              vegetarian: "Yes",
            },
          ],
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
