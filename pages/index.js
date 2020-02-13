import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import Main from '../components/main';
import Page from '../components/page';
import Toggle from '../components/toggle';
import UserButton from '../components/userButton';

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
        <Main>
            <Page user={(user ? "Delaney" : "Ethan")}/>
            <Toggle>
                <UserButton onClick={changeUser}>{(user ? "Delaney" : "Ethan")}</UserButton>
            </Toggle>
        </Main>
    );
}