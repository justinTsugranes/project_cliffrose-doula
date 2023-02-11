import Link from 'next/link';

function PageBanner() {
    return (
        <div className="page-banner relative flex h-[550px] items-end justify-start bg-page-banner-1 bg-cover bg-fixed bg-center before:absolute before:h-full before:w-full before:bg-black before:opacity-40 lg:h-[950px]">
            <div className="container">
                <div className="banner-content relative pb-[80px]">
                    <span className="block max-w-[225px] text-[18px] uppercase leading-[29px] text-white">
                        Nordic interior studio
                    </span>
                    <h2 className="max-w-[320px] text-[30px] text-white sm:text-[100px] sm:leading-[110px]">
                        About Us
                    </h2>
                    <div className="info block pt-[15px] text-[14px] uppercase text-white transition-all hover:text-primary lm:hidden">
                        <Link href="tel:+contact@cliffrosedoula.com">
                            contact@cliffrosedoula.com
                        </Link>
                    </div>
                </div>
                <div className="info absolute bottom-[100px] right-[15px] z-[2] hidden text-[14px] uppercase text-white transition-all hover:text-primary lm:block xl:right-[70px]">
                    <Link href="tel:+contact@cliffrosedoula.com">
                        contact@cliffrosedoula.com
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
