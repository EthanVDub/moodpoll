import styled from 'styled-components';

const Button = styled.button`
    background: palevioletred;
    border-radius: 20px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 0.025em;
    padding-bottom: .05em;
    font-size: 700%;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        font-size: 500%;
      }

`
export default Button;