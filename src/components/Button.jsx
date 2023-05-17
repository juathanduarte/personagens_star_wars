import { styled } from 'styled-components'

const Button = styled.button`
    background: linear-gradient(135deg, #0e1765, #2a115c);
    border: 1px solid #ccc;
    border-color: #adadad;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    width: 50%;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
    margin: 0 20px 0 20px;
    cursor: pointer;

    &:disabled {
        background: #ccc;
        border-color: #adadad;
        cursor: not-allowed;
    }
`

export default Button
