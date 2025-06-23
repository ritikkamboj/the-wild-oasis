import React from 'react'
// import { faker } from "@faker-js/faker";

// const products = Array.from({ length: 20 }, () => {
//     return {
//         productName: faker.commerce.productName(),
//         description: faker.commerce.productDescription(),
//         price: faker.commerce.price()
//     };
// });

// console.log(products)
// console.log(faker.animal.bear());


// we are seeing here HOC 

function User(props) {
    return <h1> My name is {props.name} and age is {props.age}</h1>
}

function withMoreData(component) {
    return function (props) {
        const name = 'ritik'
        return <component {...props} name={name} />
    }
}


const enhanceComponent = withMoreData(User);


function practice() {
    return (
        <div>

            <enhanceComponent age="25" />
        </div>
    )
}

export default practice