import folderData from '../data/folderData'


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
