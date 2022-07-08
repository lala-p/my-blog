import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    openFolderList: ['root'],

}

const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        folderOpen: (state, action) => {
            state.openFolderList.push(action.payload)
        },
        folderClose: (state, action) => {
            state.openFolderList = state.openFolderList.filter((folder) => folder != action.payload)
        },

        
    },
})

export const folderActions = folderSlice.actions

export default folderSlice.reducer