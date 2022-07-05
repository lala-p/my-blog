import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import folderData from '../folderData'
import postData from '../postData'


import { Text } from './Text'
import { FileBox, OpenFileBox } from './IconBox'


const Container = styled.div`
    padding: 50px 0 0 10px;

`

const FileLinkBox = props => {
    return (
        <Link href={ '/post/' + props.postCode }>
            <a>
            { props.open ? 
                <OpenFileBox>{ props.children }OPEN</OpenFileBox>
            :
                <FileBox>{ props.children }</FileBox>
            }                
            </a>
        </Link>
    )
}

const FileList = props => {
    
    const list = props.postCodeList.map((postCode) => (
        <li>
            <FileLinkBox open={props.current == postCode} postCode={postCode}>
                {postData[postCode].title}
            </FileLinkBox>
        </li>
    )) 

    return list

}

const ListContainer = styled.ul`
    display: block;
    margin-left: 10px;
`

export async function getServerSideProps({ query: { postCode } }) {
    return {
        props: {
            postCode,
        },
    }
}
const FileModeContent = props => {
    const currentPostCode = useSelector((state) => state.post.currentPostCode)

    return (
        <Container>
            <Text>{ folderData[postData[currentPostCode].parent].name }</Text>
            <ListContainer>
                <FileList postCodeList={folderData[postData[currentPostCode].parent].childList} current={currentPostCode} />
            </ListContainer>
        </Container>
    )
}

export default FileModeContent