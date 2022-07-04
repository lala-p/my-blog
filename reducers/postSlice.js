import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    postTabOpen: true,
    openList: new Array(),

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
        },
        addOpenList: (state, action) => {
            state.openList.push(action.payload)
        },
        deleteOpenList: (state, action) => {
            state.openList = state.openList.filter((open) => open != action.payload)
        },
        
    },
})

export const postActions = postSlice.actions

export default postSlice.reducer