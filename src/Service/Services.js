export const searchService = query => {
  return fetch(
    `http://bookhub-api.herokuapp.com/api/version1/book/search?search=${query}`,
    {
      method: "POST",
      mode: "cors"
    }
  );
};
