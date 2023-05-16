import { styled } from 'styled-components'

const Button = styled.button`
    background-color: red;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #444;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    &:disabled {
        background-color: #eee;
        border-color: #eee;
        cursor: not-allowed;
    }
`

export default Button
