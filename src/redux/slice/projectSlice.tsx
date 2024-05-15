
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"


export const getProjects = createAsyncThunk('getProjects',async()=>{
    const res = await  fetch("http://localhost:4040/project/get");
    return res.json()
})



const projectSlice = createSlice({
    name :"project",
    initialState :{
        isLoading : false,
        data : null,
        isError : false
    },
    reducers : {
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getProjects.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(getProjects.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(getProjects.rejected,(state,action)=>{
            console.log("Error",action.payload);
            state.isError = true;
        })
    }
});

export default projectSlice.reducer;