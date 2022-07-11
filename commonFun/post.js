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

    
    return postData[parentChildList[currentIndex + 1]]    
}

export const getPrevPostData = (postCode) => {
    const currentIndex = getPostIndexInParentFolder(postCode)
    
    
    return postData[getParentChildList(postCode)[currentIndex - 1]]
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

export const getAllTagList = () => {
    let allTagSet = new Set()
    const postDataList = Object.values(postData)

    for (const postData of postDataList) {
        for (const tag of postData.tagList) {
            allTagSet.add(tag)
        }   
    }

    return Array.from(allTagSet)
}

export const getAllPostTagCount = () => {
    let postTagCountData = new Object() 
    const postDataList = Object.values(postData)

    for (const postData of postDataList) {
        for (const tag of postData.tagList) {
            if (postTagCountData[tag] !== undefined) {
                postTagCountData[tag] = postTagCountData[tag] + 1
            } else {
                postTagCountData[tag] = 1
            }
        }   
    }
    
    return postTagCountData
}

export const getParticularPostTagCount = (...tagList) => {
    let postTagCountData = new Object() 
    
    for (let i = 0; i < tagList.length; i++) {
        
        
    }
    


    return postTagCountData
}

export const getTagCountRank = () => {
    let tagRank = new Object()

    let postTagCountData = getAllPostTagCount() 
    let sortedCountDataList = new Array() 
    
    for (const postTag in postTagCountData) {
        sortedCountDataList.push({ tag: postTag, count: postTagCountData[postTag] })
    }

    sortedCountDataList = sortedCountDataList.sort((a, b) => {
        return b.count - a.count
    })

    for (let index = 0; index < sortedCountDataList.length; index++) {
        tagRank[index + 1] = sortedCountDataList[index].tag
    }

    return tagRank
}


// export const getExceptPostTagCount = (...tagList) => {


// }