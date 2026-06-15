import qs from "qs";

export const homeQuery = qs.stringify(
  {
    populate: {
      Blocks: {
        on: {
          "block.hero-banner": {
            populate: "*",
          },
          "block.about-section": {
            populate: "*",
          },
          "block.featured-curations": {
            populate: {
              Heading: {
                populate: "*",
              },
              // Cards: {
              //   populate: "*",
              // },
              Cards: {
                populate: {
                  Image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "block.slogent": {
            populate: "*",
          },
          "block.gallery": {
            populate: "*",
          },
          "block.cta": {
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
