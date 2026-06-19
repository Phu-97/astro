// src/lib/queries/article.ts

export const getArticleBySlug = (slug: string) => ({
  filters: {
    slug: {
      $eq: slug,
    },
  },

  // lấy toàn bộ relation/media/content
  populate: "*",
});
