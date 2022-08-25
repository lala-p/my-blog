import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	openFolderList: ['root'],
	currentPage: 1,
}

const folderSlice = createSlice({
	name: 'folder',
	initialState,
	reducers: {
		folderOpen: (state, action) => {
			const folderArr = action.payload
			let newOpenFolderList = [...state.openFolderList]

			for (let index = 0; index < folderArr.length; index++) {
				if (!newOpenFolderList.includes(folderArr[index])) {
					newOpenFolderList.push(folderArr[index])
				}
			}

			state.openFolderList = [...newOpenFolderList]
		},
		folderClose: (state, action) => {
			state.openFolderList = state.openFolderList.filter((folder) => folder != action.payload)
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
	},
})

export const folderActions = folderSlice.actions

export default folderSlice.reducer
