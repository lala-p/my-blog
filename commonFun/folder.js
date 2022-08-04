import _ from 'lodash'

import folderData from '@data/folderData'
import postData from '@data/postData'


export const getFolderNameByCode = (folderCode) => {
    return folderData[folderCode].name
}

export const getFolderParents = (folderCode, includeCurrent = false) => {
    let parents = new Array()

    let currentCode = folderCode
    let parentCode = null
    
    if (includeCurrent) {
        parents.unshift(currentCode)
    }

    while (folderData[currentCode]?.parent !== undefined) { 
        parentCode = folderData[currentCode].parent
        parents.unshift(parentCode)

        currentCode = parentCode
        
    }    

    return parents 
}

export const getChildListLength = (folderCode) => {
    return folderData[folderCode].childList.length
}

export const getChildLastPostedDate = (folderCode) => {
    let childList = _.cloneDeep(folderData[folderCode].childList) 
    let lastPosted = postData[childList.pop()].createdDate

    for (let index = childList.length - 1; index >= 0; index--) {
        if (lastPosted < postCode[childList.at(index)].createdDate) {
            lastPosted = postCode[childList.at(index)].createdDate
        }
    }

    return lastPosted
} 

export const getChildLastUpdatedDate = (folderCode) => {    
    let childList = folderData[folderCode].childList 
    let lastUpdated = null

    for (let index = 0; index < childList.length; index++) {
        const updatedDate = postCode[childList.at(index)]?.updatedDate 
        if (updatedDate !== undefined && (lastUpdated === null || lastUpdated < updatedDate) ) {
            lastUpdated = updatedDate 
        }
    }
    
    return lastUpdated
}
