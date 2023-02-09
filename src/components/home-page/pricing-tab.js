import Link from 'next/link';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as AiIcons from 'react-icons/ai';

function PricingTab({ pricingItems }) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="pricing-area pt-[45px] md:pt-155">
            <div className="container">
                <div className="pb-[20px]">
                    <h2 className="text-center text-[32px] lm:text-[42px] lm:leading-[50px]">
                        Start Your Dream With An Affordable
                    </h2>
                </div>
                <ul className="pricing-tab flex justify-center pb-[65px] max-sm:flex-wrap">
                    <li
                        className={
                            toggleState === 1 ? 'monthly active' : 'monthly'
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <span className="cursor-pointer text-[14px] text-[#999999]">
                            Hourly Consulations
                        </span>
                        <span className="round" />
                    </li>
                    <li
                        className={
                            toggleState === 2 ? 'yearly active' : 'yearly'
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <span className="cursor-pointer text-[14px] text-[#999999]">
                            Full Birth Packages
                        </span>
                    </li>
                </ul>
                <div className="pricing-content">
                    <div
                        className={
                            toggleState === 1
                                ? 'common monthly active'
                                : 'common monthly'
                        }
                    >
                        <div className="grid gap-[15px] md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                            {pricingItems?.map((pricingItem) => {
                                const Icon = AiIcons[pricingItem?.icon];
                                return (
                                    <div
                                        className="pricing-item animate-fadeInUp"
                                        key={pricingItem.id}
                                    >
                                        <span className="title">
                                            {pricingItem?.monthlyPlan}
                                        </span>
                                        <div className="flex">
                                            <span className="price">
                                                {pricingItem?.monthlyPrice}
                                            </span>
                                            <span className="ml-[10px] text-[20px] leading-[47px]">
                                                / Month
                                            </span>
                                        </div>
                                        <p className="desc">
                                            {pricingItem?.monthlyExcerpt}
                                        </p>

                                        <ul className="price-list relative min-h-[210px]">
                                            {pricingItem?.monthlyPricingList?.map(
                                                (item) => (
                                                    <li
                                                        key={item}
                                                        className="block"
                                                    >
                                                        <span className="icon">
                                                            <Icon />
                                                        </span>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <Link href="/about">
                                            <a className="boxed-outline-btn">
                                                Get Started Now
                                            </a>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className={
                            toggleState === 2
                                ? 'common yearly active'
                                : 'common yearly'
                        }
                    >
                        <div className="grid gap-[15px] md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                            {pricingItems?.map((pricingItem) => {
                                const Icon = AiIcons[pricingItem?.icon];
                                return (
                                    <div
                                        className="pricing-item animate-fadeInUp"
                                        key={pricingItem.id}
                                    >
                                        <span className="title">
                                            {pricingItem?.annualPlan}
                                        </span>
                                        <div className="flex">
                                            <span className="price">
                                                {pricingItem?.annualPrice}
                                            </span>
                                            <span className="ml-[10px] text-[20px] leading-[47px]">
                                                / Year
                                            </span>
                                        </div>
                                        <p className="desc">
                                            {pricingItem?.annualExcerpt}
                                        </p>

                                        <ul className="price-list relative min-h-[210px]">
                                            {pricingItem?.annualPricingList?.map(
                                                (item) => (
                                                    <li
                                                        key={item}
                                                        className="block"
                                                    >
                                                        <span className="icon">
                                                            <Icon />
                                                        </span>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <Link href="/about">
                                            <a className="boxed-outline-btn">
                                                Get Started Now
                                            </a>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="contact-info pt-[55px] text-center text-[18px] leading-[1.4] text-secondary">
                    Do you have something else in mind?
                    <Link href="/contact">
                        <a className="m-[5px] text-[#0099ff] underline">
                            Contact us
                        </a>
                    </Link>
                    for information about more custom packages.
                </div>
            </div>
        </div>
    );
}

PricingTab.propTypes = {
    pricingItems: PropTypes.instanceOf(Object).isRequired,
};

export default PricingTab;
