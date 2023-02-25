import PropTypes from 'prop-types';
import PostItem from './post-item';

function PostsGrid({ posts }) {
  <div className="lg:col-span-8">
    <div className="grid gap-x-[25px] gap-y-[55px] lm:grid-cols-2">
      {posts.map((posts) => (
        <PostItem key={posts.slug} posts={posts} />
      ))}
    </div>
  </div>;
}

PostsGrid.propTypes = {
  posts: PropTypes.instanceOf(Object).isRequired
};

export default PostsGrid;
