import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    openFolderList: ['root'],

}

const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        folderOpen: (state, action) => {
            
            const folderArr = action.payload

            for (let index = 0; index < folderArr.length; index++) {
                if (!state.openFolderList.includes(folderArr[index])) {
                    state.openFolderList.push(folderArr[index])
                }                
            }

        },
        folderClose: (state, action) => {
            state.openFolderList = state.openFolderList.filter((folder) => folder != action.payload)
        },

        
    },
})

export const folderActions = folderSlice.actions

export default folderSlice.reducer