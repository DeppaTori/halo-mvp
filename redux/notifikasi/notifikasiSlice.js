import { createSlice } from '@reduxjs/toolkit';

export const notifikasiSlide = createSlice({
    name: 'notifikasi',
    initialState: {
        total:0,
        berita:[
            // {
            //     id:1,
            //     penjual:{id:'penjual'},
            //     teks:'Pesanan sudah selesai',
            // },
        ]
    },
    reducers : {
        tambah: (state, action)=>{
    
          state.berita = [...state.berita,{
              id:action.payload.id,
              penjual:action.payload.penjualId,
              teks:'Pesanan sudah selesai',
          }];
          state.total +=1;
        },
        hapus: (state, action)=>{
            // state.items = state.items.filter(item => item.id !== action.payload.id);
            // if(state.totalItem > 0){
            //     state.totalItem -=1;
            //     state.totalPrice -= action.payload.harga*action.payload.total;
            // }
        },
        kosongkan:(state)=>{
            state.berita = [];
            state.total = 0;
        }
    }

});

export const { tambah, hapus, kosongkan } = notifikasiSlide.actions
export default notifikasiSlide.reducer;