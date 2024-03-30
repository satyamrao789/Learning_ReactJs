import React from 'react'
import MobileList from './MobileList';

const item = {
    image: "https://rukminim2.flixcart.com/image/312/312/l3rmzrk0/mobile/v/f/y/-original-imagetmeguhrdsqs.jpeg?q=70",
    productTitle: "Realme GT Master Edition",
    price: 90
}

export default function Mobile() {
    return (
        <div>
            <h1>Checkout the list of Mobiles available</h1>
            <MobileList image={item.image} productTitle={item.productTitle} price={item.price} />
        </div>
    )
}
