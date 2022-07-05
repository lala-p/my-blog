import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    currentPostCode: 'not',
    openFolderList: new Array(),

}


const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setCurrentPostCode: (state, action) => {
            state.currentPostCode = action.payload
        },
        addOpenList: (state, action) => {
            state.openFolderList.push(action.payload)
        },
        deleteOpenList: (state, action) => {
            state.openFolderList = state.openFolderList.filter((openFolder) => open != action.payload)
        },
        
    },
})

export const postActions = postSlice.actions

export default postSlice.reducer