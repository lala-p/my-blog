import postData from '../data/postData'


const postDataList = Object.values(postData)


export const getAllTag = () => {
    let allTagSet = new Set()

    for (const postData of postDataList) {
        for (const tag of postData.tagList) {
            allTagSet.add(tag)
        }   
    }

    return Array.from(allTagSet)
}

export const getAllTagCountData = () => {
    let postTagCountData = new Object() 

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

export const getParticularTagCountData = (...tagList) => {
    let postTagCountData = new Object() 

    for (const postData of postDataList) {
        for (const tag of postData.tagList) {
            
            if (tagList.includes(tag)) {
                if (postTagCountData[tag] !== undefined) {
                    postTagCountData[tag] = postTagCountData[tag] + 1
                } else {
                    postTagCountData[tag] = 1
                }
            }

        }   
    }

    return postTagCountData
}

export const getTagCountDataRank = () => {
    let tagRank = new Object()

    let postTagCountData = getAllTagCountData() 
    let sortedCountDataList = new Array() 
    
    for (const postTag in postTagCountData) {
        sortedCountDataList.push({ tag: postTag, count: postTagCountData[postTag] })
    }

    sortedCountDataList.sort((a, b) => {
        return b.count - a.count
    })

    for (let index = 0; index < sortedCountDataList.length; index++) {
        tagRank[index + 1] = sortedCountDataList[index].tag
    }

    return tagRank
}

export const getAllTagOrderByCount = (order = 'desc') => {
    let allTagList = new Array()

    let postTagCountData = getAllTagCountData() 
    let sortedCountDataList = new Array() 
    
    for (const postTag in postTagCountData) {
        sortedCountDataList.push({ tag: postTag, count: postTagCountData[postTag] })
    }

    sortedCountDataList = sortedCountDataList.sort((a, b) => {
        return b.count - a.count
    })

    for (const sortedCountData of sortedCountDataList) {
        allTagList.push(sortedCountData.tag)
    }

    
    if (order === 'asc') {
        allTagList = allTagList.reverse()
    }
        
    return allTagList
}