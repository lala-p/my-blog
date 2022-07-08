import styled from 'styled-components'


export const PostContainer = styled.div`
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

export const PostHead = styled.div`
    margin-top: 30px;

`

export const PostBody = styled.div`
    margin-top: 20px;
`

export const PostFoot = styled.div`
    margin-top: 50px;    

`

export const PostTitleBox = styled.div`

`

export const PostDataBox = styled.div`

`

export const TagBox = styled.div`

`

export const SideContainer = styled.div`
    width: 250px;

    background-color: yellow;

    @media( max-width: ${ props => props.subTabOpen ? '1450px': '1250px' } ) {
        display: none;

    }    

`
