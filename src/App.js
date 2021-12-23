import logo from './logo.svg';
import './App.css';
import html2canvas from 'html2canvas';
import { useState } from 'react';

function App() {


  const [linea1, setlinea1] = useState('Hola mundo')
  const [linea2, setlinea2] = useState('Hola mundo2')
  const [imagen, setImagen] = useState('')

  const onChangeLinea1 = (evento) => {
    setlinea1(evento.target.value)
  }

  const onChangeLinea2 = (evento) => {
    setlinea2(evento.target.value)
  }

  const onChangeImagen = (evento) => {
    setImagen(evento.target.value)
  }

  const onClickExport = (evento) => {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL('image/png');
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });

  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}> 
        <option value="fire">Casa en llamadas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value = "smart">Smart Guy</option>
      </select> <br />
      <input onChange = {onChangeLinea1} type="text" placeholder='Linea 1'/> <br />
      <input onChange = {onChangeLinea2} type="text" placeholder='Linea 2'/> <br />
      <button onClick={onClickExport}>Exportar</button>

      <section className='meme' id = 'meme'>
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={`/img/${imagen}.jpg`}/>
      </section>

    </div>
  );
}

export default App;
