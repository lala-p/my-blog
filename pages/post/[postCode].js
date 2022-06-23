import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import PageContainer from '../../components/PageContainer'


const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 75vw;
    max-width: 1080px;

    margin: auto;
    padding-right: 300px;

    background-color: green;

    ${ props => props.postTabOpen ? 
        `
        @media( max-width: 1350px ) {
            width: 70vw;
            padding-right: 0;
        }
        
        @media( max-width: 1150px ) {
            width: 65vw;
        }
        `

    :   
    
        `
        @media( max-width: 1150px ) {
            width: 85vw;
            padding-right: 0;
        }
        
        `    
    }
    

    @media( max-width: 960px ) {
        width: 95vw;
    }
`

const PostContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;

    word-wrap: break-word;
    
    
`

const Aside = styled.div`
    
    margin-left: auto;
    min-width: 300px;
    height: 100%;

    background-color: yellow;

    @media( max-width: ${ props => props.postTabOpen ? '1350px': '1150px' } ) {
        display: none;
    }    

`

const PostDetail = () => {

    const router = useRouter()
    const postTabOpen = useSelector((state) => state.post.postTabOpen)


    return (
        <PageContainer menu='post'>
            <Container postTabOpen={postTabOpen}>
                <PostContent postTabOpen={postTabOpen}>                
                    { router.query.postCode }
                    zxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxczxcvzxcvzxcvzxc
                </PostContent>
                <Aside postTabOpen={postTabOpen}>
                    zxczc
                </Aside>
            </Container>
        </PageContainer>
    )
}

export default PostDetail