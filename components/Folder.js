import styled from 'styled'

const Container = styled.div`


`

const FolderContent = styled.div`
    margin-left: 10px; 

`

const Folder = propst => {


    return (
        <Container>
            { props. }
            <FolderContent>
                { props.children }
            </FolderContent>
        </Container>
    )
}

export default Folder