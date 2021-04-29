import { createSlice } from '@reduxjs/toolkit';

export const cartSlide = createSlice({
    name: 'counter',
    initialState: {
        totalItem:0,
        totalPrice:0,
        items:[
            // {
            //     id:1,
            //     harga:20000,
            //     total:3,
            //     nama:'Roti Bakar'
            // },
            // {
            //     id:2,
            //     harga:10000,
            //     total:2,
            //     nama:'Gulali'
            // }
        ]
    },
    reducers : {
        tambah: (state, action)=>{
            //cek jika ada item di keranjang
          // const item = 
          state.items = [...state.items,{
              id:action.payload.id,
              harga:action.payload.harga,
              total:action.payload.total,
              nama:action.payload.nama
          }];
          state.totalItem +=1;
          state.totalPrice += action.payload.harga*action.payload.total
        },
        hapus: (state, action)=>{
            state.items = state.items.filter(item => item.id !== action.payload.id);
            if(state.totalItem > 0){
                state.totalItem -=1;
                state.totalPrice -= action.payload.harga*action.payload.total;
            }
        },
        kosongkan:(state)=>{
            state.items = [];
            state.totalItem = 0;
            state.totalPrice = 0;
        }
    }

});

export const { tambah, hapus, kosongkan } = cartSlide.actions
export default cartSlide.reducer;