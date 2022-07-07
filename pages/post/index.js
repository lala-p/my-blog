import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { menuActions } from '../../reducers/menuSlice'

import PageContainer from '../../components/PageContainer'


const PostHome = () => {

    const dispatch = useDispatch()

    const postTabOpen = useSelector((state) => state.post.postTabOpen)

    
    useEffect(() => {
        dispatch(menuActions.setCurrentSubTabMode('folder'))
        dispatch(menuActions.setSubTabOpen(true))
    }, [])

    return (
        <PageContainer menu='post'>
            asdasdzxccccccccccccccccccccccccccccccccccccccccccccccccccccccccs
        
        </PageContainer>
    )
}

export default PostHome