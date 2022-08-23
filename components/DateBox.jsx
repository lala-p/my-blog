import styled from 'styled-components'

export const DateBox = styled.div`
	display: inline-flex;
	flex-direction: row;
`

export const DateBox1 = styled(DateBox)`
	> * {
		&:nth-child(2) {
			::before {
				content: '·';
				font-weight: bold;
				margin-left: 0.75rem;
				margin-right: 0.75rem;
			}
		}
	}
`

export const DateBox2 = styled(DateBox)`
	> * {
		&:nth-child(2) {
			::before {
				content: '·';

				margin-left: 0.75rem;
				margin-right: 0.75rem;

				font-weight: bold;
				color: ${({ theme }) => theme.color.sub};
			}
		}
	}
`
export const DateBox3 = styled(DateBox)`
	> * {
		color: ${({ theme }) => theme.color.sub};

		&:first-child {
			::before {
				content: 'posted';

				margin-right: 0.75rem;

				color: ${({ theme }) => theme.color.sub};
			}
		}

		&:nth-child(2) {
			margin-left: 1rem;
			::before {
				content: 'updated';

				margin-right: 0.75rem;

				color: ${({ theme }) => theme.color.sub};
			}
		}
	}
`

export const DateBox4 = styled(DateBox)`
	> * {
		&:first-child {
			::before {
				content: 'last posted';
				margin-right: 0.75rem;
			}
		}

		&:nth-child(2) {
			margin-left: 2rem;

			::before {
				content: 'last updated';
				margin-right: 0.75rem;
			}
		}
	}
`
