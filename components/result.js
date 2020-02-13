import styled, { css } from 'styled-components';

  const Title = styled.h1`
    font-size: 10em;
    text-align: center;
    color: palevioletred;
  `;
  
  const Wrapper = styled.section`
    padding: 4em;
  `;


  const Result = () => (
    <Wrapper>
        <Title>
            Thank You!
        </Title>
    </Wrapper>
  );

  export default Result;