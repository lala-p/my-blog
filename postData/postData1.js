import React from 'react'
import styled from 'styled-components'

import { Text, Paragraph } from '../components/Text'


let postData1 = new Object()


postData1['FileExample1'] = {
    type: 'file',
    title: 'hello...?',
    subTitle: 'it\'s me.',
    writer: 'lala-p', 
    createdDate: new Date('2022-07-01 17:00:00'),
    updatedDate: false,
    tagList: ['react', 'FileExample1', 'useCallback', '후기', 'react', 'react', 'react', 'react'],
    PostContent: () => { 
        return (
            <div>
                <Paragraph>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                    <Text>FileExamsdfgsdfgsdfgsdfgple1</Text>
                </Paragraph>                
            </div>
        )
    },   
    tableOfContents: [
        { contents: '', id: '', sub: false }, 
        { contents: '', id: '', sub: false },
        { contents: '', id: '', sub: true },
        { contents: '', id: '', sub: false },
    ],
    parent: 'FolderExample',
}

postData1['FileExample2'] = {
    type: 'file',
    title: 'asdfsadf',
    subTitle: '2222222222222222222222222',
    writer: 'lala-p',
    createdDate: new Date('2022-07-01 18:00:00'),
    updatedDate: new Date('2022-07-03 17:00:00'),
    tagList: ['nextJs', 'useState', '후기', 'useCallback'],
    PostContent: () => {
        return (
            <div>
                <Text>FileExample2</Text>
            </div>
        )
    },
    tableOfContents: [
        { contents: '', id: '', sub: false }, 
        { contents: '', id: '', sub: true },
        { contents: '', id: '', sub: true },
        { contents: '', id: '', sub: true },
    ],
    parent: 'FolderExample',
}


export default postData1