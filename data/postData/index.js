import postData1 from './postData1'

export const postObject = Object.assign({}, postData1)

export class PostSystem {
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
}
