import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    postTabOpen: true,

}


const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPostTabOpen: (state, action) => {
            state.postTabOpen = action.payload
        },
        switchPostTabOpen: (state, action) => {
            state.postTabOpen = !state.postTabOpen
        }
        
    },
})

export const postActions = postSlice.actions

export default postSlice.reducer