import styled from 'styled-components'
import Image from 'next/image'

import SelectNone from './SelectNone'


// base components
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const ContainerBox = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;

`

const ImageBox = styled.div`
    position: relative; 
    top: ${ props => props.top || '0px' };

    width: ${ props => props.width || '16px' };
    height: ${ props => props.height || '16px' };

    margin-right: ${ props => props.right || '0px' };

`

const Text = styled.span`
    font-size: ${ props => props.size || '18px' };
    color: ${ props => props.color || props.theme.color3 };

`

const IconText = props => {
    return (
        <ContainerBox>
            <ImageBox width={ props.width } height={ props.height } top={ props.top } right={ props.right }>
                <SelectNone>
                    <Image src={ props.image } layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{ props.children }</Text>
        </ContainerBox>
    )
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


export const WriterIconText = props => {
    return (
        <IconText image='' width='14px' height='14px' top='1px' right='12px'>
            { props.children }
        </IconText>
    )
}

export const ClockIconText = props => {
    return (
        <ContainerBox>
            <ImageBox width='16px' height='16px' top='1px' right='10px'>
                <SelectNone>
                    <Image src='' layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{ props.children }</Text>
        </ContainerBox>
    )
}

export const UpdateIconText = props => {
    return (
        <ContainerBox>
            <ImageBox width='14px' height='14px' top='1px' right='12px'>
                <SelectNone>
                    <Image src='' layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{ props.children }</Text>
        </ContainerBox>
    )
}

// export const CloscFileIconText = props => {
//     return (
//         <ContainerBox>
//             <ImageBox width='0px' height='0px' top='0px' right='0px'>
//                 <SelectNone>
//                     <Image src='' layout='fill' objectFit='cover' />
//                 </SelectNone>
//             </ImageBox>
//             <Text>{ props.children }</Text>
//         </ContainerBox>
//     )
// }


// export const OpenFileIconText = props => {
//     return (
//         <ContainerBox>
//             <ImageBox width='0px' height='0px' top='0px' right='0px'>
//                 <SelectNone>
//                     <Image src='' layout='fill' objectFit='cover' />
//                 </SelectNone>
//             </ImageBox>
//             <Text>{ props.children }</Text>
//         </ContainerBox>
//     )
// }

// export const CloseFolderIconText = props => {
//     return (
//         <ContainerBox>
//             <ImageBox width='0px' height='0px' top='0px' right='0px'>
//                 <SelectNone>
//                     <Image src='' layout='fill' objectFit='cover' />
//                 </SelectNone>
//             </ImageBox>
//             <Text>{ props.children }</Text>
//         </ContainerBox>
//     )
// }

// export const OpenFolderIconText = props => {
//     return (
//         <ContainerBox>
//             <ImageBox width='0px' height='0px' top='0px' right='0px'>
//                 <SelectNone>
//                     <Image src='' layout='fill' objectFit='cover' />
//                 </SelectNone>
//             </ImageBox>
//             <Text>{ props.children }</Text>
//         </ContainerBox>
//     )
// }