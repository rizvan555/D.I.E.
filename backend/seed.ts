import mongoose, { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  category: {
    drink: [
      {
        name: String,
        models: [
          {
            name: String,
            img: String,
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
            img: String,
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
            img: String,
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
            img: String,
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

export const Category = model('Category', categorySchema);
