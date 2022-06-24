import styled from 'styled-components'


const Tag = props => {
    const Box = styled.div`
        margin: 5px;
        padding: 5px 15px 5px 15px;

        background-color: ${ props => props.theme.color1 };
        color: ${ props => props.theme.color5 };
        
        border-radius: 15px;
        cursor: pointer;
    `

    return (
        <Box onClick={() => { alert('afafasdf') }}>
            { props.children }
        </Box>
    )
}


export const TagList = props => {
    const List = styled.ul`
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap;

    `

    return (
        <List>
        {
            props.list.map((data) => (
                <li key={data}>   
                    <Tag>{data}</Tag>
                </li>
            ))
        }
        </List>
    )
} 

export default Tag
