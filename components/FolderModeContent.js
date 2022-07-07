import { useState } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Link from 'next/link'

import { postActions } from '../reducers/postSlice'

import { FolderBox, OpenFolderBox } from './IconBox'

import folderData from '../folderData'


const Container = styled.div`
    padding: 50px 0 0 10px;

`

const FolderContent = styled.ul`
    margin-left: 10px; 
    
`

const FolderModeContent = props => {

    const dispatch = useDispatch()

    const openFolderList = useSelector((state) => state.post.openFolderList)

    const Folder = props => {
        
        return (
            <li>                
            { openFolderList.includes(props.name) ? 
                <OpenFolderBox onClick={() => {  }}>{ props.name }^^OPEN</OpenFolderBox>
            :
                <FolderBox onClick={() => { }}>{ props.name }</FolderBox>
            }
                                    
            { props.in ?
                <FolderContent>
                    { props.children }
                </FolderContent>
            : null
            }
            </li>
        )
    }

    const LinkFolder = props => {
        return (
            <li>
                <Link href={ '/folder/' + props.name }>
                    <a>
                    { openFolderList.includes(props.name) ? 
                        <OpenFolderBox>{ props.name }^^OPEN</OpenFolderBox>
                    :
                        <FolderBox>{ props.name }</FolderBox>
                    }
                    </a>
                </Link>
            </li>
        )
    }


    return (
        <Container>
            <ul>
                <Folder name='root' inclue={true}>
                    <Folder name='FolderExample'  in={true}>
                        <LinkFolder name='FolderExample2' />
                    </Folder>
                    <Folder name='FolderExample3' in={false} />
                
                </Folder>
            </ul>
        </Container>
    )
}

export default FolderModeContent