export class Pagenation {
	#dataList
	#pageLimit
	#limit

	constructor(dataList, pageLimit, limit) {
		this.#dataList = dataList
		this.#pageLimit = pageLimit
		this.#limit = limit
	}

	getLastPageNum() {
		return Math.trunc(this.#dataList.length / this.#limit) + (this.#dataList.length % this.#limit == 0 ? 0 : 1)
	}

	getPagenationDataList(pageNum) {
		let pagenationDataList = new Array()

		const startNum = (pageNum - 1) * this.#limit

		for (let index = startNum; index < startNum + this.#limit; index++) {
			pagenationDataList.push(this.#dataList[index])

			if (this.#dataList[index] === this.#dataList.at(-1)) {
				break
			}
		}

		return pagenationDataList
	}

	getPageList(pageNum) {
		let pageList = new Array()

		const startNum = pageNum - (pageNum % this.#pageLimit == 0 ? this.#pageLimit : pageNum % this.#pageLimit) + 1
		const lastPage = this.getLastPageNum()

		for (let index = startNum; index < startNum + this.#pageLimit; index++) {
			if (index > lastPage) {
				break
			} else {
				pageList.push(index)
			}
		}

		return pageList
	}

	getNextPage(pageNum) {
		return pageNum % this.#pageLimit == 0 ? pageNum + 1 : pageNum + this.#pageLimit - (pageNum % this.#pageLimit) + 1
	}

	getPrevPage(pageNum) {
		return pageNum - (pageNum % this.#pageLimit == 0 ? this.#pageLimit : pageNum % this.#pageLimit)
	}

	isFirstPages(pageNum) {
		return pageNum <= this.#pageLimit && pageNum > 0
	}

	isLastPages(pageNum) {
		const lastNum = this.getLastPageNum()
		const startNum = lastNum - (lastNum % this.#pageLimit == 0 ? this.#pageLimit : lastNum % this.#pageLimit) + 1

		return pageNum >= startNum && pageNum <= lastNum
	}
}

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
				postCode,
				thumbnail: this.#postObject[postCode].thumbnail,
				title: this.#postObject[postCode].title,
				subTitle: this.#postObject[postCode].subTitle,
				createdDate: this.#postObject[postCode].createdDate,
				updatedDate: this.#postObject[postCode].updatedDate,
				tagList: this.#postObject[postCode].tagList,
			})
		}

		return postLinkDataList
	}

	sortCreatedDateDesc(postCodeList) {
		let sortedList = [...postCodeList].sort((a, b) => {
			this.#postObject[b].createdDate - this.#postObject[a].createdDate
		})

		return sortedList
	}

	getSearchResultByTitle(title) {
		const regExp = new RegExp(title, 'i')
		const searchResult = this.#allPostCodeList.filter((postCode) => regExp.test(this.#postObject[postCode].title))

		return this.sortCreatedDateDesc(searchResult)
	}

	getSearchResultByTag(tagList) {
		let searchResult = new Array()

		for (const postCode of this.#allPostCodeList) {
			for (const tag of tagList) {
				if (new RegExp(tag, 'i').test(this.#postObject[postCode].tagList.join())) {
					searchResult.push(postCode)
					break
				}
			}
		}

		return this.sortCreatedDateDesc(searchResult)
	}

	getSearchResult(searchValue) {
		let searchResult = new Array()

		for (const postCode of this.#allPostCodeList) {
			if (new RegExp(searchValue, 'i').test(this.#postObject[postCode].title)) {
				searchResult.push(postCode)
				continue
			}

			// let stop = false
			const tagList = searchValue.split(' ')
			for (const tag of tagList) {
				if (new RegExp(tag, 'i').test(this.#postObject[postCode].tagList.join())) {
					searchResult.push(postCode)
					// stop = true
					break
				}
			}

			// if (stop == true) {
			// 	continue
			// }
		}

		return this.sortCreatedDateDesc(searchResult)
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
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export class FolderData {
	#folderObject
	#poshObject

	constructor(folderObject, postObject) {
		this.#folderObject = folderObject
		this.#poshObject = postObject
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

	getFolderType(folderCode) {
		return this.#folderObject[folderCode].type
	}

	getChildList(folderCode) {
		return this.#folderObject[folderCode].childList
	}

	getChildListLength(folderCode) {
		return this.#folderObject[folderCode].childList.length
	}

	getFolderLinkDataList(folderCodeList) {
		let folderLinkDataList = new Array()

		for (const folderCode of folderCodeList) {
			folderLinkDataList.push({
				folderCode,
				name: this.#folderObject[folderCode].name,
				thumbnail: this.#folderObject[folderCode].thumbnail,
			})
		}

		return folderLinkDataList
	}

	getAllFolderCode() {
		return Object.keys(this.#folderObject)
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
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export class NoticeData {
	#noticeObject

	constructor(noticeObject) {
		this.#noticeObject = noticeObject
	}

	getCurrentNotice(noticeNo) {
		return this.#noticeObject[noticeNo]
	}

	getNextNotice(noticeNo) {
		const lastNoticeNo = Object.keys(this.#noticeObject)
			.sort((a, b) => {
				return a - b
			})
			.at(-1)

		if (noticeNo == lastNoticeNo) {
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
		const firstNoticeNo = Object.keys(this.#noticeObject)
			.sort((a, b) => {
				return a - b
			})
			.at(0)

		if (noticeNo == firstNoticeNo) {
			return undefined
		} else {
			return {
				noticeNo: this.#noticeObject[noticeNo - 1].noticeNo,
				title: this.#noticeObject[noticeNo - 1].title,
				createdDate: this.#noticeObject[noticeNo - 1].createdDate,
			}
		}
	}

	getSortedNoticeNoList() {
		return Object.keys(this.#noticeObject).sort((a, b) => {
			return b - a
		})
	}

	getAllNoticeNoList() {
		return Object.keys(this.#noticeObject)
	}

	getNoticeLinkDataList(noticeNoList) {
		let noticeLinkDataList = new Array()

		for (const noticeNo of noticeNoList) {
			noticeLinkDataList.push({
				noticeNo,
				title: this.#noticeObject[noticeNo].title,
				createdDate: this.#noticeObject[noticeNo].createdDate,
				updatedDate: this.#noticeObject[noticeNo].updatedDate,
			})
		}

		return noticeLinkDataList
	}
}
