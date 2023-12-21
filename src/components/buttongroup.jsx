import React from 'react'
import CartButton from './buttons/cartButton'
import PreviewButton from './buttons/previewButton'

function Buttongroup(drops) {
  // console.log(drops,'drops');
    
  return (
    <div style={{display : 'flex',justifyContent : 'center',gap : "10px"}}>
      <CartButton tittle = {drops.name} brand = {drops.name}/>
      <PreviewButton/>
    </div>
  )
}

export default Buttongroup;
