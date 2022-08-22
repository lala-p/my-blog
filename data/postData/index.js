import { folderObject } from '../folderData'

import postData1 from './postData1'

class PostSystem {
	#postObject
	#folderObject

	constructor(postObject, folderObject) {
		this.#postObject = postObject
		this.#folderObject = folderObject
	}

	getPost() {}

	getNextPost() {}

	getPrevPost() {}

	getParentCode() {}

	getParentFolderName() {}

	getParentChildList() {}

	getIndexInParentChildList() {}

	getFileListData() {}

	getLinkData() {}

	getSearchResultByTitleKeyword() {}

	getSearchResultByTag() {}

	getAllTag() {}

	getTagCountData() {}

	getTagCountDataRank() {}

	getAllTagSortByCount(sort = 'desc') {}
}

export const postObject = Object.assign({}, postData1)

const postData = new PostSystem(postObject, folderObject)

export default postData
