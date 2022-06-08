let cars = [
    { brand: 'Audi', model: 'A1', code: 'A1-MX', year: '2015'},
    { brand: 'Mazda', model: 'CX', code: 'CX-USA', year: '2016'},
    { brand: 'Nissan', model: 'Tsuru', code: 'Tsuru-ES', year: '2005'},
    { brand: 'Jeep', model: 'Compass', code: 'Compass-MX', year: '2020'}
]

function filterByYear(cars) {
    let filteredCars = [];
    for(let i = 0; i < cars.length; i++) {
       if(cars[i].year >= 2014 && cars[i].year <= 2018) {
           filteredCars.push(cars[i]);
       }
    }
    return filteredCars;
}
console.log( filterByYear(cars));