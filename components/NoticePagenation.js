import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { noticeActions } from '../reducers/noticeSlice' 

import SelectNone from './SelectNone'
import Text from './Text'



const NPContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;


`


const PreviousPagesButton = props => {
    const Container = styled.div`
        ${!props.isFirstPages ? 'cursor: pointer' : 'visibility: hidden'};

    `
    const ImageBox = styled.div`
        position:relative;
        
        min-width: 16px;
        min-height: 16px;

        max-width: 16px;
        max-height: 16px;


    `

    return (
        <Container onClick={!props.isFirstPages ? props.do : null}>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/left64.png' layout='fill' objectFit='cover' alt='left64' />
                </SelectNone>
            </ImageBox>
        </Container>
    )    
}


const NextPagesButton = props => {
    const Container = styled.div`
        ${!props.isLastPages ? 'cursor: pointer' : 'visibility: hidden'};

    `

    const ImageBox = styled.div`
        position:relative;
        
        min-width: 16px;
        min-height: 16px;

        max-width: 16px;
        max-height: 16px;

        
    `
    
    return (
        <Container onClick={!props.isLastPages ? props.do : null}>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/right64.png' layout='fill' objectFit='cover' alt='right64' />
                </SelectNone>
            </ImageBox>


        </Container>
    )
}


const FirstPageButton = props => {

    

    const Container = styled.div`
        ${!props.isFirstPage ? 'cursor: pointer' : 'visibility: hidden'};

    `

    const ImageBox = styled.div`
        position:relative;
        
        min-width: 16px;
        min-height: 16px;

        max-width: 16px;
        max-height: 16px;

    `
    
    return (
        <Container onClick={!props.isFirstPage ? props.do : null}>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/double_left64.png' layout='fill' objectFit='cover' alt='double_left64' />
                </SelectNone>
            </ImageBox>


        </Container>
    )
}


const LastPageButton = props => {

    const Container = styled.div`
        ${!props.isLastPage ? 'cursor: pointer' : 'visibility: hidden'};
    `

    const ImageBox = styled.div`
        position:relative;
        
        min-width: 16px;
        min-height: 16px;

        max-width: 16px;
        max-height: 16px;
    
    `

    return (
        <Container onClick={!props.isLastPage ? props.do : null}>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/double_right64.png' layout='fill' objectFit='cover' alt='double_right64' />
                </SelectNone>
            </ImageBox>
        </Container>
    )
}


const PageNumContainer = styled.ul`
    list-style: none;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin-left: 15px;
    margin-right: 15px;


`

const PageNumButton = props => {

    const dispatch = useDispatch()

    const currentPage = useSelector((state) => state.notice.currentPage)

    const Container = styled.li`
        width: 30px;
        margin-left: 2px;
        margin-right: 2px;

        text-align: center;

        cursor: pointer;

    `

    const NumberBox = styled.div`
        color: white;
                
    `

    const NumberActiveBox = styled.div`
        color: #323232;
        font-weight: 550;
        background-color: white;
    `

    return (
        <Container onClick={() => { dispatch(noticeActions.setCurrentPage(props.pageNum)) }}>
        { currentPage == props.pageNum ? 
            <NumberActiveBox>
                <SelectNone>
                    {props.pageNum}
                </SelectNone>      
            </NumberActiveBox>
        :
            <NumberBox>
                <SelectNone>
                    {props.pageNum}
                </SelectNone>      
            </NumberBox>


        }
        </Container>
    )
}

const PageNumList = props => {
    
    const list = props.pages.map((page) => (
        <PageNumButton pageNum={page} />
    ))


    return list
}

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 40px;

`

const getPages = (currentPageNum, lastPageNum, limit) => {
    let pages = new Array()
    
    const startNum = currentPageNum % limit == 0 ? currentPageNum - limit + 1 : currentPageNum - (currentPageNum % limit) + 1

    for (let num = startNum; num < startNum + limit; num++) {
        if (num > lastPageNum) {
            break;
        }
        pages.push(num)
    }

    return pages
}


const NoticePagenation = props => {
    
    const dispatch = useDispatch()

    const currentPage = useSelector((state) => state.notice.currentPage)
    const pages = getPages(currentPage, props.lastPage, props.pageLimit)

    return (
        <NPContainer>
            <Box>
                <FirstPageButton isFirstPage={currentPage == 1} do={() => { dispatch(noticeActions.setCurrentPage(1)) }} />
                <PreviousPagesButton isFirstPages={pages.includes(1)} do={() => { dispatch(noticeActions.setCurrentPage(pages[0] - 1)) }} />
            </Box>
            <PageNumContainer>
                <PageNumList pages={pages} />
            </PageNumContainer>
            <Box>
                <NextPagesButton isLastPages={pages.includes(props.lastPage)} do={() => { dispatch(noticeActions.setCurrentPage(pages[pages.length - 1] + 1)) }} />
                <LastPageButton isLastPage={currentPage == props.lastPage} do={() => { dispatch(noticeActions.setCurrentPage(props.lastPage)) }} />
            </Box>
        </NPContainer>
    )

}


export default NoticePagenation

