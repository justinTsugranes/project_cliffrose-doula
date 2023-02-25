import Link from 'next/link';
import Image from "next/image";
import { aboutOne } from '../../../public';

function About() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;

    return (
        <div id="about" className="about-area pt-[50px] md:pt-[150px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="max-md:flex max-md:flex-col-reverse lg:grid lg:grid-cols-2">
                    <div className="about-content max-md:pt-10">
                        <span className={subTitle}>About</span>
                        <h2 className={title}>
                            Over 12 years leading and deeps in interiors
                            industrial
                        </h2>
                        <h3 className="mb-12 text-2xl text-secondary">
                            We know that good design means <br /> good business
                        </h3>
                        <p className={desc}>
                            Founded by Robert Downey Jr in 2004, we’re an
                            employee-owned firm pursuing a democratic design
                            process that values everyone’s input. Today we have
                            more than 150 people in London, Hong Kong and Sydney
                            providing architecture, interior & urban design
                            services from concept to completion.
                        </p>
                        <Link
                            href="/about"
                            className="boxed-btn text-[18px] leading-[30px]"
                        >
                            More About Us
                        </Link>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src={aboutOne}
                            alt="about graphic"
                            width={390}
                            height={760}
                            quality={70}
                            className=" object-cover"
                            priority
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
