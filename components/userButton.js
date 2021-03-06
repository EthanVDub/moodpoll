import styled from 'styled-components';

const UserButton = styled.button`
    background: #c2eec7;
    border-radius: 20px;
    border: 2px solid #c2eec7;
    color: white;
    font-size: 300%;

    @media (max-width: 768px) {
        font-size: 250%;
      }
`

export default UserButton;