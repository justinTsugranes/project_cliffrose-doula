import { getAllItems } from './';
import { flatDeep } from '../utils';

export const getPopularTags = () => {
  const posts = getAllItems('posts');

  const popularTags = flatDeep(posts.map((post) => post.popularTag));

  return [...new Set(popularTags)];
};
