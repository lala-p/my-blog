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

    while (true) {
        if (folderData[currentCode]?.parent !== undefined) {
            parentCode = folderData[currentCode]?.parent
            parents.unshift(parentCode)
        } else {
            break
        }
    }    

    return parents 
}
