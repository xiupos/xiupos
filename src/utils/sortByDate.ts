export const sortByDate = (
  a: { pubDate: Date },
  b: { pubDate: Date },
): number => b.pubDate.valueOf() - a.pubDate.valueOf();
