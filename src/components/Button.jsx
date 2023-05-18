import { styled } from 'styled-components'

const Button = styled.button`
    background: linear-gradient(135deg, #0e1765, #2a115c);
    border-radius: 16px;
    color: #ccc;
    font-weight: 700;
    width: 50%;
    height: 50px;
    margin-left: 8px;
    cursor: pointer;

    &:disabled {
        background: #ccc;
        color: #2a115c;
        cursor: not-allowed;
    }

    @media (max-width: 1200px) {
        width: 60%;
    }

    @media (max-width: 992px) {
        width: 70%;
    }

    @media (max-width: 769px) {
        width: 100%;
    }

    @media (max-width: 576px) {
        margin: 16px 0 0 0;
        width: 100%;
    }
`

export default Button
