import Link from 'next/link';
import Image from "next/legacy/image";

function WhiteLogo() {
    return (
        <Link href="/" className="inline-block align-middle leading-[1]" legacyBehavior>
            <Image
                src="/images/logo/logo.webp"
                alt="Logo"
                width={70}
                height={70}
            />
        </Link>
    );
}

export default WhiteLogo;
