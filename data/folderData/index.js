import { postObject } from '../postData'

import folderData1 from './folderData1'

class FolderSystem {
	#folderObject
	#poshObject

	constructor(folderObject, postObject) {
		this.#folderObject = folderObject
		this.#poshObject = postObject
	}

	getFolderNameByCode(folderCode) {
		return this.#folderObject[folderCode].name
	}

	getFolderPath(folderCode) {
		let path = new Array()

		let currentCode = folderCode
		let parentCode = null

		path.unshift(currentCode)

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
		let lastUpdatedDate = null

		for (let index = 0; index < childList.length; index++) {
			let updatedDate = this.#poshObject[childList.at(index)].updatedDate
			if (updatedDate !== undefined && updatedDate > lastUpdatedDate) {
				lastUpdatedDate = updatedDate
			}
		}

		return lastUpdatedDate
	}
}

export const folderObject = Object.assign({}, folderData1)

const folderData = new FolderSystem(folderObject, postObject)

export default folderData
