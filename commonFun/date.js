export const dateFormat_ver1 = (date) => {
    const formatedDate = null    
    
}

export const dateFormat_ver2 = (date) => {
    const formatedDate = null    
    
}

export const dateFormat_ver3 = (date) => {
    const formatedDate = null    
    
}

export const dateFormat_ver4 = (date) => {
    const formatedDate = null    
    
}


export const dateFormat = (dateToFormat, ver = 0) => {
    if (ver == 0) { // 0000-00-00
        const year = ('000' + dateToFormat.getFullYear()).slice(-4)
        const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
        const date = ('0' + dateToFormat.getDate()).slice(-2)

        const formatedDate = `${year}-${month}-${date}`    
        
        return formatedDate

    } else if (ver == 1) { // 0000-00-00 00:00
        const year = ('000' + dateToFormat.getFullYear()).slice(-4)
        const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
        const date = ('0' + dateToFormat.getDate()).slice(-2)
        const hours = ('0' + dateToFormat.getHours()).slice(-2)
        const minutes = ('0' + dateToFormat.getMinutes()).slice(-2)

        const formatedDate = `${year}-${month}-${date} ${hours}:${minutes}`    
        
        return formatedDate     

    } else if (ver == 2) { // 0000-00-00 00:00:00
        const year = ('000' + dateToFormat.getFullYear()).slice(-4)
        const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
        const date = ('0' + dateToFormat.getDate()).slice(-2)
        const hours = ('0' + dateToFormat.getHours()).slice(-2)
        const minutes = ('0' + dateToFormat.getMinutes()).slice(-2)
        const seconds = ('0' + dateToFormat.getSeconds()).slice(-2)

        const formatedDate2 = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`
        
        return formatedDate2  

    } else if (ver == 3) { // 0000.00.00
        const year = ('000' + dateToFormat.getFullYear()).slice(-4)
        const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
        const date = ('0' + dateToFormat.getDate()).slice(-2)

        const formatedDate = `${year}.${month}.${date}`    
        
        return formatedDate

    } else if (ver == 4) { // 0000.00.00 00:00
        const year = ('000' + dateToFormat.getFullYear()).slice(-4)
        const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
        const date = ('0' + dateToFormat.getDate()).slice(-2)
        const hours = ('0' + dateToFormat.getHours()).slice(-2)
        const minutes = ('0' + dateToFormat.getMinutes()).slice(-2)

        const formatedDate = `${year}.${month}.${date} ${hours}:${minutes}`    
        
        return formatedDate     

    } else if (ver == 5) { // 0000.00.00 00:00:00
        const year = ('000' + dateToFormat.getFullYear()).slice(-4)
        const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
        const date = ('0' + dateToFormat.getDate()).slice(-2)
        const hours = ('0' + dateToFormat.getHours()).slice(-2)
        const minutes = ('0' + dateToFormat.getMinutes()).slice(-2)
        const seconds = ('0' + dateToFormat.getSeconds()).slice(-2)

        const formatedDate = `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`
        
        return formatedDate

    } else if (ver == 6) { // 0000년 00월 00일
        const year = ('000' + dateToFormat.getFullYear()).slice(-4)
        const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
        const date = ('0' + dateToFormat.getDate()).slice(-2)

        const formatedDate = `${year}년 ${month}월 ${date}일`    
        
        return formatedDate

    } else {
        return false
    }   
    
}



