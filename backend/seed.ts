import mongoose, { Schema, model } from "mongoose";

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
const categoryPageDataSchema = new Schema({
  categoryName: {
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
          name: "Pepsi",
          models: [
            {
              name: "Pepsi Zero",
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
              name: "Pepsi Light",
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
              name: "Fanta Orange",
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
              name: "Fanta Limon",
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
              name: "Pasta Bellisimo",
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
              name: "Pasta Ankara ",
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
              name: "Rice Mahmood",
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
              name: "Rice Basmati ",
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
          name: "Aspirine",
          models: [
            {
              name: "Aspirine Upsa",
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
              name: "Novalgin Oblong",
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
          name: "Shampoo",
          models: [
            {
              name: "Shampoo Pantene",
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
const categoryPageData = [
  {
    categoryName: {
      drink: [
        {
          name: "Drink",
          models: [
            {
              name: "Pepsi Zero",
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
              name: "Pepsi Light",
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
              name: "Fanta Orange",
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
              name: "Fanta Limon",
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
          name: "Food",
          models: [
            {
              name: "Pasta Bellisimo",
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
              name: "Pasta Ankara ",
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
            {
              name: "Rice Mahmood",
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
              name: "Rice Basmati ",
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
          name: "Medicine",
          models: [
            {
              name: "Aspirine Upsa",
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
              name: "Novalgin Oblong",
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
          name: "Cosmetics",
          models: [
            {
              name: "Shampoo Pantene",
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
export const CategoryPage = model("CategoryPage", categoryPageDataSchema);

categoryData.map((category) => {
  return Category.create(category);
});

categoryPageData.map((categoryData) => {
  return CategoryPage.create(categoryData);
});

mongoose.disconnect();
