import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from './sanity.client';

const builder = imageUrlBuilder(sanityClient);

// This function generates a URL for a given image source
export const urlFor = (source) => builder.image(source);
