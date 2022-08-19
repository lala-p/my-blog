import noticeData1 from './noticeData1'

class NoticeSystem {
	#noticeList
	#limit
	#pageLimit

	constructor(noticeList, limit, pageLimit) {
		this.#noticeList = noticeList
		this.#limit = limit
		this.#pageLimit = pageLimit
	}

	getCurrentNotice(noticeNo) {
		return this.#noticeList[noticeNo]
	}

	getNextNotice(noticeNo) {
		if (noticeNo == this.getLastNoticeNo()) {
			return undefined
		} else {
			return {
				noticeNo: this.#noticeList[noticeNo + 1].noticeNo,
				title: this.#noticeList[noticeNo + 1].title,
				createdDate: this.#noticeList[noticeNo + 1].createdDate,
			}
		}
	}

	getPrevNotice(noticeNo) {
		if (noticeNo - 1 < 0) {
			return undefined
		} else {
			return {
				noticeNo: this.#noticeList[noticeNo - 1].noticeNo,
				title: this.#noticeList[noticeNo - 1].title,
				createdDate: this.#noticeList[noticeNo - 1].createdDate,
			}
		}
	}

	// getAllNoticeCount() {
	// 	return Object.keys(this.#noticeList).length
	// }

	getLastNoticeNo() {
		return Object.keys(this.#noticeList).length - 1
	}

	getLastPageNum() {
		const allNoticesCount = Object.keys(this.#noticeList).length
		const allPagesCount = Math.trunc(allNoticesCount / this.#limit) + (allNoticesCount % this.#limit == 0 ? 0 : 1)

		return allPagesCount
	}

	getCurrentPageNoticeList(currentPageNum) {
		let currentPageNoticeList = new Array()

		const lastNotice = this.getLastNoticeNo()
		const startNum = lastNotice - (currentPageNum - 1) * this.#limit

		for (let index = startNum; index > startNum - this.#limit; index--) {
			if (index < 0) {
				break
			} else {
				currentPageNoticeList.push({
					noticeNo: this.#noticeList[index].noticeNo,
					title: this.#noticeList[index].title,
					createdDate: this.#noticeList[index].createdDate,
					updatedDate: this.#noticeList[index].updatedDate,
				})
			}
		}

		return currentPageNoticeList
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

const noticeList = Object.assign({}, noticeData1)

const noticeData = new NoticeSystem(noticeList, 10, 5)

export default noticeData
