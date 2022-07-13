import styled from 'styled-components'
import Link from 'next/link'


// const ContainerBox = styled.div`

// `

const NoticeLinkBox = props => {

    return (
        <Link href='/post'>
            <div>
                @{ props.no } # { props.title }
            </div>
        </Link>
    )
}


export const NoticeLinkBoxList = props => {
    return (
        <ul>
        {
            props.dataList.map((data, index) => (
                <li key={index}>
                    <NoticeLinkBox no={ data.no } title={ data.title } />
                </li>
            ))
        }
        </ul>
    )
}


export default NoticeLinkBox