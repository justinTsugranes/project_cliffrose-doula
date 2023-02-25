import Link from 'next/link';
import * as AiIcons from 'react-icons/ai';
import Image from "next/legacy/image";

function Footer() {
    const currentYear = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
    });

    return (
        <footer className="footer-area pt-[60px] md:pt-[120px]">
            <div className="footer-top">
                <div className="custom-container">
                    <div className="gap-[30px] lm:grid lm:grid-cols-12 xl:grid-cols-5 xl:gap-x-[30px]">
                        <div className="max-lg:col-span-12">
                            <div className="footer-logo">
                                <Image
                                    src="/images/logo/footer-logo.webp"
                                    alt="Logo"
                                    width={70}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div className="max-sm:pt-[35px] fixed-lm:col-span-6 fixed-md:col-span-4 fixed-lg:col-span-3">
                            <div className="footer-widget-item">
                                <h2 className="title">Contact</h2>
                                <ul className="contact-info mt-[25px]">
                                    <li>
                                        17 Princess Road, London, Greater
                                        London, NW18JR, Uk
                                    </li>
                                    <li>
                                        <Link
                                            href="mailto:contact@cliffrosedoula.com"
                                            className="transition-all hover:text-black"
                                        >
                                            contact@cliffrosedoula.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="tel:+0084-912-3548-073"
                                            className="transition-all hover:text-black"
                                        >
                                            (+506) 5555-5555
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-sm:pt-[30px] fixed-lm:col-span-6 fixed-md:col-span-3 fixed-lg:col-span-3">
                            <div className="footer-widget-item">
                                <h2 className="title">Quick Links</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Affiliate</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Shop</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Partners</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-sm:pt-[30px] fixed-lm:col-span-6 fixed-md:col-span-2 fixed-lg:col-span-3">
                            <div className="footer-widget-item">
                                <h2 className="title">Studio</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Career</Link>
                                    </li>
                                    <li>
                                        <Link href="/posts">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-sm:pt-[30px] fixed-lm:col-span-6 fixed-md:col-span-3 fixed-lg:col-span-3">
                            <div className="footer-widget-item">
                                <h2 className="title">Help Center</h2>
                                <ul className="footer-list mt-[25px]">
                                    <li>
                                        <Link href="/about">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Help</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="custom-container">
                    <div className="inner-container mt-[50px] border-t border-[#dfdfdf] py-9 md:mt-[95px]">
                        <div className="flex flex-col md:grid md:grid-cols-12">
                            <div className="max-lm:order-last max-lm:pt-[10px] md:col-span-4">
                                <div className="copyright mb-[10px] flex-wrap justify-center md:mb-0 md:justify-start">
                                    © {currentYear}
                                    <span className="mx-1">
                                        Cliffrose Doula Care
                                    </span>
                                    Made with © by
                                    <div className="mx-1 text-[#f53400]">
                                        <AiIcons.AiFillHeart />
                                    </div>
                                    <Link
                                        href="https://themeforest.net/user/codecarnival/portfolio"
                                        target="_blank"
                                        legacyBehavior>
                                        <span> misfitDodo Media</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="md:col-span-6">
                                <ul className="footer-social-link mb-[10px] md:mb-0">
                                    <li>
                                        <Link href="https://twitter.com/">
                                            Twitter
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://facebook.com/">
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://instagram.com/">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://tumblr.com/">
                                            Tumblr
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://pinterest.com/">
                                            Pinterest
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="md:col-span-2">
                                <ul className="footer-language flex justify-center md:justify-end">
                                    <li className="mr-8">
                                        <Link href="/about">
                                            <a className="text-[14px] uppercase leading-6 text-[#30373E] transition-all hover:text-[#263a4f]">
                                                Eng
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">
                                            <a className="text-[14px] uppercase leading-6 text-[#30373E] transition-all hover:text-[#263a4f]">
                                                Fre
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
