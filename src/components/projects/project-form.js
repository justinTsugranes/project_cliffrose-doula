function ProjectForm() {
    return (
        <div className="project-form-area pt-[45px] pb-[60px] md:pt-[145px] md:pb-160">
            <div className="container">
                <h2 className="mb-[45px] text-[42px] leading-[50px]">
                    Drop Us A Line
                </h2>
                <form className="project-form border border-[#595959] border-opacity-30 p-[20px] lm:p-[60px]">
                    <div className="md:flex">
                        <input
                            className="mr-[20px] w-full border-b border-[#595959] border-opacity-40 py-[15px] focus-visible:border-primary focus-visible:outline-0 focus-visible:placeholder:text-black"
                            placeholder="Full Name"
                            type="text"
                            id="name"
                            required
                        />
                        <input
                            className="mr-[20px] w-full border-b border-[#595959] border-opacity-40 py-[15px] focus-visible:border-primary focus-visible:outline-0 focus-visible:placeholder:text-black"
                            placeholder="Email Address"
                            type="email"
                            id="email"
                            required
                        />
                        <input
                            className="w-full border-b border-[#595959] border-opacity-40 py-[15px] focus-visible:border-primary focus-visible:outline-0 focus-visible:placeholder:text-black"
                            placeholder="Your Phone Number"
                            type="text"
                            id="phone"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            className="mt-[35px] w-full border-b border-[#595959] border-opacity-40 py-[15px] focus-visible:border-primary focus-visible:outline-0 focus-visible:placeholder:text-black"
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
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectForm;
