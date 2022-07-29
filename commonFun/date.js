
export const dateFormat_ver1 = (dateToFormat) => {
    const year = ('000' + dateToFormat.getFullYear()).slice(-4)
    const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
    const date = ('0' + dateToFormat.getDate()).slice(-2)

    const formatedDate = `${year}-${month}-${date}`    
    
    return formatedDate
}

export const dateFormat_ver2 = (dateToFormat) => {
    const year = ('000' + dateToFormat.getFullYear()).slice(-4)
    const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
    const date = ('0' + dateToFormat.getDate()).slice(-2)
    const hours = ('0' + dateToFormat.getHours()).slice(-2)
    const minutes = ('0' + dateToFormat.getMinutes()).slice(-2)

    const formatedDate = `${year}-${month}-${date} ${hours}:${minutes}`    
    
    return formatedDate     
}

export const dateFormat_ver3 = (dateToFormat) => {
    const year = ('000' + dateToFormat.getFullYear()).slice(-4)
    const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
    const date = ('0' + dateToFormat.getDate()).slice(-2)
    const hours = ('0' + dateToFormat.getHours()).slice(-2)
    const minutes = ('0' + dateToFormat.getMinutes()).slice(-2)
    const seconds = ('0' + dateToFormat.getSeconds()).slice(-2)

    const formatedDate2 = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
    
    return formatedDate2  
}

export const dateFormat_ver4 = (dateToFormat) => {
    const year = ('000' + dateToFormat.getFullYear()).slice(-4)
    const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
    const date = ('0' + dateToFormat.getDate()).slice(-2)

    const formatedDate = `${year}.${month}.${date}`    
    
    return formatedDate
}

export const dateFormat_ver5 = (dateToFormat) => {
    const formatedDate = null    
    return formatedDate

}

export const dateFormat_ver6 = (dateToFormat) => {
    const formatedDate = null    
    return formatedDate

}
