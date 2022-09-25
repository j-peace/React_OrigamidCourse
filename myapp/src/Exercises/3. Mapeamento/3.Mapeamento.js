import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smatphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766']
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd345', '#d4394d', '#f37c59']
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786']
  }
]

const App = () => {

  const dados = produtos.filter(
    ({preco}) => Number(preco.replace('R$ ', '')) >= 2000,
    );
  
  return (
    <ul>
      {dados.map(({id, nome, preco, cores}) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: 'white'}}key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </ul>
  )
}

export default App;
