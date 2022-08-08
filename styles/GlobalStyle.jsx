import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
        
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
            'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
        background-color: ${({ theme }) => theme.color.background2};
        color: ${({ theme }) => theme.color.text};
        line-height: 1;
    }

    a {
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: bold;

    }

    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 3rem;
    }
    h3 {
        font-size: 2.5rem;
    }
    h4 {
        font-size: 2rem;
    }
    h5 {
        font-size: 1.5rem;
    }
    h6 {
        font-size: 1rem;
    }

`

export default GlobalStyle
