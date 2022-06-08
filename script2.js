let cars = [
    { brand: 'Audi', model: 'A1', code: 'A1-MX', year: '2015'},
    { brand: 'Mazda', model: 'CX', code: 'CX-USA', year: '2016'},
    { brand: 'Nissan', model: 'Tsuru', code: 'Tsuru-ES', year: '2005'},
    { brand: 'Jeep', model: 'Compass', code: 'Compass-MX', year: '2020'}
]


/*function filterByCodeMx(cars) {
    let filteredCodeMx = [];
    for(let i = 0; i < cars.length; i++) {
       if(cars[i].code);) {
           filteredCodeMx.push(cars[i]);
       }
    }
    return filteredCodeMx;
}*/
function filtradosCodeMx(cars){
let filteredCodeMx = [];
var index = [];
    for(let i = 0; i < cars.length; i++) {
        index.push(cars[i].code.indexOf("-"));
            }
            //console.log(cars);
            //console.log(index);
    for(let j = 0; j < index.length; j++) {
      if(cars[j].code.slice(index[j]+1,cars[j].length)=="MX"){
           // console.log("Sí hay");
            //console.log(cars[j].code.slice(index[j]+1,cars[j].length));
            filteredCodeMx.push(cars[j]);
        }else{
        //console.log("No hay")}
        /*console.log(cars[0].code.slice(index[j]+1,cars[0].length));*/
    }
}
return filteredCodeMx;
}
console.log(filtradosCodeMx(cars));