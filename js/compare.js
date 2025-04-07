
class Car {   

    constructor(image, modelo, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, preco){
        this.image = image;
        this.modelo = modelo;        
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.preco = preco;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].modelo  === carClass.modelo)
            return i;
    }
    return -1;
}

function SetCarToCompare(checkbox, carClass) {
    
    if(carArr.length === 2 && checkbox.checked) {
        checkbox.checked = false;
        alert('Não é possível selecionar 3 carros!');
    }

    if(carClass instanceof Car){       
        if(checkbox.checked){
           carArr.push(carClass);
            
        } else {
            // função anômima para remover o carro do Array
            // base: Using indexOf(), slice(), and concat() Methods
            // https://www.geeksforgeeks.org/how-to-remove-a-specific-item-from-an-array-in-javascript/#approach-2-using-filter-method
            (() => {
                
                const index = GetCarArrPosition(carArr, carClass);
                
                if (index !== -1) {
                    carArr = carArr.slice(0, index).concat(carArr.slice(index+1));
                }                
            })();
            
        } 
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    
    for (let i = 0; i < carArr.length; i++) {

        const currentCar = carArr[i];
        const currentIndexStr = `${i}`;
        
        const img = document.getElementById('car_image_'.concat(currentIndexStr));
        img.src = currentCar.image;
        img.alt = currentCar.modelo;
        
        const modelo = document.getElementById('compare_modelo_'.concat(currentIndexStr));
        modelo.innerHTML = currentCar.modelo;

        const altCacamba = document.getElementById('compare_alturacacamba_'.concat(currentIndexStr));
        altCacamba.innerHTML = currentCar.alturaCacamba;

        const altVeiculo = document.getElementById('compare_alturaveiculo_'.concat(currentIndexStr));
        altVeiculo.innerHTML = currentCar.alturaVeiculo;

        const altSolo = document.getElementById('compare_alturasolo_'.concat(currentIndexStr));
        altSolo.innerHTML = currentCar.alturaSolo;

        const capCarga = document.getElementById('compare_capacidadecarga_'.concat(currentIndexStr));
        capCarga.innerHTML = currentCar.capacidadeCarga;

        const mtr = document.getElementById('compare_motor_'.concat(currentIndexStr));
        mtr.innerHTML = currentCar.motor;

        const pot = document.getElementById('compare_potencia_'.concat(currentIndexStr));
        pot.innerHTML = currentCar.potencia;

        const vol = document.getElementById('compare_volumecacamba_'.concat(currentIndexStr));
        vol.innerHTML = currentCar.volumeCacamba;

        const rd = document.getElementById('compare_roda_'.concat(currentIndexStr));
        rd.innerHTML = currentCar.roda;

        const prc = document.getElementById('compare_preco_'.concat(currentIndexStr));
        prc.innerHTML = currentCar.preco;


    }

    
}
let carArr = [];

const car0 = new Car('../img/XL Cabine.jpg', 'XL Cabine Simples 2.2 4x4 MT 2022',
    511, 1821, 232, 1234, 2.2, 160, 1420, 'Aço Estampado 16', 'R$ 183.850,00');

const car1 = new Car('../img/xls 2.2 diesel.jpg', 'XLS 2.2 Diesel 4X4 AT 2022',
    511, 1821, 232, 1076, 2.2, 160, 1180, 'Aço Estampado 16', 'R$ 220.690,00');

const car2 = new Car('../img/storm.jpg', 'Storm 3.2 Diesel 4X4 AT 2022', 
    511, 1821, 232, 1040, 3.2, 200, 1180, 'Liga Leve 17', 'R$ 222.790,00');


const availableCars = [car0, car1, car2];

const checkboxes = document.getElementsByClassName('checkbox');

for (let i = 0; i < checkboxes.length; i++) {
    const chckbx = checkboxes[i];
    const car = availableCars[i];
    chckbx.addEventListener('change', () => {SetCarToCompare(chckbx, car)});
    
}



