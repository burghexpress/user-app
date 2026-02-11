export interface Dish {
  id: number;
  image: string;
  name: string;
  price: number;
  discount?: number;
  contents?: string[];
};



export interface Menu {
  id: number;
  dishes: Dish[];
};



export interface Resturant {
  id: number;
  name: string;
  logo: string;
  poster: string;
  rating: number;
  like_count?: number;
  review_count?: number;
  estimated_time?: number;
  delivery_fee?: number;
};



export const SAMPLE_RESTURANTS: Resturant[] = [
  {
    id: 1,
    name: "Burger King",
    logo: require("@/assets/images/burger-king-logo.png"),
    poster: require("@/assets/images/burger-1.jpg"),
    rating: 4.9,
    like_count: 497,
    review_count: 19,
    estimated_time: 15,
    delivery_fee: 2.1
  },
  {
    id: 2,
    name: "Dominos",
    logo: require("@/assets/images/dominos.png"),
    poster: require("@/assets/images/burger-1.jpg"),
    rating: 4.3,
    like_count: 702,
    review_count: 73,
    estimated_time: 43
  },
  {
    id: 3,
    name: "KFC",
    logo: require("@/assets/images/kfc-logo.png"),
    poster: require("@/assets/images/burger-1.jpg"),
    rating: 4.4,
    like_count: 931,
    review_count: 103,
    estimated_time: 32
  },
  {
    id: 4,
    name: "Wendy's",
    logo: require("@/assets/images/wendys-logo.png"),
    poster: require("@/assets/images/kfc-logo.png"),
    rating: 4.4,
    like_count: 241,
    review_count: 13,
    estimated_time: 27
  },
  {
    id: 5,
    name: "Pizza hut",
    logo: require("@/assets/images/pizza-hut-logo.png"),
    poster: require("@/assets/images/pizza-hut-logo.png"),
    rating: 4.8,
    like_count: 941,
    review_count: 133,
    estimated_time: 24
  }
];



export const menu_sections = [
  "Offers",
  "Reviews",
  "Top Salers",
  "Cocktails",
  "Fish Menu",
  "Extras",
  "Drinks"
];




export const dishes: Dish[] = [
  {
    id: 1,
    name: "Burger",
    image: require("@/assets/images/burger-1.jpg"),
    price: 5.0,
    contents: [
      "red onions",
      "bread"
    ]
  },
  {
    id: 2,
    name: "Pizza",
    image: require("@/assets/images/pizza-1.jpg"),
    price: 7.0,
    discount: 15
  },
  {
    id: 3,
    name: "Beyti Kebab Served with Ayran Pickles",
    image: require("@/assets/images/beyti-kebab-served-with-ayran-pickles.jpg"),
    price: 3.99
  },
  {
    id: 4,
    name: "Burger Black Bread Bun with Fried Egg",
    image: require("@/assets/images/burger-black-bread-bun-with-fried-egg.jpg"),
    price: 4.99,
    discount: 58
  },
  {
    id: 5,
    name: "Fried Prawn Rice With Teriyaki Sauce",
    image: require("@/assets/images/fried-prawn-rice-with-teriyaki-sauce.jpg"),
    price: 6.99,
    discount: 10
  }
];
