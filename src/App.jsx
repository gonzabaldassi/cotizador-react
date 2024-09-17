import { useState } from "react"
import Header from "./components/Header"  
import Button from "./components/Button";

function App() {
  const [cantidad, setCantidad] = useState(10000);

  const min = 0;
  const max = 20000;
  const step = 500;

  function handleChange(e){
    setCantidad(+e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - step;

    if (valor<min) {
      alert("Cantidad no valida");
      return;
    }

    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + step;

    if (valor>max) {
      alert("Cantidad no valida");
      return;
    }

    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header/>

      <div className="flex justify-between my-7">
        <Button
          operador="-"
          funcion={handleClickDecremento}
        />
        <Button
          operador="+"
          funcion={handleClickIncremento}
        />
      </div>

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={min}
        max={max}
        setp={step}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">{cantidad}</p>
    </div>
  )
}

export default App
