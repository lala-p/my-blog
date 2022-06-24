import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Image from 'next/image'

import PageContainer from '../../components/PageContainer'
import { Text, BoldText, Paragraph } from '../../components/Text'
import { TextLink } from '../../components/SpecialLink'
import { DateBox, WriterBox } from '../../components/IconBox'
import Tag, { TagList } from '../../components/Tag'


const Container = styled.div`
    display: flex;
    flex-direction: row;

    width: 880px;

    margin: auto;

    // background-color: green;

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
        @media( max-width: 1250px ) {
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
    display: block;
    width: 100%;
    height: 100%;
    
    
    margin: auto;
    
    // background-color: red;

    
`
const PostHeader = styled.div`

    margin-top: 30px;

`

const PostBody = styled.div`
    margin-top: 20px;

`

const PostFooter = styled.div`
    margin-top: 50px;    

`

const Aside = styled.div`
    position: fixed;
    top: 100px;
    margin-left: 880px;

    width: 270px;
    height: 100%;
    

    background-color: yellow;

    @media( max-width: ${ props => props.postTabOpen ? '1350px': '1250px' } ) {
        display: none;
    }    

`

const tags = ['bbbbb', 'sdsdsda', '2323', 'qweqweqwe', 'asdfasdfdfdf','23ㅌ3213', 'ccccccccc', '그리고']

const PostDetail = () => {

    const router = useRouter()

    const postCode = router.query.postCode
    const postTabOpen = useSelector((state) => state.post.postTabOpen)


    return (
        <PageContainer menu='post'>
            <Container postTabOpen={postTabOpen}>
                <PostContent postTabOpen={postTabOpen}>                
                    <PostHeader>
                        <BoldText size='35px'>React useCallbak 이해하기</BoldText>
                        <br />
                        <br />
                        <WriterBox>하ㅏㄴ아s</WriterBox>
                        <br />
                        <DateBox createdDate='2022년 10월 10일' updatedDate='2022년 10월 10일' />
                        <br />
                        <br />
                        <TagList list={tags} />
                    </PostHeader>
                    <PostBody>
                        <TextLink link='/search'>하하하ㅏ</TextLink>
                        <Text>다들 2주라는 짧은 시간 내에 최대한 많은 결과물을 보여주고 싶어했던 심리가 컸던 것 같다.</Text>

                    </PostBody>
                    <PostFooter>
        

                    </PostFooter>
                </PostContent>
                <Aside postTabOpen={postTabOpen}>
                    zxczc
                </Aside>
            </Container>
        </PageContainer>
    )
}

export default PostDetail