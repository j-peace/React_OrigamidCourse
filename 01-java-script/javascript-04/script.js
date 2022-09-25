const precos = [
    'credito',
    'RS 20',
    'RS 40',
    'meus dados'
];

//Metodo 1
const precosFiltro = precos.filter(function(preco){
    return preco.includes('RS')
    console.log()
})

console.log(precosFiltro)

//Metodo 2
const precosFiltro2 = precos.filter((p) => p.includes('RS'));

console.log(precosFiltro2);

// Metodo map
const precosFiltro3 = precos.filter((p) => p.includes('RS'));
const precosNumeros = precosFiltro.map((p) => Number(p.replace('RS ', '')));

console.log(precosNumeros);