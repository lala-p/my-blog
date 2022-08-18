class NoticeBase {
	constructor(noticeNo) {
		this.noticeNo = noticeNo
		this.title = null
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
