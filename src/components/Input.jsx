import { styled } from 'styled-components'

const Input = styled.input`
    border: 1px solid #2a115c;
    border-radius: 10px;
    padding: 8px 16px;
    width: 50%;
    height: 50px;

    ::placeholder {
        color: #2a115c;
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
        width: 90%;
    }
`

export default Input
