class PostBase {
	constructor() {
		this.parent = null
		this.title = null
		this.subTitle = undefined
		this.createdDate = null
		this.updatedDate = undefined
		this.tagList = new Array()
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

export default PostBase
