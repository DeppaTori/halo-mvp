import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice';
import cartReducer from '../redux/cart/cartSlice';
import notifikasiReducer from '../redux/notifikasi/notifikasiSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        notifikasi: notifikasiReducer
    },
})