import noticeData1 from './noticeData1'

export const noticeObject = Object.assign({}, noticeData1)

export class NoticeSystem {
	#noticeObject
	#limit
	#pageLimit

	constructor(noticeObject, limit, pageLimit) {
		this.#noticeObject = noticeObject
		this.#limit = limit
		this.#pageLimit = pageLimit
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

	// getAllNoticeCount() {
	// 	return Object.keys(this.#noticeObject).length
	// }

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

	getCurrentPages(currentPageNum) {
		let currentPages = new Array()

		const startNum = currentPageNum - (currentPageNum % this.#pageLimit == 0 ? this.#pageLimit : currentPageNum % this.#pageLimit) + 1
		const lastPage = this.getLastPageNum()

		for (let index = startNum; index < startNum + this.#pageLimit; index++) {
			if (index > lastPage) {
				break
			} else {
				currentPages.push(index)
			}
		}

		return currentPages
	}

	getNextPage(currentPageNum) {
		return currentPageNum % this.#pageLimit == 0 ? currentPageNum + 1 : currentPageNum + this.#pageLimit - (currentPageNum % this.#pageLimit) + 1
	}

	getPrevPage(currentPageNum) {
		return currentPageNum - (currentPageNum % this.#pageLimit == 0 ? this.#pageLimit : currentPageNum % this.#pageLimit)
	}

	isFirstPages(currentPageNum) {
		return currentPageNum <= this.#pageLimit && currentPageNum > 0
	}

	isLastPages(currentPageNum) {
		const lastNum = this.getLastPageNum()
		const startNum = lastNum - (lastNum % this.#pageLimit == 0 ? this.#pageLimit : lastNum % this.#pageLimit) + 1

		return currentPageNum >= startNum && currentPageNum <= lastNum
	}
}
