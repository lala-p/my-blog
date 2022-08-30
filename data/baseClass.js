export class Post {
	constructor() {
		this.parent = null
		this.title = null
		this.subTitle = null
		this.writer = 'lala-p'
		this.createdDate = null
		this.updatedDate = undefined
		this.tagList = new Array()
		this.thumbnail = '/image/thumbnail/empty_thumbnail.jpg'
		this.PostContent = () => {
			return (
				<>
					<h1>Post</h1>
				</>
			)
		}
		this.tableOfContents = undefined
	}
}

export class Folder {
	constructor() {
		this.type = 'folder'
		this.name = null
		this.parent = undefined
		this.childList = new Array()
		// this.thumbnail = '/image/thumbnail/empty_thumbnail.jpg'
		this.thumbnail = '/image/thumbnail/thumbnailTest.jpg'
	}
}

export class Notice {
	constructor(noticeNo) {
		this.noticeNo = noticeNo
		this.title = null
		this.writer = 'lala-p'
		this.createdDate = null
		this.updatedDate = undefined
		this.NoticeContent = () => {
			return (
				<>
					<h1>Notice</h1>
				</>
			)
		}
	}
}
