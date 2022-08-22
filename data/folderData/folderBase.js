class FolderBase {
	constructor() {
		this.type = 'folder'
		this.name = null
		this.parent = undefined
		this.childList = new Array()
	}
}

export default FolderBase
