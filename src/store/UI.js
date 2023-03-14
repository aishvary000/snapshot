import {createSlice} from "@reduxjs/toolkit"
const uISlice = createSlice({
    name:'ui',
    initialState:{addDialogBox:false},
    reducers:{
        setVisibiliy(state,action)
        {
            state.addDialogBox = action.payload;
        }


    }
});
export const uIActions = uISlice.actions;
export default uISlice.reducer;
