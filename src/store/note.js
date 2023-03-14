import {createSlice} from "@reduxjs/toolkit"

const noteSlice = createSlice({
    name:'note',
    initialState:{notes:[],filteredNotes:null},
    reducers:{
        addNote(state,action){
            state.notes = [...state.notes,action.payload]
        },
        removeNote(state,action){
            console.log(action.payload);
            state.notes.forEach((ele,index) => {
                if(ele.key === action.payload)
                {
                    
                    state.notes.splice(index,1);
                }
                
            });
            
        },
        updateNote(state,action)
        {
            console.log("Testing ",action.payload);
            state.notes.forEach((ele,index) => {
                if(ele.key === action.payload.key)
                {
                    // console.log("got",ele.key); 
                    state.notes[index] = action.payload;
                }
                
            });
        },
        setFilteredNotes(state,action)
        {
            console.log(action.payload);
            state.filteredNotes = action.payload;
        }
    }
});
export const noteActions = noteSlice.actions;
export default noteSlice.reducer;
