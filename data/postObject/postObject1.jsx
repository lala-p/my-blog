import { Post } from '../baseClass'
import PostImage from '@pageComponents/post/PostImage'
import PostCodeBlock from '@pageComponents/post/PostCodeBlock'

let postObject1 = new Object()

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['file1'] = new Post()

postObject1['file1'].parent = 'example1'
postObject1['file1'].title = '정렬하기'
postObject1['file1'].subTitle = "it's me."
postObject1['file1'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['file1'].updatedDate = new Date('2022-07-01 17:00:00')
postObject1['file1'].tagList = ['javaScript', 'sort']

const code = `import { useState } from 'react'

const Test = (props) => {

	const [value, setValue] = useState('hello')


	return (
		<div>
			<h1>Test</h1>
		
		</div>
	)
}


export default Test
`

postObject1['file1'].PostContent = () => {
	return (
		<>
			<h1>제목1 Title1</h1>
			<h2>제목2 Title2</h2>
			<h3>제목3 Title3</h3>
			<h4>제목4 Title4</h4>

			<p>
				문장문장문장문장. 문장문asdasd <br />
				장문장문장.문장문장문장
				<strong>asdassadasdasdsadz문장</strong>
			</p>

			<p>
				문장문장문장문장.문장문장문장문장.문장문장문장
				<strong>asdassadasdasdsadz문장</strong>
			</p>
			<PostImage src="/image/thumbnail/thumbnailTest.jpg" width={571} height={761} />
			{/* <PostImage src="/image/thumbnail/test.PNG" width={1468} height={457} /> */}

			<p>
				문장문장문장문장.문장문장문장문장.문장문장문장
				<strong>asdassadasdasdsadz문장</strong>
			</p>
			<p>
				문장문장문장문장.문장문장문장문장.문장문장문장
				<strong>asdassadasdasdsadz문장</strong>
			</p>
			<p>
				문장문장문장문장.문장문장문장문장.문장문장문장
				<strong>asdassadasdasdsadz문장</strong>
			</p>
			<PostCodeBlock text={code} language={'jsx'} />
			<p>
				문장문장문장문장.문장문장문장문장.문장문장문장
				<strong>asdassadasdasdsadz문장</strong>
			</p>
			<p>
				문장문장문장문장.문장문장문장문장.문장문장문장
				<strong>asdassadasdasdsadz문장</strong>
			</p>
		</>
	)
}

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
			<h2 id="0">test</h2>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h3 id="1">test1</h3>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h3 id="2">test2</h3>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</>
	)
}
postObject1['file5'].tableOfContents = [
	{ id: '0', heading: 'heasdasdasdasdsadasdasdasdasdllo?', sub: false },
	{ id: '1', heading: "it's me...asdasdasd", sub: true },
	{ id: '2', heading: 'hahahaasdfadfasdfasdfsdfha', sub: true },
]

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

postObject1['test'] = new Post()

postObject1['test'].parent = 'example2'
postObject1['test'].title = 'table of contents TEST'
postObject1['test'].subTitle = "it's me."
postObject1['test'].createdDate = new Date('2022-07-01 17:00:00')
postObject1['test'].tagList = ['table', 'of', 'contents']

postObject1['test'].PostContent = () => {
	return (
		<>
			<h2 id="start">test</h2>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h3 id="test1">test1</h3>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h3 id="test2">test2</h3>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h3 id="test3">test3</h3>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<h3 id="test4">test4</h3>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
		</>
	)
}
postObject1['test'].tableOfContents = [
	{ id: 'start', heading: 'hello?', sub: false },
	{ id: 'test1', heading: "it's me...", sub: true },
	{ id: 'test2', heading: 'hahahaha', sub: true },
	{ id: 'test3', heading: 'hohoho' },
	{ id: 'test4', heading: 'lulululululu', sub: false },
]

export default postObject1
