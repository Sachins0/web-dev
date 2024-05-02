import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name:"GPT",
    initialState:{
        showGPTSearch:false,
        movieResults:null,
        movieName:null,
    },
    reducers:{
        toggleGPTSearchView:(state)=>{
            state.showGPTSearch=!state.showGPTSearch
        },
        addGPTMovieResult:(state,action)=>{
            const {movieName,movieResults}=action.payload
            state.movieName=movieName
            state.movieResults=movieResults 
        }
    }
})

export const {toggleGPTSearchView,addGPTMovieResult}=GPTSlice.actions
export default GPTSlice.reducer