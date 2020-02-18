import Emoji from './emoji';
import styled from 'styled-components';
import ResponseLink from './responseLink'

const StyledPage = styled.div`
    margin-top: 15em;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 0em;
        justify-content: center;
      }
`

const Page = (props) => (
    <StyledPage>
        <ResponseLink user={props.user} response={5}><Emoji label="joy" symbol="😄" /></ResponseLink>
        <ResponseLink user={props.user} response={4}><Emoji label="smiling" symbol="🙂"/></ResponseLink>
        <ResponseLink user={props.user} response={3}><Emoji label="so-so" symbol="😐"/></ResponseLink>
        <ResponseLink user={props.user} response={2}><Emoji label="frown" symbol="😕"/></ResponseLink>
        <ResponseLink user={props.user} response={1}><Emoji label="crying" symbol="😭"/></ResponseLink>
    </StyledPage>
);

export default Page;