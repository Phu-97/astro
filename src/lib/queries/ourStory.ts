import qs from "qs";

export const ourStoryQuery = qs.stringify(
  {
    populate: {
      Blocks: {
        on: {
          "block.banner-story": {
            populate: {
              Heading: true,
              Image: {
                populate: "*",
              },
            },
          },
          "block.about-section": {
            populate: "*",
          },
          "block.slogent": {
            populate: "*",
          },
          "block.structural": {
            populate: "*",
          },
          "block.cta-showroom": {
            populate: "*",
          },
          "shared.seo": {
            populate: {
              shareImage: {
                fields: ["url", "alternativeText", "width", "height"],
              },
            },
          },
        },
      },
    },
  },
  {
    arrayFormat: "repeat",
  },
);
