import shortid from "shortid"
const productsList = [
    {
        id: shortid.generate(),
        name: 'Mouse',
        stock: 15,
        price: 1500,
    },
    {
        id: shortid.generate(),
        name: "keyboard",
        stock: 10,
        price: 2000,
    },
    {
        id: shortid.generate(),
        name: 'Headphone',
        stock: 18,
        price: 3000,
    },
    {
        id: shortid.generate(), 
        name: 'SSD Card 1 Terabits',
        stock: 6,
        price: 6000,
    },
    {
        id: shortid.generate(),
        name: 'Monitor',
        stock: 5,
        price: 8999
    }
]

export default productsList;