import { Post } from '../baseClass'

let postObject1 = new Object()

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['file1'] = new Post()

postObject1['file1'].parent = 'example1'
postObject1['file1'].title = '정렬하기'
postObject1['file1'].subTitle = "it's me."
postObject1['file1'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file1'].updatedDate = new Date('2022-07-01 17:00:00')
postObject1['file1'].tagList = ['javaScript', 'sort']
postObject1['file1'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}
// postObject1['file1'].tableOfContents = [
// 	{ contents: '', id: '' },
// 	{ contents: '', id: '', sub: false },
// 	{ contents: '', id: '' },
// 	{ contents: '', id: '' },
// ]

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['file2'] = new Post()

postObject1['file2'].parent = 'example1'
postObject1['file2'].title = '개인 프로젝트'
postObject1['file2'].subTitle = "it's me."
postObject1['file2'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file2'].tagList = ['프로젝트', '후기']
postObject1['file2'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['file3'] = new Post()

postObject1['file3'].parent = 'example1'
postObject1['file3'].title = '최신 문법'
postObject1['file3'].subTitle = "it's me."
postObject1['file3'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file3'].tagList = ['react', 'javascript', 'ES6', '표준']
postObject1['file3'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['file4'] = new Post()

postObject1['file4'].parent = 'example2'
postObject1['file4'].title = '프로젝트 후기'
postObject1['file4'].subTitle = "it's me."
postObject1['file4'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file4'].tagList = ['react', '개인 프로젝트', 'blog', '블로그', '후기']
postObject1['file4'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['file5'] = new Post()

postObject1['file5'].parent = 'example2'
postObject1['file5'].title = 'file55555555555555555555'
postObject1['file5'].subTitle = "it's me."
postObject1['file5'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file5'].tagList = ['react', 'hooks', 'useCallback']
postObject1['file5'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default postObject1
