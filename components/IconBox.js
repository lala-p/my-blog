import styled from 'styled-components'
import Image from 'next/image'

import { Text, BoldText } from './Text'
import SelectNone from './SelectNone'


export const DateBox = props => {

    const Box = styled.div`
        display: inline-flex;
        flex-direction: row;
        align-items: center;

    `

    const CreatedDateBox = props => {

        const ImageBox = styled.div`
            position: relative;  
            width: 16px;
            height: 16px;
            top: 1px;
            margin-right: 10px;
        `
        
        return (
            <Box title='posted_date'>
                <ImageBox>
                    <SelectNone>
                        <Image src={props.img} layout='fill' objectFit='cover' />
                    </SelectNone>
                </ImageBox>
                <Text>{props.children}</Text>
            </Box>
        )
    }

    const UpdatedDateBox = props => {
        
        const ImageBox = styled.div`
            position: relative;  
            width: 14px;
            height: 14px;
            top: 1px;
            margin-right: 12px;
        `

        return (
            <Box title='updated_date'>
                <ImageBox>
                    <SelectNone>
                        <Image src={props.img} layout='fill' objectFit='cover' />
                    </SelectNone>
                </ImageBox>
                <Text>{props.children}</Text>
            </Box>
        )
    }

    const Container = styled.div`
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

    `
    return (
        <Container>
            <CreatedDateBox img='/image/clock24.png'>{ props.createdDate }</CreatedDateBox>
            { props.updatedDate != false ?
                <div>
                    <SelectNone>
                        <BoldText>&nbsp;&nbsp;·&nbsp;&nbsp;</BoldText>
                    </SelectNone>
                    <UpdatedDateBox img='/image/update24.png'>{ props.updatedDate }</UpdatedDateBox>
                </div>
            
                : null
            }
        </Container>
    )
}



export const WriterBox = props => {

    const Box = styled.div`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    `
    
    const ImageBox = styled.div`
        position: relative;  
        width: 14px;
        height: 14px;
        top: 1px;
        margin-right: 12px;
    `

    return (
        <Box>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/write24.png' layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{props.children}</Text>
        </Box>
    )
}


export const CloseFolderBox = props => {
    const Box = styled.div`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    `
    
    const ImageBox = styled.div`
        position: relative;  
        width: 14px;
        height: 14px;
        top: 1px;
        margin-right: 12px;
    `

    return (
        <Box>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/write24.png' layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{props.children}</Text>
        </Box>
    )
}

export const OpenFolderBox = props => {
    const Box = styled.div`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    `

    const ImageBox = styled.div`
        position: relative;  
        width: 14px;
        height: 14px;
        top: 1px;
        margin-right: 12px;
    `

    return (
        <Box>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/write24.png' layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{props.children}</Text>
        </Box>
    )
}


export const FileBox = props => {
    const Box = styled.div`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    `

    const ImageBox = styled.div`
        position: relative;  
        width: 14px;
        height: 14px;
        top: 1px;
        margin-right: 12px;
    `

    return (
        <Box>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/write24.png' layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{props.children}</Text>
        </Box>
    )
}

export const OpenFileBox = props => {
    const Box = styled.div`
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    `
    
    const ImageBox = styled.div`
        position: relative;  
        width: 14px;
        height: 14px;
        top: 1px;
        margin-right: 12px;
    `

    return (
        <Box>
            <ImageBox>
                <SelectNone>
                    <Image src='/image/write24.png' layout='fill' objectFit='cover' />
                </SelectNone>
            </ImageBox>
            <Text>{props.children}</Text>
        </Box>
    )
}



