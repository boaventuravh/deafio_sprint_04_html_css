/*

 1 - XL Cabine Simples 2.2 4x4 MT 2022 - R$ 183.850,00
 2 - XLS 2.2 Diesel 4X4 AT 2022 - R$ 220.690,00
 3 - Storm 3.2 Diesel 4X4 AT 2022 - R$ 222.790,00

 */

let carArr = [];

carArr.push(new Car("../img/XL Cabine.jpg", "XL Cabine Simples 2.2 4x4 MT 2022",
     511, 1821, 232, 1234, 2.2, 160, 1420, "Aço Estampado 16", 183850.00));

carArr.push(new Car("../img/xls 2.2 diesel.jpg", "XLS 2.2 Diesel 4X4 AT 2022",
     511, 1821, 232, 1076, 2.2, 160, 1180, "Aço Estampado 16", 220690.00));

carArr.push(new Car("../img/storm.jpg", "Storm 3.2 Diesel 4X4 AT 2022", 
    511, 1821, 232, 1040, 3.2, 200, 1180, "Liga Leve 17", 222790.00));

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
   
    if(carClass instanceof Car){       
        if(checkbox.checked){
                
            
        } else {
          
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
    
}
