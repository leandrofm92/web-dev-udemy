import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/* --- criar carros --- */
let carroA = new Carro('Jeep', 4)
let carroB = new Carro('Veloster', 3)
let carroC = new Carro('IX35', 4)

/* --- montar a lista de carros da concessionaria --- */
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* --- exibir a lista de carros --- */
//console.log(concessionaria.mostrarListaDeCarros())

/* --- comprar o carro --- */
let cliente = new Pessoa('Lei', 'IX35')

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {

    if(carro['modelo'] == cliente.dizerCarroPreferido()) {

        //compra o carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())