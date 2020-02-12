import useSWR from 'swr';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import styled, { css } from 'styled-components';

  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 10em;
    text-align: center;
    color: palevioletred;
  `;
  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
  `;

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
        }, 1500);
        return () => clearTimeout(timer);
    }, [])

    
    return (
        <Wrapper>
            <Title>
                Thank You!
            </Title>
        </Wrapper>
    );
  }