import { styled } from 'styled-components'

const Button = styled.button`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;

    &:disabled {
        background-color: #eee;
        border-color: #eee;
        cursor: not-allowed;
    }
`

export default Button
