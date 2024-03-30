import React from 'react'
import './MobileList.css'

export default function MobileList(props) {

    const { image, productTitle, price } = props;

    return (
        <div className='mainTag'>
            <img className='productImage' src={image} />
            <h2>{productTitle}</h2>
            <p>$ {price}</p>
            <button>Add to Cart</button>

        </div>
    )
}
