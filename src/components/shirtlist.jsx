import React from "react"
import { tshirts } from "../data/tshitrs"
import Buttongroup from "./buttongroup"
// import PreviewButton from "./components/previewButton";
// import CartButton from "./components/cartButton";

const ShirtList = ()=>{
    return(
        <div style={{display : 'flex',justifyContent : 'space-around',marginTop : '45px'}}>
            {
                 tshirts.map((item)=>{
                    return(
                        <div>
                            <img src={item.image} alt="T-Shirt" style={{width : '300px',height : '300px'}} />
                            <h3 style={{textAlign : 'center'}}>{item.brand}</h3>
                            <p style={{textAlign : 'center'}}>$ {item.price}.00</p>

                            <div style={{display : 'flex',justifyContent : 'center',gap : '10px'}}>
                               <Buttongroup name ={item.brand} />
                            </div>
                        </div>
                    )
                 })
            }
        </div>
    )
}

export default ShirtList;