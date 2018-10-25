// export const searchService = query => {
//   return fetch(
//     `http://bookhub-api.herokuapp.com/api/version1/book/search?search=${query}`,
//     {
//       method: "POST",
//       mode: "cors"
//     }
//   );
// };


export const searchService = query => {
    return new Promise((resolve, reject) => {
        fetch(`http://bookhub-api.herokuapp.com/api/version1/book/search?search=${query}`,
            {
                method: "POST",
                mode: "cors"
            }).then(response => {
                if (response.ok) {
                    resolve()
                } else {
                    reject(response.error())
                }
            })
            .catch(err => reject(err))
    });
};


export const BookInfoService = isbn => {
    return new Promise((resolve, reject) => {

        console.log("calling with " + isbn);
        fetch(`https://bookhub-api.herokuapp.com/api/version1/books/${isbn}`,
            {
                method: "GET",
                mode: "cors"
            }).then(response => {
                if (response.ok) {
                    resolve(response)
                } else {
                    reject(response.error)
                }
            })
            .catch(err => reject(err))


    });
};

