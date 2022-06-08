import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    testMode: 'hi'

}

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTestMode: (state, action) => {
            state.testMode = action.payload
        },

        
    },
})

export const testActions = testSlice.actions
export default testSlice.reducer