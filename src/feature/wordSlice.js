import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const wordSlice = createSlice({
  name: "word",
  initialState: {
    words: [],
  },
  reducers: {
    getWordsFromAPI: (state, action) => {state.words = action.payload},
    addNew:(state,action) => {state.words.push(action.payload)},
    deleteFile:(state,action) => {state.words = state.words.filter(f=> f.id !== action.payload)}
  },
});

export const { getWordsFromAPI,addNew,deleteFile } = wordSlice.actions;

export const selectWords = (state) => state.word

export const getWorksFromAPIASYNC = ()=>dispatch=>{
      axios.get("http://localhost:4000/works")
      .then(data=>dispatch(getWordsFromAPI(data.data)))
}

export const addNewASYNC=(data)=>dispatch=>{
  axios.post("http://localhost:4000/works",data)
  .then(responsive=>dispatch(addNew(responsive.data)))
}
export const deleteFileASYNC=(id)=>dispatch=>{
  axios.delete("http://localhost:4000/works/"+id)
  dispatch(deleteFile(id))
}


export default wordSlice.reducer;
