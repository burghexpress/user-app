export interface Category {
  id: number;
  icon: string;
  name: string;
  description?: string;
};



export const SAMPLE_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Food",
    icon: require("@/assets/images/food-category-icon.png")
  },
  {
    id: 2,
    name: "Groceries",
    icon: require("@/assets/images/groceries-category-icon.png")
  },
  {
    id: 3,
    name: "Shops",
    icon: require("@/assets/images/store-category-icon.png")
  },
  {
    id: 4,
    name: "Pharmacy",
    icon: require("@/assets/images/pharmacy-category-icon.png")
  },
  {
    id: 5,
    name: "Courier",
    icon: require("@/assets/images/courier-category-icon.png")
  }
];
