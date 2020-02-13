import useSWR from 'swr';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import Result from '../components/result';

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
            window.location.assign('http://google.com');;
        }, 500);
        return () => clearTimeout(timer);
    }, [])

    
    return (
        <Result />
    );
  }