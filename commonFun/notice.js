import noticeData from '@data/noticeData'


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




