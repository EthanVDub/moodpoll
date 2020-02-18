
import Link from 'next/link';
import Button from '../components/button';
import Response from './response';

const ResponseLink = (props) => (
    <Response key={props.response}>
        <Link href={`/success?user=${props.user}&response=${props.response}`} as={"/success"}>
            <Button>
                {props.children}
            </Button>
        </Link>
    </Response>
);

export default ResponseLink;