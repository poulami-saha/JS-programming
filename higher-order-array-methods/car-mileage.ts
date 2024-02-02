const cars = [
    { make: "Toyota", model: "Camry", year: 2020, mileage: 30800 },
    { make: "Honda", model: "Civic", year: 2019, mileage: 32000 },
    { make: "Chevrolet", model: "Impala", year: 2021, mileage: 17500 },
    { make: "Audi", model: "r8", year: 2020, mileage: 13000 },
    { make: "Tesla", model: "model 3", year: 2018, mileage: 50000 },
]


const analyzeCarMileage = (cars: any[]) => {
    const totalMileage:number = cars.reduce((acc, car) => acc + car.mileage, 0);
    const averageMileage:number = totalMileage / cars.length;
    const highestMileageCar = cars.reduce((highest, car) => (car.mileage > highest.mileage ? car : highest)
    , cars[0])
    const lowestMileageCar = cars.reduce((lowest, car) => (car.mileage < lowest.mileage ? car : lowest)
    , cars[0])

    return {
        averageMileage:parseFloat(averageMileage.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMileage
    }
}

console.log(analyzeCarMileage(cars))