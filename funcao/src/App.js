import React, { useState } from "react";
import './App.css';

function App() {
  const [n, Num] = useState(0);

  return (
    <div className="App">

      <h1>Contador</h1>
      <p>Você clicou {n} vezes!</p>
      <button className='b1' onClick={() => Num(n - 1)}>Decremento</button>
      <button className='b2' onClick={() => Num(n + 1)}>Incremento</button>

    </div>
  );
}

export default App

