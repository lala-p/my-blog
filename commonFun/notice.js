// import noticeData from '../noticeData'

const noticeData = [
    { no: 0, title: 'asdfsadf' },
    { no: 1, title: 'asdfsadf' },
    { no: 2, title: 'asdfsadf' },
    { no: 3, title: 'asdfsadf' },
    { no: 4, title: 'asdfsadf' },
    { no: 5, title: 'asdfsadf' },
    { no: 6, title: 'asdfsadf' },
    { no: 7, title: 'asdfsadf' },
    { no: 8, title: 'asdfsadf' },
    { no: 9, title: 'asdfsadf' },
    { no: 10, title: 'asdfsadf' },
    { no: 11, title: 'asdfsadf' },
    { no: 12, title: 'asdfsadf' },
    { no: 13, title: 'asdfsadf' },
    { no: 14, title: 'asdfsadf' },
    { no: 15, title: 'asdfsadf' },
    { no: 16, title: 'asdfsadf' },
    { no: 17, title: 'asdfsadf' },
    { no: 18, title: 'asdfsadf' },
    { no: 19, title: 'asdfsadf' },
    { no: 20, title: 'asdfsadf' },
    { no: 21, title: 'asdfsadf' },
    { no: 22, title: 'asdfsadf' },
    { no: 23, title: 'asdfsadf' },
    { no: 24, title: 'asdfsadf' },
    { no: 25, title: 'asdfsadf' },
    { no: 26, title: 'asdfsadf' },
    { no: 27, title: 'asdfsadf' },
    { no: 28, title: 'asdfsadf' },
    { no: 29, title: 'asdfsadf' },
    { no: 30, title: 'asdfsadf' },
    { no: 31, title: 'asdfsadf' },
    { no: 32, title: 'asdfsadf' },
    { no: 33, title: 'asdfsadf' },
    { no: 34, title: 'asdfsadf' },
]


export const getNextNoticeData = (noticeNo) => {
    return noticeData[noticeNo + 1]
}

export const getPrevNoticeData = (noticeNo) => {
    return noticeData[noticeNo - 1]
}



export const getNoticePagenationList = (currentPageNum, limit) => {
    let pagenationList = new Array()

    const startNum = (noticeData.length - 1) - ((currentPageNum - 1) * limit)  
    
    for (let index = startNum; index > startNum - limit; index--) {
        if (index < 0) {
            break
        } else {
            pagenationList.push(noticeData[index])
        }
    }

    return pagenationList
}



// export const getFirstPageNum = () => {
//     return 1
// }

export const getLastPageNum = (limit) => {
    const allNoticeCount = noticeData.length
    const allPageCount = Math.trunc(allNoticeCount / limit) + (allNoticeCount % limit == 0 ?  0 : 1) 

    return allPageCount
}

export const getPages = (currentPageNum, limit, pageLimit) => {
    let pages = new Array()
 
    const startNum = currentPageNum - (currentPageNum % pageLimit == 0 ? pageLimit - 1 : (currentPageNum % pageLimit) - 1) 
    const lastNum = getLastPageNum(limit, pageLimit)

    for (let index = startNum; index < startNum + pageLimit; index++) {
        if (index > lastNum) {
            break
        } else {
            pages.push(index) 
        }
    }

    return pages
}

export const getNextPageNum = (currentPageNum, pageLimit) => { 
    return currentPageNum % pageLimit == 0 ? currentPageNum + 1 : currentPageNum + pageLimit - (currentPageNum % pageLimit) + 1
}

export const getPrevPageNum = (currentPageNum, pageLimit) => {
    return currentPageNum - (currentPageNum % pageLimit == 0 ? pageLimit : currentPageNum % pageLimit) 
}


export const isFirstPages = (currentPageNum, pageLimit) => {
    return currentPageNum <= pageLimit
}

export const isLastPages = (currentPageNum, limit, pageLimit) => {
    const lastNum = getLastPageNum(limit)  
    const startNum = lastNum - (lastNum % pageLimit == 0 ? pageLimit - 1 : (lastNum % pageLimit) - 1)

    return currentPageNum >= startNum && currentPageNum <= lastNum
}




