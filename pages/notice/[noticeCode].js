import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { noticeActions } from '../../reducers/noticeSlice'

import PageContainer from '../../components/PageContainer'
import MenuTab from '../../components/MenuTab'
import NoticeTitle from '../../components/NoticeTitle'
import DateBox, { UpdateDateBox } from '../../components/DateBox'
import Text, { EllipsisText } from '../../components/Text'
import { TextLink, TextBoxLink } from '../../components/SpecialLink'
import Paragraph from '../../components/Paragraph'


const isNoticeCode = () => {
    return true
}

const NoticeContainer = styled.div`
    @media( max-width: 1080px ) {
        padding: 50px 0 0 0;
        
    }
    
    @media( max-width: 735px ) {
        width: 92%;
        padding: 30px 0 0 0;
        
    }

    @media( max-width: 512px ) {
        width: 95%;
        padding: 15px 0 0 0;
        
    }

    width: 90%;
    max-width: 1080px;
    margin: auto;
    padding: 60px 0 0 0;

`

const NoticeHeader = styled.div`
    padding-bottom: 20px;
    border-bottom: 1px solid #FFFFFF;

`
const NoticeSection = styled.div`
    min-height: 500px;
    padding: 50px 0 50px 0;
    border-bottom: 3px solid #FFFFFF;

`

const NoticeFooter = styled.div`
    height: 300px;
    padding: 50px 0 50px 0;
    
`


const DateContainer = styled.div`
    @media( max-width: 512px ) {
        margin-top: 30px;
    }

    margin-top: 40px;

`

const NoticeNavContainer = styled.div`
    padding: 7px 10px 7px 10px;
    border: 1px solid #FFFFFF;

`

const Previous = props => {
    
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        padding-bottom: 5px;
        border-bottom: 1px solid #FFFFFF;
    `

    const Box1 = styled.div`
    @media( max-width: 1080px ) {
        width: 45vw;

    }
    
    width: 700px;
    
    `

    const Box2 = styled.div`
        margin-left: auto;
    `

    return (
        <Container>
            <Text size='14px'>이전글&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Text>
            <Box1>
                <Link href={props.link}>
                    <EllipsisText size='14px' style={{cursor: 'pointer'}}>{props.children}</EllipsisText>
                </Link>
            </Box1>
            <Box2>
                <Text size='14px'>{props.date}</Text>
            </Box2>
            

        </Container>
    )

}

const Next = props => {

    const Container = styled.div`
        display: flex;
        flex-direction: row;
        padding-top: 5px;    
    
    `

    const Box1 = styled.div`
        @media( max-width: 1080px ) {
            width: 45vw;

        }
        
        width: 700px;
    
    `

    const Box2 = styled.div`
        margin-left: auto;
    `

    return (
        <Container>
            <Text size='14px'>다음글&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Text>
            <Box1>
                <Link href={props.link}>
                    <EllipsisText size='14px' style={{cursor: 'pointer'}}>{props.children}</EllipsisText>
                </Link>
            </Box1>
            <Box2>
                <Text size='14px'>{props.date}</Text>
            </Box2>
            
        </Container>
    )
}


const Notice = () => {

    const router = useRouter()
    const noticeCode = router.query.noticeCode
    
    const dispatch = useDispatch()
    
    const currentNoticeMode = useSelector((state) => state.notice.currentMode)

    useEffect(() => {
        if (!router.isReady) return;

        console.log(noticeCode)
        dispatch(noticeActions.setCurrentNoticeMode('detail'))
        dispatch(noticeActions.setCurrentNoticeCode(noticeCode))
    
    }, [router.isReady])


    return (
        <PageContainer menu='notice'>
            <NoticeContainer>
                <NoticeHeader>
                    <NoticeTitle>특수건강진단 기관 현황(`22.6.9. 기준)xxxxx xxxx xxxxxxxx xxxxx</NoticeTitle>
                    <DateContainer>
                        <div>
                            <DateBox></DateBox>
                        </div>
                        <UpdateDateBox></UpdateDateBox>
                    </DateContainer>
                </NoticeHeader>
                <NoticeSection>
                    <Paragraph>
                        <Text>[해상도]</Text>
                        <Text>해상도는 쉽게 말하면 한 화면에 몇 개의 점이 찍히는가입니다.</Text>
                        <Text>1픽셀 x 1픽셀 크기를 하나의 점으로 보고, 그런 픽셀이 가로 1920개, 세로 1080개 들어가 총 207만 3천 6백 개의 점이 찍혀있는 것입니다.</Text>
                        <Text>같은 해상도라도 모니터의 크기가 다를 수 있습니다. 32인치의 점과 13인치의 점이 크기만 다를 뿐이겠죠. </Text>
                        <Text>그러니 같은 그림을 모니터 크기에 따라 늘렸다 줄였다 해서 보는 것이라고 생각하면 됩니다.</Text>    
                    </Paragraph>
                </NoticeSection>
                <NoticeFooter>
                    <NoticeNavContainer>
                        <Previous link='/notice' date='2022-11-11'>이전글 그러니까 어쩌고 저쩌고 먼아링;ㅓ란ㅁ;ㅣ라ㅓ;ㅣㄴ알;ㅁ이ㅏsjf</Previous>
                        <Next link='/notice' date='2022-10-02'>asdfsadfadfaxsdfasdfasdfsadfadfaxsdfasdfasdfsadfadfaxsdfasdfasdfsadfadfaxsdfasdfasdfsaddfsadfadfaxsdfasdfasdfsadfadfaxsdfasdfasdfsadfadfaxsdfasdf</Next>
                    </NoticeNavContainer>
                    {/* <TextBoxLink link='/notice'>목록</TextBoxLink> */}
                </NoticeFooter>
            </NoticeContainer>
        </PageContainer>
    )
}


export default Notice