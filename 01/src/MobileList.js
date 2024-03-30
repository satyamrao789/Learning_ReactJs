import React from 'react'
import './MobileList.css'

export default function MobileList() {

    const image = 'https://rukminim2.flixcart.com/image/312/312/l3rmzrk0/mobile/v/f/y/-original-imagetmeguhrdsqs.jpeg?q=70';
    const productTitle = 'Realme GT Master Edition';
    const price = 90;

    return (
        <div className='mainTag'>
            <img className='productImage' src={image} />
            <h2>{productTitle}</h2>
            <p>$ {price}</p>
            <button>Add to Cart</button>

        </div>
    )
}
