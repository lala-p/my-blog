import Post from '@components/Post'

const Test = () => {
	return (
		<div>
			<Post
				thumbnail="/image/thumbnail/thumbnailTest.jpg"
				title="fkfkfkfksjdflkjsadlkfja;sdkf;alksd;flkasdjf"
				subTitle="subTitleasdfffffffffffffffffffffffffffffffffffffzxcvzcvzcvzxcvzxcvasdfasdfasdfqewrqwerqwerqwefdsafsdfasdvcxzxcvzxcvadfadsfwerqwerqwerfdsasdfsdf"
				tagList={['reacr', 'hooks', 'useState', '12341234123', 'asda', '111', 'sdfsdf', 'vcxvzxcvzcvzxcv', 'asdfasdfsd', 'dfsdf', 'zsdsad', 'xcvcvxv']}
				createdDate="2022.10.11"
				updatedDate="2022.10.11"
			/>
			<Post
				thumbnail="/image/thumbnail/thumbnailTest.jpg"
				title="fkfkfkfksjdflkjsadlkfja;sdkf;alksd;flkasdjf"
				subTitle="subTitleasdfffffffffffffffffffffffffffffffffffffzxcvzcvzcvzxcvzxcvasdfasdfasdfqewrqwerqwerqwefdsafsdfasdvcxzxcvzxcvadfadsfwerqwerqwerfdsasdfsdf"
				tagList={['reacr', 'hooks', 'useState', '12341234123', 'asdadfafasdf', '111', 'sdfsdf']}
				createdDate="2022.10.11"
				updatedDate={undefined}
			/>
			<br />
		</div>
	)
}

export default Test
