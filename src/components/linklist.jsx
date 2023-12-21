
import React from "react";
import { product } from "../data/product";
import Listitem from "./listitemlink";


const LinkedList = ()=>{

    // console.log(props);
    return (
        <ul>
            {
              product.map((element,index)=>{
                    return (
                        <Listitem item = {element}/>
                    )
                })
            }
        </ul>
    )
}

export default LinkedList
