import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from "next/image";
import * as AiIcons from 'react-icons/ai';

function Services({ services }) {
    return (
        <div className="service-area relative pt-[60px] before:absolute before:top-[170px] before:left-[-168px] before:h-[336px] before:w-[336px] before:bg-pattern-1 md:pt-160">
            <div className="container max-w-full lg:pl-[70px] lg:pr-0">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12">
                    <div className="max-md:pt-[50px] lg:col-span-6 lg:mr-[40px] xl:mr-[140px]">
                        <div className="service-content ml-auto w-full xl:w-[490px]">
                            <span className="sub-title mb-[25px] block text-[18px] uppercase leading-[32px] text-secondary">
                                Services
                            </span>
                            <h2 className="title mb-[60px] text-[32px] text-black lm:text-[42px] lm:leading-[50px]">
                                Solutions for <br /> your dream.
                            </h2>
                            <div className="grid max-md:gap-[25px] fixed-md:grid fixed-md:grid-cols-2">
                                {services?.map((service) => {
                                    const Icon = AiIcons[service?.icon];
                                    return (
                                        <div
                                            className="service-box"
                                            key={service?.title}
                                        >
                                            <div className="service-box-inner">
                                                <div className="service-list">
                                                    <div className="icon">
                                                        <Icon />
                                                    </div>
                                                    <div className="content">
                                                        <h3 className="title">
                                                            <Link href="/projects" className="hover:underline" legacyBehavior>
                                                                {service?.title}
                                                            </Link>
                                                        </h3>
                                                        <p className="desc">
                                                            {service?.content}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="service-image relative flex h-[679px] w-full justify-end lg:h-full">
                            <Image
                                src="/images/service/1.webp"
                                width={875}
                                height={729}
                                alt="Service Image"
                                quality={70}
                                className="fill object-cover"
                                priority
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Services.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
};

export default Services;
