import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: 'user',
        initialState: null, // state of logged in user
        reducers: {
            addUser: (state, action) => {
                return action.payload; // this return value will set initialState 
            },
            removeUser: (state, action) => {
                return null;
            }
        }
    }
)

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;