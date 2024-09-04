import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Api call or asynchronous function call using Thunk
//first argument is name of slice +/+name of Thunk fn

export const fechResturant= createAsyncThunk('resturantSlice/fechResturant',()=>{
    const result=axios.get('/restaurant.json').then(response=>response.data);
    console.log("Response from Thunk");
    console.log(result);
    return result;

})

const resturantSlice=createSlice({
    name:'Resturantslice',
    initialState:{
        loading:false,  //pending state ,Api call/any asynchronous in progress
        allResturant:[], //resolve state
        error:'' //reject state-return error
    },
    extraReducers:(builder)=>{
        builder.addCase(fechResturant.pending,(state)=>{
            state.loading=true;
        })
        builder.addCase(fechResturant.fulfilled,(state,action)=>{
            state.loading=false;
            state.allResturant=action.payload;

            state.searchResurant=action.payload //using helping filtering reduce method for searchResurant()

            state.error=''
        })
        builder.addCase(fechResturant.rejected,(state,action)=>{
            state.loading=false;
            state.allResturant=[]
            state.error=action.error.message
        })
    },
    reducers:{
        //using this method for filltering
        searchResurant:(state,action)=>{
            state.allResturant.restaurants=state.searchResurant?.restaurants.filter((item)=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export default resturantSlice.reducer;
export const {searchResurant} = resturantSlice.actions



//Redux is synchronous operation
//but Api call or file read or write,etc are asychronous operation
//To deal with asynchronous operation in Redux,we are using Redux Thunk
//thunk is not a part of slice,seprate method in redux toolkit