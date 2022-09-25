fetch('https://bling.com.br/Api/v2/pedido/140052/json/?apikey=31504fef3824785bc4c7baabbf332d8d146b533eb7a517632ec18573ae351d3964353a70')
    .then((response) => response.json())
    .then((json => {
        console.log(json)
    }));

async function fetchProdutos(ursl){
    const response = await fetch(url);
    console.log(response);
    return response
}

const produtos = fetchProdutos(
    'https://bling.com.br/Api/v2/pedido/140052/json/?apikey=31504fef3824785bc4c7baabbf332d8d146b533eb7a517632ec18573ae351d3964353a70',    
)