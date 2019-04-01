const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com'
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput)
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches; // returns top 3 results
};
// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;