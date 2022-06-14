import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { noticeActions } from '../../reducers/noticeSlice'

import noticeData from '../../noticeData'

import { dateFormat } from '../../commonFun/date'

import PageContainer from '../../components/PageContainer'
import MenuTab from '../../components/MenuTab'
import NoticeTitle from '../../components/NoticeTitle'
import DateBox, { UpdateDateBox } from '../../components/DateBox'
import Text, { EllipsisText } from '../../components/Text'
import { TextLink, ListIconTextBoxLink } from '../../components/SpecialLink'
import Paragraph from '../../components/Paragraph'
import SelectNone from '../../components/SelectNone'


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
    height: 200px;
    padding: 40px 0 0 0;

    
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
        width: 45vw;
        max-width: 550px;
    
    `

    const Box2 = styled.div`
        margin-left: auto;
    `

    return (
        <Container>
            <SelectNone>
                <Text size='14px'>이전글&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Text>
            </SelectNone>
            <Box1>
                <Link href={props.link}>
                    <EllipsisText size='14px' style={{cursor: 'pointer'}}>{props.children}</EllipsisText>
                </Link>
            </Box1>
            <Box2>
                <Text size='14px'>{dateFormat(props.date, 0)}</Text>
            </Box2>
            

        </Container>
    )
}

const PreviousNull = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        padding-bottom: 5px;
        border-bottom: 1px solid #FFFFFF;
    `

    const Box2 = styled.div`
        margin-left: auto;
    `

    return (
        <Container>
            <SelectNone>
                <Text color='#878787' size='14px'>이전글&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Text>
            </SelectNone>
            <Box2>
                <Text color='#878787' size='14px'>0000-00-00</Text>
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
        width: 45vw;
        max-width: 550px;
    
    `

    const Box2 = styled.div`
        margin-left: auto;
    `

    return (
        <Container>
            <SelectNone>
                <Text size='14px'>다음글&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Text>
            </SelectNone>
            
            <Box1>
                <Link href={props.link}>
                    <EllipsisText size='14px' style={{cursor: 'pointer'}}>{props.children}</EllipsisText>
                </Link>
            </Box1>
            <Box2>
                <Text size='14px'>{dateFormat(props.date, 0)}</Text>
            </Box2>
            
        </Container>
    )
}

const NextNull = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        padding-top: 5px;    

    `

    const Box2 = styled.div`
        margin-left: auto;
    `

    return (
        <Container>
            <SelectNone>
                <Text color='#878787' size='14px'>다음글&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</Text>
            </SelectNone>
            <Box2>
                <Text color='#878787' size='14px'>0000-00-00</Text>
            </Box2>
        </Container>
    )
}


const Notice = () => {

    const router = useRouter()

    const dispatch = useDispatch()
    
    const noticeCode = parseInt(router.query.noticeCode)
    const currentNoticeMode = useSelector((state) => state.notice.currentMode)
    
    const [currentNoticeData, setCurrentNoticeData] = useState(null)    
    const [previousNoticeData, setPreviousNoticeData] = useState(null)
    const [nextNoticeData, setNextNoticeData] = useState(null)


    useEffect(() => {
        if (!router.isReady) return;

        dispatch(noticeActions.setCurrentNoticeMode('detail'))
        dispatch(noticeActions.setCurrentNoticeCode(noticeCode))
        setCurrentNoticeData(noticeData[noticeCode  - 1])
        
        if (noticeCode != 0 && noticeCode != 1) {
            setPreviousNoticeData(noticeData[noticeCode - 2])
        } else {
            setPreviousNoticeData(null)
        }

        if (noticeCode != noticeData.length) {
            setNextNoticeData(noticeData[noticeCode])
        } else {
            setNextNoticeData(null)
        }


    }, [router, noticeCode])

    return (
        <PageContainer menu='notice'>
        { currentNoticeData != null ?
            <NoticeContainer>
                <NoticeHeader>
                    <NoticeTitle>{currentNoticeData.title}</NoticeTitle>
                    <DateContainer>
                        <div>
                            <DateBox date={currentNoticeData.created_date} />
                        </div>
                        { currentNoticeData.updated_date != null ?
                            <UpdateDateBox date={currentNoticeData.updated_date} />
                        :
                            null
                        }
                    </DateContainer>
                </NoticeHeader>
                <NoticeSection>
                    { currentNoticeData.notice_content() }
                </NoticeSection>
                <NoticeFooter>
                    <NoticeNavContainer>
                    { previousNoticeData != null ?     
                        <Previous link={'/notice/'+(noticeCode - 1)} date={previousNoticeData.created_date}>{previousNoticeData.title}</Previous>
                        :
                        <PreviousNull />
                    }
                    { nextNoticeData != null ?     
                        <Next link={'/notice/'+(noticeCode + 1)} date={nextNoticeData.created_date}>{nextNoticeData.title}</Next>
                        :
                        <NextNull />
                    }   
                    </NoticeNavContainer>
                    <div style={{textAlign: 'center', paddingTop: '25px', paddingBottom: '10px'}}>
                        <ListIconTextBoxLink link='/notice'>목록</ListIconTextBoxLink>
                    </div>
                </NoticeFooter>
            </NoticeContainer>
            :
            null
        }
        </PageContainer>
    )
}


export default Notice