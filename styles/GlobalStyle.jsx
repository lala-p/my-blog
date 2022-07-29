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

    /* .select-none {
        -ms-user-select: none;
        -moz-user-select: -moz-none;
        -khml-user-select: none;
        -webkit-user-select: none;
        user-select: none;

    }

    .cursor-pointer {
        cursor: pointer;
    } */

`

export default GlobalStyle
