import React, { useState, useEffect } from 'react';
import './App.css'; // Certifique-se de importar seus estilos
//import clockBackground from '../images/clock_300x300.jpg'; // Substitua pelo caminho correto para a sua imagem
import AnalogClock from 'analog-clock-react';
import Clock from './clock';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Relógio App</h1>
        <Clock />
      </header>
    </div>
  );
}



export default App;