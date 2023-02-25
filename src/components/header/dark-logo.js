import Link from 'next/link';
import Image from 'next/image';
import { logoLogoTwo } from '../../../public';

function DarkLogo() {
    return (
        <Link href="/" className="inline-block align-middle leading-[1]" legacyBehavior>
            <Image
                src={logoLogoTwo}
                alt="Logo"
                width={70}
                height={70}
                as="image"
                priority
                loading="eager"
            />
        </Link>
    );
}

export default DarkLogo;
