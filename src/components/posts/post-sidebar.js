import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

function PostSidebar({ categories, tags }) {
    return (
        <div className="post-sidebar border border-[#eee] p-[50px_29px_66px]">
            <div className="post-searchbar">
                <h2 className="mb-[20px] border-b border-[#eee] pb-[11px] text-[20px] font-bold text-[#222]">
                    Search
                </h2>
                <form className="relative flex">
                    <input
                        className="w-full border border-[#ddd] border-opacity-40 py-[15px] pl-[20px] pr-[50px] text-[14px] focus-visible:outline-0"
                        placeholder="Search..."
                        type="text"
                        id="search"
                    />
                    <button
                        className="absolute top-1/2 right-[30px] translate-y-[-50%] text-[#595959]"
                        type="submit"
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div className="post-sidebar-item mt-[50px]">
                <h2 className="mb-[20px] border-b border-[#eee] pb-[11px] text-[20px] font-bold text-[#222]">
                    Recent Posts
                </h2>
                <ul className="post-list">
                    <li className="mb-[15px]">
                        <Link href="/posts/magazine">
                            <a className="hover:underline">
                                Layout & White-Spacing In Design For Magazine
                            </a>
                        </Link>
                    </li>
                    <li className="mb-[15px]">
                        <Link href="/posts/sketch-pillow">
                            <a className="hover:underline">
                                Look At The Sketch Pillow Unique By Scarlet
                                Johanson
                            </a>
                        </Link>
                    </li>
                    <li className="mb-[15px]">
                        <Link href="/posts/quisque">
                            <a className="hover:underline">
                                Visual Strategy Marketing
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/simple-design">
                            <a className="hover:underline">
                                Summer Colorful Festival 2022
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="post-sidebar-item post-sidebar-item mt-[50px]">
                <h2 className="mb-[20px] border-b border-[#eee] pb-[11px] text-[20px] font-bold text-[#222]">
                    Categories
                </h2>
                <ul className="post-list">
                    {categories.map((category) => (
                        <li className="mb-[15px] last:mb-0" key={category}>
                            <Link href={`/category/${category}`}>
                                <a className="capitalize hover:underline">
                                    {category}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="post-sidebar-item post-sidebar-item mt-[50px]">
                <h2 className="mb-[20px] border-b border-[#eee] pb-[11px] text-[20px] font-bold text-[#222]">
                    Popular tags
                </h2>
                <ul className="post-tags flex flex-wrap">
                    {tags.map((popularTag) => (
                        <li className=" mr-[10px] mb-[5px]" key={popularTag}>
                            <Link href={`/tag/${popularTag}`}>
                                <a className="hover:underline">{popularTag},</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

PostSidebar.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default PostSidebar;
