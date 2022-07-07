import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

// import folderData from '../folderData'
// import postData from '../postData'

import { Text } from './Text'
import { FileBox, OpenFileBox } from './IconBox'

import { getParentData, getFileListDataByPostCode } from '../commonFun/file'


// const FileLinkBox = props => {
//     return (
//         <Link href={ '/post/' + props.postCode }>
//             <a>
//             { props.open ? 
//                 <OpenFileBox>{ props.children }OPEN</OpenFileBox>
//             :
//                 <FileBox>{ props.children }</FileBox>
//             }                
//             </a>
//         </Link>
//     )
// }

const List = props => {
    
    const list = props.dataList.map((data) => (
        <li>
            <Link href={ '/post/' + data.postCode }>
                <a>
                { props.currentPostCode == data.postCode ? 
                    <OpenFileBox>{ data.title }OPEN</OpenFileBox>
                :
                    <FileBox>{ data.title }</FileBox>
                }                
                </a>
            </Link>

            {/* <FileLinkBox open={ props.currentPostCode == data.postCode } postCode={ data.postCode }>
                { data.title }
            </FileLinkBox> */}
        </li>
    )) 

    return list

}

const Container = styled.div`
    padding: 50px 0 0 10px;

`

const ListContainer = styled.ul`
    display: block;
    margin-left: 10px;
`

const FileList = props => {
    // const currentPostCode = useSelector((state) => state.post.currentPostCode)

    return (
        <Container>
            {/* <Text>{ folderData[postData[currentPostCode].parent].name }</Text> */}
            <Text>{ getParentData(props.currentPostCode).name }</Text>
            <ListContainer>
                {/* <FileList postCodeList={folderData[postData[currentPostCode].parent].childList} current={currentPostCode} /> */}
                <List dataList={ getFileListDataByPostCode(props.currentPostCode) } currentPostCode={ props.currentPostCode } />
            </ListContainer>
        </Container>
    )
}

export default FileList