import {configureStore} from "@reduxjs/toolkit";
import word from "../feature/wordSlice";
export default configureStore({
      reducer:{
            word,
      }
})


