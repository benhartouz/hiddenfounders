/*
 * The shops reducer will always return an array of shops no matter what
 * You need to return something, so if there are no shops then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            name: "Shop name 1",
            description: "this is a description of product 1",
            thumbnail: "https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/items-512.png"
        },
        {
            id: 2,
            name: "Shop name 2",
            description: "this is a description of product 2",
            thumbnail: "https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/items-512.png"
        },
        {
            id: 3,
            name: "Shop name 3",
            description: "this is a description of product 3",
            thumbnail: "https://cdn3.iconfinder.com/data/icons/e-commerce-trading/512/items-512.png"
        }
    ]
}
