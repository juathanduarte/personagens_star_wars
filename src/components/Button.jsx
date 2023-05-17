import { styled } from 'styled-components'

const Button = styled.button`
    background: linear-gradient(135deg, #0e1765, #2a115c);
    border-radius: 10px;
    color: #ccc;
    font-weight: 700;
    width: 50%;
    height: 50px;
    margin-left: 10px;
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

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 576px) {
        margin-top: 10px;
        width: 90%;
    }
`

export default Button
