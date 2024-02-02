const calculateTotalSalesWithTax = (products:any, taxRate:number) => {
    const totalSales = products.reduce((sum:number, product:any) => sum + product.price * product.quantity, 0)
    return parseFloat(totalSales + ((taxRate * totalSales) / 100)).toFixed(2);
}

module.exports = calculateTotalSalesWithTax;

const products = [
    { name: "Apple", price: 0.5, quantity: 10 },
    { name: "Banana", price: 0.3, quantity: 20 },
    { name: "Orange", price: 0.6, quantity: 15 },
];

const result = calculateTotalSalesWithTax(products, 8)
console.log(result)