import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: {
        user:null,
        isAuthenticated:false
    },
    reducers: {
        signIn: (state,action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        }
    }
})

export const {signIn } = userSlice.actions;
export default userSlice.reducer;