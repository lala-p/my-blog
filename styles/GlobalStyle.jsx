import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

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
        background-color: ${(props) => props.theme.color2};
        color: ${(props) => props.theme.color3};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        
    }

`

export default GlobalStyle
