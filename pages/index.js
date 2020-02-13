import Link from 'next/link';
import styled, { css } from 'styled-components';
import Emoji from './emoji';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';

const Button = styled.button`
    background: palevioletred;
    border-radius: 20px;
    border: 2px solid palevioletred;
    color: palevioletred;
    padding: 0.025em;
    padding-bottom: .05em;
    font-size: 700%;

`

const ToggleButton = styled.button`
    background: #c2eec7;
    border-radius: 20px;
    border: 2px solid #c2eec7;
    color: white;
    font-size: 300%;
`

const StyledPage = styled.div`
    margin-top: 15em;
    display: flex;
    justify-content: space-evenly;
`

const StyledToggle = styled.div`
    display: flex;
    justify-content: center;
    margin: .5em;
`

const StyledMain = styled.div`
    height: 100%;
`

const ResponseLink = (props) => (
    <div className="response" key={props.response}>
        <Link href={`/success?user=${props.user}&response=${props.response}`} as={"/success"}>
            <Button>
                {props.children}
            </Button>
        </Link>
    </div>
);


const Page = (props) => (
        <StyledPage>
            <ResponseLink user={props.user} response={5}><Emoji label="joy" symbol="😄" /></ResponseLink>
            <ResponseLink user={props.user} response={4}><Emoji label="smiling" symbol="🙂"/></ResponseLink>
            <ResponseLink user={props.user} response={3}><Emoji label="so-so" symbol="😐"/></ResponseLink>
            <ResponseLink user={props.user} response={2}><Emoji label="frown" symbol="😕"/></ResponseLink>
            <ResponseLink user={props.user} response={1}><Emoji label="crying" symbol="😭"/></ResponseLink>
        </StyledPage>
    );



export default function Index() {

    //False = Ethan, True = Delaney
    const [user, setUser] = useState(false)
    const router = useRouter();
    
    useEffect(() => {
        if(router.query?.user) {
            setUser(router.query.user);
        }
    }, [router.query.user])

    const changeUser = () => {
        setUser(!user);
    }
    
    return (
        <StyledMain>
            <Page user={(user ? "Delaney" : "Ethan")}/>
            <StyledToggle>
                <ToggleButton onClick={changeUser}>{(user ? "Delaney" : "Ethan")}</ToggleButton>
            </StyledToggle>
        </StyledMain>
    );
}