/*import React from 'react'
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
}*/

import React from 'react'
import MobileList from './MobileList';
import mobileItems from './mobileItems.json';


export default function Mobile() {
    return (
        <div>
            <h1>Checkout the list of Mobiles available</h1>
            {
                mobileItems.map((value) => {
                    return <MobileList image={value.picture} productTitle={value.title} price={value.amount} />
                })
            }
            {/* <MobileList image={item.picture} productTitle={item.title} price={item.amount} /> */}
            {/* <MobileList image={item2.picture} productTitle={item2.title} price={item2.amount} /> */}

        </div>
    )
}
