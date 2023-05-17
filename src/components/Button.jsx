import { styled } from 'styled-components'

const Button = styled.button`
    background: linear-gradient(135deg, #0e1765, #2a115c);
    border: 1px solid #ccc;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    width: 50%;
    height: 50px;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
    margin: 0 20px 0 20px;
    cursor: pointer;

    &:disabled {
        background: #ccc;
        border: 1px solid #2a115c;
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
