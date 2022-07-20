import postData from '../data/postData'
import folderData from '../data/folderData'


export const getParentCode = (postCode) => {
    return postData[postCode].parent
}

export const getParentData = (postCode) => {
    return folderData[postData[postCode].parent]
}

export const getParentChildList = (postCode) => {
    return folderData[postData[postCode].parent].childList
}

export const getPostIndexInParentFolder = (postCode) => {
    return folderData[postData[postCode].parent].childList.indexOf(postCode)
}

export const getPostData = (postCode) => {
    return postData[postCode]
}

export const getNextPostData = (postCode) => {
    const currentIndex = getPostIndexInParentFolder(postCode)
    const parentChildList = getParentChildList(postCode) 

    return postData[parentChildList[currentIndex + 1]]    
}

export const getPrevPostData = (postCode) => {
    const currentIndex = getPostIndexInParentFolder(postCode)
    const parentChildList = getParentChildList(postCode)

    return postData[parentChildList[currentIndex - 1]]
}

export const getFileListDataByPostCode = (postCode) => {
    let fileListData = new Array()

    getParentChildList(postCode).forEach(childPostCode => {
        fileListData.push({
            postCode: childPostCode,
            title   : postData[childPostCode].title,
        })  
    })

    return fileListData
}

export const getPostLinkData = (postCodeList) => {
    let postLinkData = new Array()

    for (const postCode of postCodeList) {
        const data = postData[postCode]

        postLinkData.push({
            postCode   : postCode,
            type       : data.type,
            title      : data.title,
            subTitle   : data.subTitle, 
            writer     : data.writer,
            createdDate: data.createdDate, 
            updatedDate: data.updatedDate,
            tagList    : data.tagList,
        })
    }

    return postLinkData
}

export const getSearchResultByTitleKeyword = (keyword) => {
    const allPostLinkData = getPostLinkData(Object.keys(postData))
    
    const regExp = new RegExp(keyword)
    const searchResult = allPostLinkData.filter(linkData => regExp.test(linkData.title))

    return searchResult
}

export const getSearchResultByTag = (tagList) => {
    const allPostLinkData = getPostLinkData(Object.keys(postData))

    const tagSet = new Set(tagList)
    const searchResult = allPostLinkData.filter(data => {
        const dataTagSet = new Set(data.tagList)
        const intersect = Array.from(tagSet).filter(tag => dataTagSet.has(tag))
        
        return intersect.length !== 0
    })

    return searchResult
}