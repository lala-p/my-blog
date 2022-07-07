import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { menuActions } from '../../reducers/menuSlice'
import { postActions } from '../../reducers/postSlice'

import { PageContainer, Left, Center, MainContainer } from '../../components/page/commonPage'
import { PostContainer, PostHead, PostBody, PostFoot, PostTitle, SideContainer } from '../../components/page/postPage'
import MenuTab from '../../components/MenuTab'
import SubTab from '../../components/SubTab'
import HeadTab from '../../components/HeadTab'
import FileList from '../../components/FileList'
// import { BoldText } from '../../components/Text'
import { TextLink } from '../../components/SpecialLink'
import { DateBox, WriterBox } from '../../components/IconBox'
import { TagList } from '../../components/Tag'

import { dateFormat } from '../../commonFun/date'

import postData from '../../postData'


// const Container = styled.div`
//     display: flex;
//     flex-direction: row;

//     justify-content: center;

// `
// const MainContent = styled.div`
//     display: block;
//     width: 830px;

//     margin-right: 30px;
  
//     @media( max-width: ${ props => props.subTabOpen ? '1450px': '1250px' } ) {
//         margin: auto;

//     }    

//     @media( max-width: 860px ) {
//         padding: 0 15px 0 15px;
//         width: 100vw;

//     }

// `
// const SideContent = styled.div`
//     width: 250px;

//     background-color: yellow;

//     @media( max-width: ${ props => props.subTabOpen ? '1450px': '1250px' } ) {
//         display: none;

//     }    
// `

// const PostContent = styled.div`
//     display: block;
//     width: 100%;
//     height: 100%;

// `
// const PostHeader = styled.div`
//     margin-top: 30px;

// `

// const PostBody = styled.div`
//     margin-top: 20px;

// `

// const PostFooter = styled.div`
//     margin-top: 50px;    

// `

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
    const subTabOpenState = useSelector((state) => state.menu.subTabOpenState)

    useEffect(() => {
        
        // dispatch(postActions.setCurrentPostCode(postCode))
        // dispatch(menuActions.setCurrentSubTabMode('file'))
        dispatch(menuActions.subTabOpen())

        console.log(postData)
        console.log(postCode)
        console.log(postData[postCode])
        console.log(postData[postCode].title)
      
    }, [postCode])

        
    return (
        <PageContainer>
            <Left>
                <MenuTab activeMenu={'post'} />
                <SubTab open={ subTabOpenState }>
                    <FileList currentPostCode={ postCode } />
                </SubTab>
            </Left>
            <Center subTabOpen={ subTabOpenState }>
                <HeadTab />
                <MainContainer>
                    <PostContainer>
                        <PostHead>
                            <PostTitle>{ postData[postCode].title }</PostTitle>
                            <WriterBox>{ postData[postCode].writer }</WriterBox>
                            <DateBox 
                                createdDate={ dateFormat(postData[postCode].createdDate, 6) } 
                                updatedDate={ postData[postCode].updatedDate !== false ? dateFormat(postData[postCode].updatedDate, 6) : false } 
                            />
                            <TagList list={ postData[postCode].tagList } />
                        </PostHead>
                        <PostBody>
                            { postData[postCode].PostContent() }
                        </PostBody>
                        <PostFoot>
                            
                        </PostFoot>
                    </PostContainer>
                    <SideContainer subTabOpen={ subTabOpenState }>
                    asasdasdasdasdasd
                    </SideContainer>
                </MainContainer>
            </Center>
        </PageContainer>
        // <PageContainer menu='post'>
        //     <Container subTabOpen={subTabOpen}>
        //         <MainContent subTabOpen={subTabOpen}>
        //             <PostHeader>
        //                 <BoldText size='35px'>{ postData[postCode].title }</BoldText>
        //                 <br />
        //                 <br />
        //                 <WriterBox>{ postData[postCode].writer }</WriterBox>
        //                 <br />
        //                 <DateBox 
        //                     createdDate={ dateFormat(postData[postCode].createdDate, 6) } 
        //                     updatedDate={ postData[postCode].updatedDate !== false ? dateFormat(postData[postCode].updatedDate, 6) : false } 
        //                 />
        //                 <br />
        //                 <br />
        //                 <TagList list={ postData[postCode].tagList } />
        //             </PostHeader>
        //             <PostBody>
        //                 { postData[postCode].PostContent() }
        //             </PostBody>
        //             <PostFooter>
        

        //             </PostFooter>
        //         </MainContent>
        //         <SideContent subTabOpen={subTabOpen}>
        //             sdfsdfsf
        //         </SideContent>
        //     </Container>
        // </PageContainer>
    )
}

// .container {
//     display: flex; 
//     justify-content: center;
//     background-color: blue;
//   }
  
//   .box {
//       display: inline-block;
//       line-height: 100px;
//       text-align: center;
//       font-size: 20px;
//   }
  
//   .box1 {
//       width: 300px;
//       height: 100px;
    
//       background-color: #ff5544;
//       margin-right: 10px;
//   }
  
//   .box2 {
//       width: 100px;
//       height: 100px;
//       background-color: #64acff;
//   }

export default PostDetail