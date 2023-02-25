import Link from 'next/link';
import PropTypes from 'prop-types';
import { AiOutlineRight } from 'react-icons/ai';

function ContactForm({ contactItems }) {
    return (
        <div className="contact-area border-b border-[#595959] border-opacity-30 pt-[45px] pb-[60px] md:pt-[145px] md:pb-160">
            <div className="container">
                <div className="lg:grid lg:grid-cols-5">
                    <div className="contact-info lg:col-span-2 lg:pr-[15px]">
                        <h2 className="left-[58px] pb-[35px] text-[48px] md:pb-[55px]">
                            {contactItems[0]?.title}
                        </h2>
                        <h3
                            className="text-3xl font-semibold leading-9"
                            dangerouslySetInnerHTML={{
                                __html: contactItems[0]?.subTitle,
                            }}
                        />
                        <ul className="pt-6 text-[14px] leading-[27px] text-secondary">
                            <li className="max-w-[270px] pb-[15px]">
                                {contactItems[0]?.address}
                            </li>
                            <li className="pb-[15px]">
                                <Link href={`${contactItems[0]?.contactNumberPath}`} legacyBehavior>
                                    {contactItems[0]?.contactNumber}
                                </Link>
                            </li>
                            <li>
                                <Link href={`${contactItems[0]?.contactEmailPath}`} legacyBehavior>
                                    {contactItems[0]?.contactEmail}
                                </Link>
                            </li>
                        </ul>
                        <div className="button-wrap pt-[95px]">
                            <Link
                                href="/contact"
                                className="inline-flex items-center border border-[#969696] p-[11px_32px] text-[14px] uppercase leading-[30px] transition duration-[0.4s] hover:border-black hover:bg-black hover:text-white"
                                legacyBehavior>
                                {contactItems[0]?.infoButtonText}
                                <div className="ml-[5px]">
                                    <AiOutlineRight />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="contact-form max-md:pt-[50px] lg:col-span-3">
                        <h2 className="mb-[35px] text-[18px] uppercase leading-[22px] md:mb-[75px]">
                            {contactItems[0]?.formTitle}
                        </h2>
                        <form>
                            <div>
                                <div className="lm:flex">
                                    <input
                                        className="w-full border-b border-[#595959] border-opacity-30 py-[15px] focus-visible:border-black focus-visible:outline-0 focus-visible:placeholder:text-black lm:mr-[20px]"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        required
                                    />
                                    <input
                                        className="w-full border-b border-[#595959] border-opacity-30 py-[15px] focus-visible:border-black focus-visible:outline-0 focus-visible:placeholder:text-black"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <textarea
                                    className="mt-[35px] w-full border-b border-[#595959] border-opacity-30 py-[15px] focus-visible:border-black focus-visible:outline-0 focus-visible:placeholder:text-black"
                                    placeholder="Here goes your message"
                                    id="message"
                                    rows="6"
                                    required
                                />
                            </div>

                            <div className="mt-[55px]">
                                <button
                                    type="submit"
                                    className="boxed-btn text-[14px] leading-[30px]"
                                >
                                    {contactItems[0]?.formButton}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactForm.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactForm;
