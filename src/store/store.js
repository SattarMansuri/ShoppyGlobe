import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  },
});

store.subscribe(()=>{
    const state = store.getState()
    localStorage.setItem('cartItems', JSON.stringify(state.counter.cartItems))
})

export default store