import { Post } from '../baseClass'

let postObject1 = new Object()

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['file1'] = new Post()

postObject1['file1'].parent = 'example1'
postObject1['file1'].title = 'What is JavaScript?'
postObject1['file1'].subTitle = "it's me."
postObject1['file1'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file1'].updatedDate = new Date('2022-07-01 17:00:00')
postObject1['file1'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
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
postObject1['file2'].title = 'ek shfrh tlvek'
postObject1['file2'].subTitle = "it's me."
postObject1['file2'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file2'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
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
postObject1['file3'].title = 'dhkdkdkdk wlqdp wkrhr tlvek'
postObject1['file3'].subTitle = "it's me."
postObject1['file3'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file3'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
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
postObject1['file4'].title = 'rmflrh dkaneh djqtdjTek.'
postObject1['file4'].subTitle = "it's me."
postObject1['file4'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file4'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
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
postObject1['file5'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
postObject1['file5'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default postObject1
