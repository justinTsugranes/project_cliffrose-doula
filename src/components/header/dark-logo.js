import Link from 'next/link';
import Image from 'next/image';

function DarkLogo() {
    return (
        <Link href="/" className="inline-block align-middle leading-[1]">
            <Image
                src="/images/logo/logo-2.webp"
                alt="Logo"
                width={70}
                height={70}
            />
        </Link>
    );
}

export default DarkLogo;
