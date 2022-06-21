import { useSelector, useDispatch } from 'react-redux'

import PageContainer from '../../components/PageContainer'


const PostHome = () => {

    const postTabOpen = useSelector((state) => state.post.postTabOpen)

    return (
        <PageContainer menu='post'>
            asdasdzxccccccccccccccccccccccccccccccccccccccccccccccccccccccccs
        { postTabOpen ? 
            <div style={{width: '100px', height: '100px', backgroundColor: 'green' }}>on</div>
        : 
            <div style={{width: '100px', height: '100px', backgroundColor: 'red' }}>off</div>
        }
        </PageContainer>
    )
}

export default PostHome