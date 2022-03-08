import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalCartQuantity: 0,
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      // state.totalCartQuantity = 0;
      // state.total = 0;

      state.totalCartQuantity = state.totalCartQuantity + action.payload.quantity;
      state.total = state.total + (action.payload.price * action.payload.quantity);
      action.payload.title = `${action.payload.title} ${action.payload.size}`;

      const existingIndex = state.products.findIndex( item  => 
          (item.title === action.payload.title && item.size === action.payload.size)
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity : state.products[existingIndex].quantity + action.payload.quantity,
        };
      } 
      else {
        let tempProductItem = { ...action.payload, quantity: action.payload.quantity };
        state.products.push(tempProductItem);
      }
    },
    removeFromCart(state, action) {
      // state.totalCartQuantity = 0;
      // state.total = 0;

      state.totalCartQuantity = state.totalCartQuantity - action.payload.quantity;
      state.total = state.total - (action.payload.price * action.payload.quantity);

      state.products.map((product) => {
        if (product.title === action.payload.title && product.size === action.payload.size) {
          const nextCartItems = state.products.filter(item => 
            (item.title !== action.payload.title)
          );
            state.products = nextCartItems;
          }
          return state;
        });
    },
    incriseProductQuantity(state, action){
      state.totalCartQuantity = state.totalCartQuantity + 1;
      state.total = state.total + action.payload.price;
      const itemIndex = state.products.findIndex(
        (item) => item.title === action.payload.title
      );
        state.products[itemIndex].quantity += 1;
    },

    decriseProductQuantity(state, action){
      state.totalCartQuantity = state.totalCartQuantity - 1;
      state.total = state.total - action.payload.price;

      const itemIndex = state.products.findIndex(
        (item) => item.title === action.payload.title
      );
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      } 
      else if (state.products[itemIndex].quantity === 1) {
        const nextCartItems = state.products.filter(item => 
          (item.title !== action.payload.title)
        );
        state.products = nextCartItems;
      }
    }
  }
});

export const { addToCart, removeFromCart,   incriseProductQuantity, decriseProductQuantity  } = cartSlice.actions;
export default cartSlice.reducer;
