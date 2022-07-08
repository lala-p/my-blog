import _ from 'lodash'

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

export const getAllPostTagCount = () => {
    let postTagCountData = new Object() 
    const postCodeList = Object.keys(postData)

    for (let i = 0; i < postCodeList.length; i++) {
        for (let j = 0; j < postData[postCodeList[i]].tagList.length; j++) {
            let tag = postData[postCodeList[i]].tagList[j]

            if (postTagCountData[tag]) {

        
            }
            
        }
            
    }

    postCodeList.forEach(postCode => {
        postData[postCode].array.forEach(element => {
            
        });
        
        for (let index = 0; index < postData[postCode].length; index++) {
            if () {
                postTagCountData[]
            } else {
                postTagCountData[]
            }
            
        }

    })

    
    return postTagCountData
}

export const getParticularPostTagCount = (...tags) => {
    let postTagCountData = new Object() 
    
    


    return postTagCountData
}

// export const getExceptPostTagCount = (...tags) => {


// }