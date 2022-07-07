import styled from 'styled-components'

import { FolderBox, OpenFolderBox } from './IconBox'

const Container = styled.div`

`

const FolderContent = styled.ul`
    margin-left: 10px; 
    
`

const Folder = props => {


    return (
        <Container>
            { props.open ? 
                <OpenFolderBox>{ props.folderName }^^OPEN</OpenFolderBox>
            :
                <FolderBox>{ props.folderName }</FolderBox>
            }
            <FolderContent>
                { props.children }
            </FolderContent>
        </Container>
    )
}

export default Folder