import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


let postData1 = new Object()

postData1['file1'] = {
	type: 'file',
	title: 'What is JavaScript?',
	subTitle: "it's me.",
	createdDate: new Date('2022-07-01 17:00:00'),
	tagList: ['react', 'FileExample1', 'useCallback', '후기'],
	PostContent: () => {
		return (
			<>
				<h1>file1</h1>
			</>
		)
	},
	tableOfContents: [
		{ contents: '', id: '' },
		{ contents: '', id: '', sub: false },
		{ contents: '', id: '' },
		{ contents: '', id: '' },
	],
	parent: 'example1',
}

postData1['file2'] = {
	type: 'file',
	title: 'asdfsadf',
	subTitle: '2222222222222222222222222',
	createdDate: new Date('2022-07-01 18:00:00'),
	updatedDate: new Date('2022-07-03 17:00:00'),
	tagList: ['nextJs', 'useState', '후기', 'useCallback'],
	PostContent: () => {
		return (
			<>
				<h1>file2</h1>
			</>
		)
	},
	parent: 'example1',
}

postData1['file3'] = {
	type: 'file',
	title: 'file33333hahahahahahahahahahahah',
	subTitle: 'hahahahahahahahahahahah',
	createdDate: new Date('2022-07-01 18:00:00'),
	updatedDate: new Date('2022-07-03 17:00:00'),
	tagList: ['nextJs', 'useState', '후기', 'useCallback'],
	PostContent: () => {
		return (
			<>
				<h1>file3</h1>
			</>
		)
	},
	parent: 'example1',
}

postData1['file4'] = {
	type: 'file',
	title: 'rmflrh dkaneh djqtdjTek',
	subTitle: 'hahahahahahahahahahahah',
	createdDate: new Date('2022-07-01 18:00:00'),
	updatedDate: new Date('2022-07-03 17:00:00'),
	tagList: ['nextJs', 'useState', '후기', 'useCallback'],
	PostContent: () => {
		return (
			<>
				<h1>file4</h1>
			</>
		)
	},
	parent: 'example1',
}

postData1['file5'] = {
	type: 'file',
	title: '후기',
	subTitle: 'hahahahahahahahahahahah',
	createdDate: new Date('2022-07-01 18:00:00'),
	updatedDate: new Date('2022-07-03 17:00:00'),
	tagList: ['nextJs', 'useState', '후기', 'useCallback'],
	PostContent: () => {
		return (
			<>
				<h1>file5</h1>
			</>
		)
	},
	parent: 'example1',
}

export default postData1
