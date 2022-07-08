import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import rootReducer from '../reducers'


const configureStore = () => {
    const store = createStore(rootReducer)
    return store
}

const wrapper = createWrapper(configureStore)

export default wrapper