import { getAllItems } from './items-util';
import { flatDeep } from '../utils';

export const getPostCategories = () => {
  const posts = getAllItems('posts');

  const categories = flatDeep(posts.map((post) => post.category));

  return [...new Set(categories)];
};
