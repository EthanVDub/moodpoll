import useSWR from 'swr';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';


function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Success() {
    const [mounted, setMounted] = useState(false)
    const router = useRouter();

    const { data } = useSWR(mounted ? `/api/poll?user=${router.query.user}&response=${router.query.response}` : null, fetcher)

    useEffect(() => {
        setMounted(true)
        const timer = setTimeout(() => {
            router.push("/");
        }, 3000);
        return () => clearTimeout(timer);
    }, [])

    
    return (
        <h1>Success!</h1>
    );
  }