import React from 'react'

import Text from '../components/Text'


const noticeData1 = new Array()

noticeData1.push({
    no: 1,
    title: 'first',
    created_date: new Date('2022-06-01'),
    updated_date: new Date('2022-06-10'),
    notice_content: () => {
        return (
            <div>
                <Text>isFirstNotice</Text>
            </div>
        )
    },
})

noticeData1.push({
    no: 2,
    title: 'f2222222',
    created_date: new Date('2022-06-02'),
    updated_date: new Date('2022-06-09'),
    notice_content: () => {
        return (
            <div>
                <Text>2222222222</Text>
            </div>
        )
    },
})

noticeData1.push({
    no: 3,
    title: 'asdffdfsadfasdfasdfst',
    created_date: new Date('2022-06-03'),
    updated_date: null,
    notice_content: () => {
        return (
            <div>
                <Text>3333333333333333333333333</Text>
            </div>
        )
    },
})



export default noticeData1  