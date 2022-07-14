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
    const currentIndex = getPostIndexInParentFolder(postCode)

    return postData[getParentChildList(postCode)[currentIndex + 1]]    
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

const testData = [
    {
        code: 'aaa',
        title: '제목1',
        tagList: ['react', 'useCallback', 'toyProject']
    }, 
    {
        code: 'cccc',
        title: '제목2 후기',
        tagList: ['react', '후기', 'toyProject']
    }, 
    {
        code: 'rmflrh',
        title: 'javascript 제목3',
        tagList: ['react', 'vue', 'javascript']
    }, 
    {
        code: 'dlamej',
        title: '제목4 react',
        tagList: ['개발이슈', 'javascript', 'regexp']
    }, 
    {
        code: 'djqtdjTek',
        title: '백준 제목5',
        tagList: ['백준', 'python', '알고리즘', '배열']
    }, 
    {
        code: 'sksms',
        title: '제목6 집합',
        tagList: ['개발이슈', 'python', '집합']
    }, 
    {
        code: 'dlTdjTwlfhd',
        title: '제목7',
        tagList: ['react', 'Hook', 'useState']
    }, 
    {
        code: 'gkgkgkgkgk',
        title: '제목8 공부',
        tagList: ['vue', '공부', '배열']
    }, 
    {
        code: 'hahahhaha',
        title: '제목9',
        tagList: ['c언어', 'toyproject']
    }, 
    {
        code: 'dkwlqdp',
        title: 'python 제목10 game toyproject',
        tagList: ['python', 'game', 'toyproject']
    }, 
    {
        code: 'rkrh',
        title: '제목11',
        tagList: ['개발이슈', 'javascript', '집합']
    }, 
    {
        code: 'tlbdj',
        title: '제목12 error',
        tagList: ['개발이슈', '404', 'error']
    }
]

export const getSearchResultByTitleKeyword = (keyword) => {
    // const allPostLinkData = getPostLinkData(Object.keys(postData))
    const allPostLinkData = testData
    const regExp = new RegExp(keyword)
    
    const searchResult = allPostLinkData.filter(linkData => regExp.test(linkData.title))

    return searchResult
}

export const getSearchResultByTag = (tagList) => {
    // const allPostLinkData = getPostLinkData(Object.keys(postData))
    const allPostLinkData = testData
    const tagSet = new Set(tagList)
    const searchResult = allPostLinkData.filter(data => {
        const dataTagSet = new Set(data.tagList)
        const intersect = Array.from(tagSet).filter(tag => dataTagSet.has(tag))
        
        return intersect.length !== 0
    })

    return searchResult
}