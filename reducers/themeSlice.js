import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    currentTheme: 'night',

}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload
        } 

        
    },
})

export const themeAction = themeSlice.actions

export default themeSlice.reducer