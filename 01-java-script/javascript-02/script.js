//Metodo 1: modificando objeto
const carro = {
    cor: 'Azul',
    portas: 4,
}

carro.ano = 2020;

console.log(carro)

//Metodo 2: sem modificar objeto
const carro2 = {
    cor: 'Azul',
    portas: 4,
}

const carroAno = { ...carro2, ano: 2003};


console.log(carroAno)