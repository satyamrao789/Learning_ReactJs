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

const items = [{
    picture: "https://rukminim2.flixcart.com/image/312/312/l3rmzrk0/mobile/v/f/y/-original-imagetmeguhrdsqs.jpeg?q=70",
    title: "Realme GT Master Edition",
    amount: 90
},
{
    picture: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70",
    title: "Apple iPhone 15 Plus 128GB",
    amount: 100
}]


export default function Mobile() {
    return (
        <div>
            <h1>Checkout the list of Mobiles available</h1>
            <MobileList image={item.picture} productTitle={item.title} price={item.amount} />
            <MobileList image={item2.picture} productTitle={item2.title} price={item2.amount} />

        </div>
    )
}
