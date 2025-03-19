import * as contentful from 'contentful';

export type ContentModel = contentful.Entry<
  contentful.EntrySkeletonType,
  undefined,
  string
>;

// export interface HeroContent extends ContentModel{

// }
export interface ContentModelType {
  hero: ContentModel;
}
