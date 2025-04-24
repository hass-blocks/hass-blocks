import type { ExcerptTokenWithoutLink } from '.';
import type { ExcerptTokenWithLink } from './excerpt-token-with-link';

export type ExcerptToken = ExcerptTokenWithLink | ExcerptTokenWithoutLink;
