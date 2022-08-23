import React from 'react'

import PostBase from './postBase'

let postData1 = new Object()

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postData1['file1'] = new PostBase()

postData1['file1'].parent = 'example1'
postData1['file1'].title = 'What is JavaScript?'
postData1['file1'].subTitle = "it's me."
postData1['file1'].createdDate = new Date('2022-07-01 17:00:00')
postData1['file1'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
postData1['file1'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}
// postData1['file1'].tableOfContents = [
// 	{ contents: '', id: '' },
// 	{ contents: '', id: '', sub: false },
// 	{ contents: '', id: '' },
// 	{ contents: '', id: '' },
// ]

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postData1['file2'] = new PostBase()

postData1['file2'].parent = 'example1'
postData1['file2'].title = 'ek shfrh tlvek'
postData1['file2'].subTitle = "it's me."
postData1['file2'].createdDate = new Date('2022-07-01 17:00:00')
postData1['file2'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
postData1['file2'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postData1['file3'] = new PostBase()

postData1['file3'].parent = 'example1'
postData1['file3'].title = 'dhkdkdkdk wlqdp wkrhr tlvek'
postData1['file3'].subTitle = "it's me."
postData1['file3'].createdDate = new Date('2022-07-01 17:00:00')
postData1['file3'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
postData1['file3'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postData1['file4'] = new PostBase()

postData1['file4'].parent = 'example2'
postData1['file4'].title = 'rmflrh dkaneh djqtdjTek.'
postData1['file4'].subTitle = "it's me."
postData1['file4'].createdDate = new Date('2022-07-01 17:00:00')
postData1['file4'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
postData1['file4'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postData1['file5'] = new PostBase()

postData1['file5'].parent = 'example2'
postData1['file5'].title = 'file55555555555555555555'
postData1['file5'].subTitle = "it's me."
postData1['file5'].createdDate = new Date('2022-07-01 17:00:00')
postData1['file5'].tagList = ['react', 'FileExample1', 'useCallback', '후기']
postData1['file5'].PostContent = () => {
	return (
		<>
			<h1>file1</h1>
		</>
	)
}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default postData1
