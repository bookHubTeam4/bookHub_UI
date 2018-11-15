export const searchService = query => {
  return new Promise((resolve, reject) => {
    fetch(
      `http://bookhub-api.herokuapp.com/api/version1/book/search?search=${query}`,
      {
        method: "POST",
        mode: "cors"
      }
    )
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(err => reject(err));
  });
};

export const loginService = (email, password) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://bookhub-api.herokuapp.com/api/version1/sessions?email=${email}&password=${password}`,
      {
        method: "POST",
        mode: "cors"
      }
    )
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(response.error());
        }
      })
      .catch(err => reject(err));
  });
};

export const BookInfoService = isbn => {
  return new Promise((resolve, reject) => {
    console.log("calling with " + isbn);
    fetch(`https://bookhub-api.herokuapp.com/api/version1/books/${isbn}`, {
      method: "GET",
      mode: "cors"
    })
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(response.error);
        }
      })
      .catch(err => reject(err));
  });
};

 export const SignInService = (firstName, lastName, emailId, provider) => {
    return new Promise((resolve, reject)=>{
        fetch(`http://bookhub-api.herokuapp.com/api/version1/auth/request?firstName=${firstName}&lastName=${lastName}&emailId=${emailId}&password=&provider=${provider}`,
        {
          method: "POST",
          mode: "cors"
        }).then(response=>{
            if(response.ok){
                resolve(response)
            } else{
                reject(response.error())
            }
        })
        .catch(err=>reject(err))
    });
  };


export const signUpService = (firstName, lastName, emailId, password) => {
  return new Promise((resolve, reject) => {
    console.log(`https://bookhub-api.herokuapp.com/api/version1/users?firstName=${firstName}&lastName=${lastName}&address&email=${emailId}&password=${password}`);
    fetch(
      `https://bookhub-api.herokuapp.com/api/version1/users?firstName=${firstName}&lastName=${lastName}&address&email=${emailId}&password=${password}`,
      {
        method: "POST",
        mode: "cors"
      }
    )
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(response.error());
        }
      })
      .catch(err => reject(err));
  });
};

export const favouriteGenre = (token, list) => {
  return new Promise((resolve, reject) => {
    console.log(list);
    fetch(
       `http://bookhub-api.herokuapp.com/api/version1/genre/add_user_genres?auth_token=${token}&genres=${JSON.stringify(list)  }`,
      {
        method: "POST",
        mode: "cors"
      }
    )
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(response.error());
        }
      })
      .catch(err => reject(err));
  });
};

export const getRecommendation = tokken => {
  return new Promise((resolve, reject) => {
    fetch(`https://bookhub-api.herokuapp.com/api/version1/book/recomendation/?authentication_token=${tokken}`, {
      method: "POST",
      mode: "cors"
    })
      .then(response => {
        if (response.ok) {
          resolve(response);
        } else {
          reject(response.error());
        }
      })
      .catch(err => reject(err));
  });
};

