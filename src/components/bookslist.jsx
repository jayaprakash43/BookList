import React from "react";
import { book } from "../data/books";
// import PreviewButton from "./buttons/previewButton";
// import CartButton from "./buttons/cartButton";
import Buttongroup from "./buttongroup";


const BookList = ()=>{
    return (
        <div style={{display : 'flex' ,flexWrap : 'nowrap',justifyContent: 'space-around'}}>
         {
             book.map((item)=>{
                return (
                    <div>
                        <img src={item.image} alt="BookS" style={{width : '500px', height : '350px'}}/>
                        <h3 style={{textAlign : 'center'}}>{item.tittle}</h3>
                        <p style={{textAlign : 'center'}}>{item.author} </p>
                        <div>
                          <Buttongroup name ={item.tittle} />
                        </div>
                    </div>
                )
             })
         }
        </div>
    )
}

export default BookList;