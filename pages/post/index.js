import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { modeActions } from '../../reducers/modeSlice' 

const PostHome = () => {

    const dispatch = useDispatch()

    const currentMode =  useSelector((state) => state.mode.currentMode)

    return (
        <div>
            it's post home. <br />
            <button onClick={() => dispatch(modeActions.setCurrentMode('HAHAHAHAHA!@!@!@'))}>click</button>
            <br />
            {currentMode}
        </div>
    )
}


export default PostHome