import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentPage: 1,
}

const noticeSlice = createSlice({
	name: 'notice',
	initialState,
	reducers: {
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload
		},
	},
})

export const noticeActions = noticeSlice.actions
export default noticeSlice.reducer
