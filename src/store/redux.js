import { configureStore, createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    replaceCard(state, action) {
      action.payload.forEach((item) => {
        state.push(item);
      });
    },
    add(state, action) {
      let flag = false;
      let indext;
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          flag = true;
          indext = index;
        }
      });
      if (flag) {
        state[indext].quantity = +state[indext].quantity + 1;
        state[indext].total = +state[indext].total + +action.payload.price;
      } else {
        state.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1,
          total: action.payload.price,
        });
      }
    },
    increase(state, action) {
      let indext;
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          indext = index;
        }
      });
      state[indext].quantity = +state[indext].quantity + 1;
      state[indext].total = +state[indext].total + +action.payload.price;
    },
    remove(state, action) {
      let indext;
      state.forEach((item, index) => {
        if (item.id === action.payload.id) {
          indext = index;
        }
      });
      if (state[indext].quantity > 1) {
        state[indext].quantity = +state[indext].quantity - 1;
        state[indext].total = +state[indext].total - +action.payload.price;
      } else if (state[indext].quantity === 1) {
        state.splice(indext, 1);
      }
    },
  },
});

const cardButtonSlice = createSlice({
  name: "cardButton",
  initialState: { displayCard: false, notification: null },
  reducers: {
    displayCard(state) {
      state.displayCard = !state.displayCard;
    },
    displayNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

const store = configureStore({
  reducer: { card: cardSlice.reducer, cardButton: cardButtonSlice.reducer },
});

export const cardActions = cardSlice.actions;
export const cardButtonActions = cardButtonSlice.actions;
export default store;

// { title: 'Test Item', quantity: 3, total: 18, price: 6 }
