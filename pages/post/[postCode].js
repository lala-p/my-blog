import { useRouter } from 'next/router'
import styled from 'styled-components'
import PageContainer from '../../components/PageContainer'


const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: 1080px;
    height: 500px;
    margin: auto;
    
    background-color: green;
`

const PostContent = styled.div`
    width: 830px;
    height: 100%;
    background-color: red;
    
`

const Aside = styled.div`
    
    margin-left: auto;
    width: 250px;
    height: 100%;

    background-color: yellow;
`



const PostDetail = () => {

    const router = useRouter()
   

    return (
        <PageContainer menu='post'>
            <Container>
                <PostContent>                
                    { router.query.postCode }
                
                </PostContent>
                <Aside>
                    zxczc
                </Aside>
            </Container>
        </PageContainer>
    )
}

export default PostDetail