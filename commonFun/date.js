export const dateFormat1 = (dateToFormat) => {
	const year = ('000' + dateToFormat.getFullYear()).slice(-4)
	const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
	const date = ('0' + dateToFormat.getDate()).slice(-2)

	const formatedDate = `${year}년 ${month}월 ${date}일`

	return formatedDate
}

export const dateFormat2 = (dateToFormat) => {
	const year = ('000' + dateToFormat.getFullYear()).slice(-4)
	const month = ('0' + (dateToFormat.getMonth() + 1)).slice(-2)
	const date = ('0' + dateToFormat.getDate()).slice(-2)

	const formatedDate = `${year}-${month}-${date}`

	return formatedDate
}
