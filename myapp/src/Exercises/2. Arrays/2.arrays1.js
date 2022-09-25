import React from 'react';

const App = () => {

  const livros = [
    { nome: 'A game of trone', ano: 1996 },
    { nome: 'The hundred', ano: 1998 },
    { nome: 'Arena of valor', ano: 1999 },
  ]

  return (
    <ul>
      {livros
        .filter(({ano}) => ano >= 1998)
        .map(({nome, ano}) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
      ))}
    </ul>
  )
}

export default App;
