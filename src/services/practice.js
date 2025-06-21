import { faker } from "@faker-js/faker";

const products = Array.from({ length: 20 }, () => {
    return {
        productName: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price()
    };
});

console.log(products)
console.log(faker.animal.bear());