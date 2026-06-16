import qs from "qs";

export const getArticlesQuery = (category?: string | null) =>
  qs.stringify(
    {
      populate: ["cover", "category"],
      ...(category && {
        filters: {
          category: {
            slug: { $eq: category },
          },
        },
      }),
    },
    { arrayFormat: "repeat" },
  );

export const getCollectionQuery = () =>
  qs.stringify(
    {
      populate: {
        Blocks: {
          on: {
            "block.banner-story": {
              populate: {
                Heading: true,
              },
            },
            "block.about-section": {
              populate: "*",
            },
            "block.contact-form": {
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
    { arrayFormat: "repeat" },
  );
