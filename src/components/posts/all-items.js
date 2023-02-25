import PropTypes from 'prop-types';
import PostSidebar from './post-sidebar';
import PostsGrid from './posts-grid';

function AllItems({ posts, categories, tags }) {
  <div className="post-area border-b border-[#dbdbdb] pt-[60px] pb-[55px] md:pt-[160px] md:pb-[155px]">
    <div className="container">
      <div className="gap-x-[30px] lg:grid lg:grid-cols-12 xl:gap-x-[50px]">
        <PostsGrid posts={posts} />
        <div className="max-md:pt-[50px] lg:col-span-4">
          <PostSidebar categories={categories} tags={tags} />
        </div>
      </div>
    </div>
  </div>;
}

AllItems.propTypes = {
  posts: PropTypes.instanceOf(Object).isRequired,
  categories: PropTypes.instanceOf(Object).isRequired,
  tags: PropTypes.instanceOf(Object).isRequired
};

export default AllItems;
