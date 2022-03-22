const initialState = [
  {
    category: "mobile",
    brand: "Vivo",
    title: "vivo V1",
    bestSeller: true,
    rating: 1.0,
    price: 45.0
  },

  {
    category: "laptop",
    brand: "Asus",
    title: "Asus 3152",
    bestSeller: true,
    rating: 4.0,
    price: 40.0
  },
  {
    category: "mobile",
    brand: "Oppo",
    title: "f11",
    bestSeller: false,
    rating: 3.5,
    price: 42.0
  },
  {
    category: "laptop",
    brand: "Lenovo",
    title: "lenovo 51ACL",
    bestSeller: false,
    rating: 1.0,
    price: 25.0
  },
  {
    category: "gadget",
    brand: "Susi",
    title: "Robot",
    bestSeller: false,
    rating: 2.0,
    price: 15.0
  },
  {
    category: "gadget",
    brand: "Luka",
    title: "Drone",
    bestSeller: true,
    rating: 4.0,
    price: 25.0
  }
];

export const ecomdata = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE":
      return [...state, "ID OF DELETING ITEM"];
    default:
      return state;
  }
};
