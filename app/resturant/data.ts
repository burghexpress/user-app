import { components } from "@/constants/api";



export const resturant: components["schemas"]["Resturant"] = {
  id: 1,
  name: "Burger King",
  poster: require("@/assets/images/burger-1.jpg"),
  logo: require("@/assets/images/burger-king-logo.png"),
  email: "contact@burgerking.com",
  rating: 4.9,
  like_count: 497,
  review_count: 19,
  estimated_time: 15,
  delivery_fee: 2.1
};



export const menu_sections = [
  "Offers",
  "Reviews",
  "Top Salers",
  "Cocktails",
  "Fish Menu",
  "Extras",
  "Drinks"
];




export const dishes: components["schemas"]["Dish"][] = [
  {
    id: 1,
    name: "Burger",
    image: require("@/assets/images/burger-1.jpg"),
    price: 5.0,
    contents: [
      "red onions",
      "bread"
    ],
    description: "Burger"
  },
  {
    id: 2,
    name: "Pizza",
    image: require("@/assets/images/pizza-1.jpg"),
    price: 7.0,
    discount: 15,
    description: "Regular pizza"
  },
  {
    id: 3,
    name: "Beyti Kebab Served with Ayran Pickles",
    image: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg"),
    price: 3.99,
    description: "Kebab with ayran pickle"
  },
  {
    id: 4,
    name: "Burger Black Bread Bun with Fried Egg",
    image: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg"),
    price: 4.99,
    discount: 58,
    description: "Burger Black Bread Bun with Fried Egg",
  },
  {
    id: 5,
    name: "Fried Prawn Rice With Teriyaki Sauce",
    image: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg"),
    price: 6.99,
    discount: 10,
    description: "Fried Prawn Rice With Teriyaki Sauce",
  }
];



export const choices = [
  {
    type: "radio",
    label: "C protein choice",
    field: "protein",
    options: [
      {
        id: 1,
        name: "Chiken"
      },
      {
        id: 2,
        name: "Beef",
        additional_fee: 0.9
      },
      {
        id: 3,
        name: "Paneer",
        additional_fee: 1.3
      }
    ]
  },
  {
    type: "select",
    label: "C protein choice",
    field: "protein",
    options: [
      {
        id: 1,
        name: "Chiken"
      },
      {
        id: 2,
        name: "Beef",
        additional_fee: 0.9
      },
      {
        id: 3,
        name: "Paneer",
        additional_fee: 1.3
      }
    ]
  }
];
