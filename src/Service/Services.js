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
    return new Promise((resolve, reject)=>{
        fetch(`http://bookhub-api.herokuapp.com/api/version1/book/search?search=${query}`,
        {
          method: "POST",
          mode: "cors"
        }).then(response=>{
            if(response.ok){
                resolve()
            } else{
                reject(response.error())
            }
        })
        .catch(err=>reject(err))
    });
  };

  export const loginService = (email, password) => {
    return new Promise((resolve, reject)=>{
        fetch(`https://bookhub-api.herokuapp.com/api/version1/sessions?email=${email}&password=${password}`,
        {
          method: "POST",
          mode: "cors"
        }).then(response=>{
            //console.log(resp);
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
    return new Promise((resolve, reject)=>{
        fetch(`https://bookhub-api.herokuapp.com/api/version1/users?firstName=${firstName}&lastName=${lastName}&address&email=${emailId}&password=${password}`,
        {
          method: "POST",
          mode: "cors"
        }).then(response=>{
            //console.log(resp);
            if(response.ok){
                console.log(response.ok)
                resolve(response)
            } else{
                reject(response.error())
            }
        })
        .catch(err=>reject(err))
    });
  };