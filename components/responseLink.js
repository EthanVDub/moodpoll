
import Link from 'next/link';
import Button from '../components/button';

const ResponseLink = (props) => (
    <div className="response" key={props.response}>
        <Link href={`/success?user=${props.user}&response=${props.response}`} as={"/success"}>
            <Button>
                {props.children}
            </Button>
        </Link>
    </div>
);

export default ResponseLink;