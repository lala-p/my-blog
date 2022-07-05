import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../../reducers/menuSlice'
import { postActions } from '../../reducers/postSlice'

import PageContainer from '../../components/PageContainer'
import { Text, BoldText, Paragraph } from '../../components/Text'
import { TextLink } from '../../components/SpecialLink'
import { DateBox, WriterBox } from '../../components/IconBox'
import Tag, { TagList } from '../../components/Tag'

import { dateFormat } from '../../commonFun/date'

import postData from '../../postData'


const Container = styled.div`
    display: flex;
    flex-direction: row;

    max-width: 1130px;
    margin: auto;

    
`
const MainContent = styled.div`
    display: block;
    width: 830px;

    margin-right: 30px;
  
    @media( max-width: ${ props => props.subTabOpen ? '1450px': '1250px' } ) {
        margin: auto;

    }    

    @media( max-width: 860px ) {
        padding: 0 15px 0 15px;
        width: 100vw;

    }

`
const SideContent = styled.div`
    min-width: 250px;

    background-color: yellow;

    @media( max-width: ${ props => props.subTabOpen ? '1450px': '1250px' } ) {
        display: none;

    }    
`

const PostContent = styled.div`
    display: block;
    width: 100%;
    height: 100%;

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

export async function getServerSideProps({ query: { postCode } }) {
    return {
        props: {
            postCode,
        },
    }
}

const PostDetail = props => {

    const dispatch = useDispatch()

    const postCode = props.postCode
    const subTabOpen = useSelector((state) => state.menu.subTabOpen)

    useEffect(() => {
        
        dispatch(postActions.setCurrentPostCode(postCode))
        dispatch(menuActions.setCurrentSubTabMode('file'))
        dispatch(menuActions.setSubTabOpen(true))

        console.log(postData)
        console.log(postCode)
        console.log(postData[postCode])
        console.log(postData[postCode].title)
      
    }, [postCode])

        
    return (
        <PageContainer menu='post'>
            <Container subTabOpen={subTabOpen}>
                <MainContent subTabOpen={subTabOpen}>
                    <PostHeader>
                        <BoldText size='35px'>{ postData[postCode].title }</BoldText>
                        <br />
                        <br />
                        <WriterBox>{ postData[postCode].writer }</WriterBox>
                        <br />
                        <DateBox 
                            createdDate={ dateFormat(postData[postCode].createdDate, 6) } 
                            updatedDate={ postData[postCode].updatedDate !== false ? dateFormat(postData[postCode].updatedDate, 6) : false } 
                        />
                        <br />
                        <br />
                        <TagList list={ postData[postCode].tagList } />
                    </PostHeader>
                    <PostBody>
                        { postData[postCode].PostContent() }
                    </PostBody>
                    <PostFooter>
        

                    </PostFooter>
                </MainContent>
                <SideContent subTabOpen={subTabOpen}>
                    sdfsdfsf
                </SideContent>
            </Container>
        </PageContainer>
    )
}

export default PostDetail