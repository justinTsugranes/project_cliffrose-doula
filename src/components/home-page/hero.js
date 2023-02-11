import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import SwiperComps, { Slide } from '../swiper';

const heroImage = `relative w-full md:h-[980px] h-[725px] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-30 before:z-[1] before:pointer-events-none overflow-hidden`;
const heroContent = `absolute sm:w-[calc(100%_-_100px)] left-auto top-1/2 transform translate-y-[-50%] z-[2]`;

function HeroOne({ heroItems, settings }) {
    settings = {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: { clickable: true, type: 'bullets' },
        navigation: false,
        slidesPerView: 1,
        spaceBetween: 0,
    };

    return (
        <SwiperComps sliderCName="hero-area" settings={settings}>
            {heroItems?.map((heroItem) => {
                const TwitterIcon = FaIcons[heroItem?.twitterIcon];
                const FacebookIcon = FaIcons[heroItem?.facebookIcon];
                const GoogleIcon = FaIcons[heroItem?.googleIcon];

                return (
                    <Slide className="hero-item" key={heroItem.id}>
                        <div className={heroImage}>
                            <Image
                                src={heroItem?.image}
                                alt={heroItem?.title}
                                className="fill object-cover"
                                width={1920}
                                height={980}
                                quality={70}
                                priority
                            />
                        </div>
                        <div className="custom-container container">
                            <div className={heroContent}>
                                <div className="hero-inner grid grid-cols-12">
                                    <div className="hero-year col-span-2 hidden text-white md:block">
                                        <div className="social-holder flex h-full flex-col justify-between">
                                            <span>{heroItem?.heroYear}</span>
                                            <ul className="social-box mb-[-140px]">
                                                <li className="mb-[25px]">
                                                    <Link
                                                        href="https://example.com/"
                                                        target="_blank"
                                                        aria-label="Twitter"
                                                    >
                                                        <TwitterIcon />
                                                    </Link>
                                                </li>
                                                <li className="mb-[25px]">
                                                    <Link
                                                        href="https://example.com/"
                                                        target="_blank"
                                                        aria-label="Facebook"
                                                    >
                                                        <FacebookIcon />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="https://example.com/"
                                                        target="_blank"
                                                        aria-label="Google"
                                                    >
                                                        <GoogleIcon />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-span-12 md:col-span-10">
                                        <div
                                            className="hero-slidedown mb-[10px] block text-[18px] uppercase leading-8 tracking-[5px] text-white delay-300 md:mb-[30px]"
                                            dangerouslySetInnerHTML={{
                                                __html: heroItem?.heroCategory,
                                            }}
                                        />
                                        <h2
                                            className="hero-slidedown mb-[90px] text-[50px] leading-[1.2] text-white delay-[600ms] md:text-[100px] md:leading-[100px]"
                                            dangerouslySetInnerHTML={{
                                                __html: heroItem?.heroTitle,
                                            }}
                                        />
                                        <div className="hero-slidedown delay-[1200ms]">
                                            <Link
                                                href="/about"
                                                className="boxed-btn text-[18px] leading-[30px]"
                                            >
                                                More About Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info absolute bottom-[100px] right-auto z-[2] text-[14px] uppercase text-white transition-all hover:text-primary sm:right-[70px]">
                                <Link href="tel:+contact@cliffrosedoula.com">
                                    {heroItem?.heroContactInfo}
                                </Link>
                            </div>
                        </div>
                        <div className="mouse-btn-wrap absolute bottom-[30px] left-1/2 -translate-x-1/2">
                            <Link href="#about" passHref>
                                <ul className="mouse-btn-down">
                                    <li className="chevron animate-move" />
                                    <li className="chevron animate-move2" />
                                    <li className="chevron animate-move3" />
                                </ul>
                            </Link>
                        </div>
                    </Slide>
                );
            })}
        </SwiperComps>
    );
}

HeroOne.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    settings: PropTypes.shape({
        slidesPerView: PropTypes.number,
        spaceBetween: PropTypes.number,
        breakpoints: PropTypes.shape({}),
    }),
};

export default HeroOne;
