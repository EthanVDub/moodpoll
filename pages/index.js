import Link from 'next/link';
import Button from '@material-ui/core/Button'
import {useState} from 'react';
import FlexContainer from 'react-styled-flexbox';
import styled from 'styled-components';



const ResponseLink = (props) => (
    <div className="response" key={props.response}>
        <Link href={`/success?user=${props.user}&response=${props.response}`} as={"/success"}>
            <Button variant="contained" color="primary">
                {props.children}
            </Button>
        </Link>
    </div>
);

const StyledResponse = styled(ResponseLink)`
    background: blue;
`


const Page = (props) => (
        <FlexContainer justifySpaceAround>
            <StyledResponse user={props.user} response={1}>D:</StyledResponse>
            <StyledResponse user={props.user} response={2}>:(</StyledResponse>
            <StyledResponse user={props.user} response={3}>:|</StyledResponse>
            <StyledResponse user={props.user} response={4}>:)</StyledResponse>
            <StyledResponse user={props.user} response={5}>:D</StyledResponse>
        </FlexContainer>
    );



export default function Index() {

    //False = Ethan, True = Delaney
    const [user, setUser] = useState(false)

    const changeUser = () => {
        setUser(!user);
    }
    
    return (
        <main className="center">
            <Page user={(user ? "Delaney" : "Ethan")}/>
            <div className="toggleButton">
                <Button variant="contained" color="secondary" onClick={changeUser}>{(user ? "Delaney" : "Ethan")}</Button>
            </div>
            <style jsx>{`
                .toggleButton {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
            `}</style>
        </main>
    );
}