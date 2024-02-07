const groupByCategory = (products: any[]) => {
    const map = new Map();
    products.forEach(product => {
        if (map.has(product.category)) {
            map.set(product.category, [...map.get(product.category), product])
        } else {
            map.set(product.category, [product])
        }
    })
    return map;
}
const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
];

console.log(groupByCategory(products))