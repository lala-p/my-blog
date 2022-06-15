import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { dateFormat } from '../commonFun/date'

import Text, { EllipsisText } from './Text'


const ListContainer = styled.div`
    width: 100%;
    max-width: 800px;

    border-top: 2px solid #FFFFFF;


`

const ListHead = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 5px 35px 5px 10px;
        border-bottom: 1px solid #FFFFFF;
    
    `
    return (
        <Container>
            <Text>번호</Text>
            <Text>제목</Text>
            <Text>날짜</Text>
        </Container>
    )

}

const NoticeLinkBox = props => {
    const Container = styled.div`
        display: flex;
        flex-direction: row;
        margin: 7px 0 7px 0;
        padding : 0 10px 0 10px;

    `
    const NoticeNo = styled.div`
        width: 30px;
        margin-right: 20px;
        text-align: center;
    `

    const Title = styled.span`
        cursor: pointer;

        width: 50vw;
        max-width: 550px;
    `

    const Date = styled.div`
        margin-left: auto;
    `

    return (    
        <Container>
            <NoticeNo>
                <Text>{props.no}</Text>
            </NoticeNo>
            <Title>
                <Link href={'/notice/' + props.no}>
                    <EllipsisText>{props.title}</EllipsisText>  
                </Link>
            </Title>  
            <Date>
                <Text color='#838383'>{props.date}</Text>
            </Date>
        </Container>
    )
} 

const LinkBoxList = props => {

    const Container = styled.ul`
        list-style: none;

    `
    const Box = styled.div`
        border-bottom: 1px solid #838383;
    `

    const list = props.dataList.map((data) => (
        <Container>
            <li>
                <Box>
                    <NoticeLinkBox 
                        no={data.no}
                        title={data.title}
                        date={dateFormat(data.created_date, 0)}
                    />
                </Box>
            </li>
        </Container>

    ))

    return list
}

const NoticeList = props => {

    const currentPage = useSelector((state) => state.notice.currentPage)

    const [slicedList, setSlicedList] = useState(new Array())

    
    useEffect(() => {
    
        const startNo = (currentPage - 1)  * props.limit
        setSlicedList(props.dataList.slice(startNo, startNo + props.limit ))
    }, [currentPage])



    return (
        <ListContainer>
            <ListHead />
            <LinkBoxList dataList={slicedList} />
        </ListContainer>
    )
}


export default NoticeList