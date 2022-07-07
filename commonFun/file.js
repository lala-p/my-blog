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