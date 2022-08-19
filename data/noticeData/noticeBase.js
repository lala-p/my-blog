class NoticeBase {
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

export default NoticeBase
