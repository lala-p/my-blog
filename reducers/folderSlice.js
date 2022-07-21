import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'


const initialState = {
    openFolderList: ['root'],

}

const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        folderOpen: (state, action) => {
            
            const folderArr = action.payload
            let newOpenFolderList = _.cloneDeep(state.openFolderList)

            for (let index = 0; index < folderArr.length; index++) {
                if (!newOpenFolderList.includes(folderArr[index])) {
                    newOpenFolderList.push(folderArr[index])
                }                
            }

            state.openFolderList = _.cloneDeep(newOpenFolderList)
        },
        folderClose: (state, action) => {
            state.openFolderList = state.openFolderList.filter((folder) => folder != action.payload)
        },

        
    },
})

export const folderActions = folderSlice.actions

export default folderSlice.reducer