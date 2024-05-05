import {FeatureSchemaDefinition} from '../../schemas/types'

export const homePage: FeatureSchemaDefinition = {
  variants: {
    card: [
      {
        title: 'Default',
        value: 'default',
      },
      {
        title: 'Banner Carousel Item',
        value: 'bannerCarouselItem',
      },
      {
        title: 'Brand Carousel Item',
        value: 'brandCarouselItem',
      },
      {
        title: 'Project Card',
        value: 'projectCard',
      },
      {
        title: 'Intro Card',
        value: 'introCard',
      },
      {
        title: 'Image Card',
        value: 'imageCard',
      },
      {
        title: 'List Card',
        value: 'listCard',
      },
      {
        title: 'Grey Background Item',
        value: 'greyBackgroundItem',
      },
    ],
    group: [
      {
        title: 'Default',
        value: 'default',
      },
      {
        title: 'Banner Image Carousel',
        value: 'bannerImageCarousel',
      },
      {
        title: 'Brand Image Carousel',
        value: 'brandImageCarousel',
      },
      {
        title: 'Project Group',
        value: 'projectGroup',
      },
      {
        title: 'Intro Group',
        value: 'IntroGroup',
      },
      {
        title: 'Group with Image',
        value: 'groupWithImage',
      },
      {
        title: 'Group with tags',
        value: 'tagsGroup',
      },
      {
        title: 'Group with List',
        value: 'listGroup',
      },
      {
        title: 'Grey Background Group',
        value: 'greyBackgroundGroup',
      },
    ],
    divider: [
      {
        title: 'Default',
        value: 'default',
      },
    ],
  },
}
