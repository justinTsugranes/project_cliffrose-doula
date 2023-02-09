function PageBannerTwo() {
    return (
        <div className="page-banner relative flex h-[950px] items-center justify-start bg-page-banner-2 bg-cover bg-fixed bg-center before:absolute before:h-full before:w-full before:bg-black before:opacity-30">
            <div className="custom-container container pt-[90px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <div className="year relative text-white">
                            <span>2022</span>
                        </div>
                    </div>
                    <div className="col-span-10">
                        <div className="banner-content relative">
                            <span className="mb-[310px] block max-w-[225px] text-[18px] uppercase leading-[29px] text-white">
                                Nordic interior studio
                            </span>
                            <h2 className="max-w-[680px] text-[100px] leading-[110px] text-white">
                                Copper Brass & Rustic
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBannerTwo;
