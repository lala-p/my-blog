const pageLimit = 5

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export class PostData {
	#postObject
	#folderObject

	#allPostCodeList
	#allPostDataList

	constructor(postObject, folderObject) {
		this.#postObject = postObject
		this.#folderObject = folderObject

		this.#allPostCodeList = Object.keys(postObject)
		this.#allPostDataList = Object.values(postObject)
	}

	getParentCode(postCode) {
		return this.#postObject[postCode].parent
	}

	getParentFolderName(postCode) {
		return this.#folderObject[this.#postObject[postCode].parent].name
	}

	getParentChildList(postCode) {
		return this.#folderObject[this.#postObject[postCode].parent].childList
	}

	getIndexInParentChildList(postCode) {
		this.#folderObject[this.#postObject[postCode].parent].childList.indexOf(postCode)
	}

	getPost(postCode) {
		return this.#postObject[postCode]
	}

	getNextPost(postCode) {
		const currentIndex = this.getIndexInParentChildList(postCode)
		const parentChildList = this.getParentChildList(postCode)

		return this.#postObject[parentChildList[currentIndex + 1]]
	}

	getPrevPost(postCode) {
		const currentIndex = this.getIndexInParentChildList(postCode)
		const parentChildList = this.getParentChildList(postCode)

		return this.#postObject[parentChildList[currentIndex - 1]]
	}

	getAllPostCode() {
		return this.#allPostCodeList
	}

	getFileListData(postCode) {
		let fileListData = new Array()

		for (const childPostCode of this.getParentChildList(postCode)) {
			fileListData.push({
				postCode: childPostCode,
				title: this.#postObject[childPostCode].title,
			})
		}

		return fileListData
	}

	getPostLinkDataList(postCodeList) {
		let postLinkDataList = new Array()

		for (const postCode of postCodeList) {
			postLinkDataList.push({
				postCode: postCode,
				title: this.#postObject[postCode].title,
				subTitle: this.#postObject[postCode].subTitle,
				createdDate: this.#postObject[postCode].createdDate,
				updatedDate: this.#postObject[postCode].updatedDate,
				tagList: this.#postObject[postCode].tagList,
			})
		}

		return postLinkDataList
	}

	getSearchResultByTitleKeyword(keyword) {
		const allPostLinkData = this.getPostLinkDataList(this.#allPostCodeList)

		const regExp = new RegExp(keyword)
		const searchResult = allPostLinkData.filter((linkData) => regExp.test(linkData.title))

		return searchResult
	}

	getSearchResultByTag(tagList) {
		const allPostLinkData = this.getPostLinkDataList(this.#allPostCodeList)

		const tagSet = new Set(tagList)
		const searchResult = allPostLinkData.filter((linkData) => {
			const linkDataTagSet = new Set(linkData.tagList)
			const intersect = Array.from(tagSet).filter((tag) => linkDataTagSet.has(tag))

			return intersect.length !== 0
		})

		return searchResult
	}

	getAllTag() {
		let allTagSet = new Set()

		for (const postData of this.#allPostDataList) {
			for (const tag of postData.tagList) {
				allTagSet.add(tag)
			}
		}

		return Array.from(allTagSet)
	}

	getTagCountData(tagList) {
		let postTagCountData = new Object()

		for (const postData of this.#allPostDataList) {
			for (const tag of postData.tagList) {
				if (tagList.includes(tag)) {
					if (tag in postTagCountData) {
						postTagCountData[tag] = postTagCountData[tag] + 1
					} else {
						postTagCountData[tag] = 1
					}
				}
			}
		}

		return postTagCountData
	}

	getTagListSortByCount(tagList, sort = 'desc') {
		let sortedTagList = new Array()
		const tagCountData = this.getTagCountData(tagList)
		let sortdTagCountDataList = new Array()

		for (const [tag, count] in Object.entries(tagCountData)) {
			sortdTagCountDataList.push({ tag, count })
		}

		sortdTagCountDataList = sortdTagCountDataList.sort((a, b) => {
			return b.count - a.count
		})

		for (const tagCountData of sortdTagCountDataList) {
			sortedTagList.push(tagCountData.tag)
		}

		if (sort === 'asc') {
			sortedTagList = sortedTagList.reverse()
		}

		return sortedTagList
	}

	getSortCreatedDateDesc() {}
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export class FolderData {
	#folderObject
	#poshObject
	#limit

	constructor(folderObject, postObject, limit) {
		this.#folderObject = folderObject
		this.#poshObject = postObject
		this.#limit = limit
	}

	getFolderName(folderCode) {
		return this.#folderObject[folderCode].name
	}

	getFolderPath(folderCode, includeCurrent = true) {
		let path = new Array()

		let currentCode = folderCode
		let parentCode = null

		if (includeCurrent === true) {
			path.unshift(currentCode)
		}

		while (this.#folderObject[currentCode].parent !== undefined) {
			parentCode = this.#folderObject[currentCode].parent
			path.unshift(parentCode)

			currentCode = parentCode
		}

		return path
	}

	getChildListLength(folderCode) {
		return this.#folderObject[folderCode].childList.length
	}

	getChildLastPostedDate(folderCode) {
		let childList = this.#folderObject[folderCode].childList
		let lastPostedDate = this.#poshObject[childList.at(-1)].createdDate

		for (let index = childList.length - 2; index >= 0; index--) {
			if (this.#poshObject[childList.at(index)].createdDate > lastPostedDate) {
				lastPostedDate = this.#poshObject[childList.at(index)].createdDate
			}
		}

		return lastPostedDate
	}

	getChildLastUpdatedDate(folderCode) {
		let childList = this.#folderObject[folderCode].childList
		let lastUpdatedDate = undefined

		for (let index = 0; index < childList.length; index++) {
			let updatedDate = this.#poshObject[childList.at(index)].updatedDate
			if (updatedDate !== undefined && updatedDate > lastUpdatedDate) {
				lastUpdatedDate = updatedDate
			}
		}

		return lastUpdatedDate
	}

	getPageChildList(folderCode, pageNum) {
		let pageChildList = new Array()
		let childList = [...this.#folderObject[folderCode].childList].reverse()
		const startIndex = (pageNum - 1) * this.#limit

		childList = childList.slice(startIndex, startIndex + this.#limit)

		for (const postCode of childList) {
			pageChildList.push({
				postCode,
				thumbnail: this.#poshObject[postCode].thumbnail,
				title: this.#poshObject[postCode].title,
				subTitle: this.#poshObject[postCode].subTitle,
				tagList: this.#poshObject[postCode].tagList,
				createdDate: this.#poshObject[postCode].createdDate,
				updatedDate: this.#poshObject[postCode].updatedDate,
			})
		}

		return pageChildList
	}

	getLastPageNum(folderCode) {
		const allChildCount = this.#folderObject[folderCode].childList.length
		const allPagesCount = Math.trunc(allChildCount / this.#limit) + (allChildCount % this.#limit == 0 ? 0 : 1)

		return allPagesCount
	}

	getCurrentPageList(folderCode, currentPageNum) {
		let currentPages = new Array()

		const startNum = currentPageNum - (currentPageNum % pageLimit == 0 ? pageLimit : currentPageNum % pageLimit) + 1
		const lastPage = this.getLastPageNum(folderCode)

		for (let index = startNum; index < startNum + pageLimit; index++) {
			if (index > lastPage) {
				break
			} else {
				currentPages.push(index)
			}
		}

		return currentPages
	}

	getNextPage(currentPageNum) {
		return currentPageNum % pageLimit == 0 ? currentPageNum + 1 : currentPageNum + pageLimit - (currentPageNum % pageLimit) + 1
	}

	getPrevPage(currentPageNum) {
		return currentPageNum - (currentPageNum % pageLimit == 0 ? pageLimit : currentPageNum % pageLimit)
	}

	isFirstPages(currentPageNum) {
		return currentPageNum <= pageLimit && currentPageNum > 0
	}

	isLastPages(folderCode, currentPageNum) {
		const lastNum = this.getLastPageNum(folderCode)
		const startNum = lastNum - (lastNum % pageLimit == 0 ? pageLimit : lastNum % pageLimit) + 1

		return currentPageNum >= startNum && currentPageNum <= lastNum
	}
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export class NoticeData {
	#noticeObject
	#limit

	constructor(noticeObject, limit) {
		this.#noticeObject = noticeObject
		this.#limit = limit
	}

	getCurrentNotice(noticeNo) {
		return this.#noticeObject[noticeNo]
	}

	getNextNotice(noticeNo) {
		if (noticeNo == this.getLastNoticeNo()) {
			return undefined
		} else {
			return {
				noticeNo: this.#noticeObject[noticeNo + 1].noticeNo,
				title: this.#noticeObject[noticeNo + 1].title,
				createdDate: this.#noticeObject[noticeNo + 1].createdDate,
			}
		}
	}

	getPrevNotice(noticeNo) {
		if (noticeNo - 1 < 0) {
			return undefined
		} else {
			return {
				noticeNo: this.#noticeObject[noticeNo - 1].noticeNo,
				title: this.#noticeObject[noticeNo - 1].title,
				createdDate: this.#noticeObject[noticeNo - 1].createdDate,
			}
		}
	}

	getLastNoticeNo() {
		return Object.keys(this.#noticeObject).length - 1
	}

	getLastPageNum() {
		const allNoticesCount = Object.keys(this.#noticeObject).length
		const allPagesCount = Math.trunc(allNoticesCount / this.#limit) + (allNoticesCount % this.#limit == 0 ? 0 : 1)

		return allPagesCount
	}

	getCurrentPageNoticeList(currentPageNum) {
		let currentPagenoticeList = new Array()

		const lastNotice = this.getLastNoticeNo()
		const startNum = lastNotice - (currentPageNum - 1) * this.#limit

		for (let index = startNum; index > startNum - this.#limit; index--) {
			if (index < 0) {
				break
			} else {
				currentPagenoticeList.push({
					noticeNo: this.#noticeObject[index].noticeNo,
					title: this.#noticeObject[index].title,
					createdDate: this.#noticeObject[index].createdDate,
					updatedDate: this.#noticeObject[index].updatedDate,
				})
			}
		}

		return currentPagenoticeList
	}

	getCurrentPageList(currentPageNum) {
		let currentPages = new Array()

		const startNum = currentPageNum - (currentPageNum % pageLimit == 0 ? pageLimit : currentPageNum % pageLimit) + 1
		const lastPage = this.getLastPageNum()

		for (let index = startNum; index < startNum + pageLimit; index++) {
			if (index > lastPage) {
				break
			} else {
				currentPages.push(index)
			}
		}

		return currentPages
	}

	getNextPage(currentPageNum) {
		return currentPageNum % pageLimit == 0 ? currentPageNum + 1 : currentPageNum + pageLimit - (currentPageNum % pageLimit) + 1
	}

	getPrevPage(currentPageNum) {
		return currentPageNum - (currentPageNum % pageLimit == 0 ? pageLimit : currentPageNum % pageLimit)
	}

	isFirstPages(currentPageNum) {
		return currentPageNum <= pageLimit && currentPageNum > 0
	}

	isLastPages(currentPageNum) {
		const lastNum = this.getLastPageNum()
		const startNum = lastNum - (lastNum % pageLimit == 0 ? pageLimit : lastNum % pageLimit) + 1

		return currentPageNum >= startNum && currentPageNum <= lastNum
	}
}
