import React from 'react';
import Recommandation from '../Recommendation/Recommendation';
import Style from "./RecommandationHOC.css";
const RecommandationHOC = (props) =>{

    const isEmpty = books =>
    books === null ||
    books === undefined ||
    (books.hasOwnProperty("length") && books.length === 0) ||
    (books.constructor === Object && Object.keys(books).length === 0);

    let obj = [];
    for (var property in props) {
        obj.push({
            genre:property,
            books:props[property]
        })
    }

    let rec = null;
    if(isEmpty(obj)){
       rec=<div className={Style.loader}>Loading...</div>;
    }else{
        rec = obj.map((e,i)=>{
            return isEmpty(e.books)?null:<Recommandation key={i} books={e.books} genre ={e.genre} />
        })
    }

    return (
        <React.Fragment>
            {rec}
        </React.Fragment>
    );
}

export default RecommandationHOC;