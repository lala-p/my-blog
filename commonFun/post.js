import postData from '../postData'
import folderData from '../folderData'


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
    const parentChildList = getParentChildList(postCode)
    const currentIndex = getPostIndexInParentFolder(postCode)

    if (currentIndex === parentChildList.length - 1) {
        return null
    } else {
        return postData[parentChildList[currentIndex + 1]]
    }
}

export const getPrevPostData = (postCode) => {
    const currentIndex = getPostIndexInParentFolder(postCode)
    
    if (currentIndex === 0) {
        return null
    } else {
        return postData[getParentChildList(postCode)[currentIndex - 1]]
    }
}

export const getFileListDataByPostCode = (postCode) => {
    let fileListData = new Array()

    getParentChildList(postCode).forEach(childPostCode => {
        fileListData.push({
            postCode: childPostCode,
            title: postData[childPostCode].title,
        })  
    })

    return fileListData
}
