"use strict"

    // 1. Generar el codigo Html que voy a poenr en la pagina
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código
function generateCardCars(carsArray) {
    let html = '';
    for(let i = 0; i < carsArray.length; i++) {
        html += `<div class="col-4">
                        <div class="card">
                            <div class="card-body">
                            <p>Brand: ${carsArray[i].brand}</p>
                            <p>Year: ${carsArray[i].year}</p>
                            </div>
                        </div>
                    </div>`;
    }
    const container = document.getElementById('cars-container');
    container.innerHTML = html;
}
function generateCardCars2(carsArray) {
    let html = '';
    for(let i = 0; i < carsArray.length; i++) {
        html += `<div class="col-4">
                        <div class="card">
                            <div class="card-body">
                            <p>Brand: ${carsArray[i].brand}</p>
                            <p>Código: ${carsArray[i].code}</p>
                            </div>
                        </div>
                    </div>`;
    }
    const container = document.getElementById('cars-container2');
    container.innerHTML = html;
}

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

let cardsByYear = filterByYear(cars);
console.log(cardsByYear);
generateCardCars(cardsByYear);

let cardsByCodeMx = filtradosCodeMx(cars);
console.log(cardsByCodeMx);
generateCardCars2(cardsByCodeMx);







