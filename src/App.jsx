import { useEffect, useState } from "react"
import Header from "./components/Header"  
import Button from "./components/Button";
import { formatearDinero, calcularTotalPagar } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000); 
  const [plazo, setPlazo] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(()=>{
    //Calcular total a pagar
    setTotal(calcularTotalPagar(cantidad, plazo));
  },[cantidad, plazo])


  useEffect(()=>{
    //Calcular pago mensual
    setPago(total/plazo)
  },[total])

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
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select 
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-xl text-center text-xl font-bold text-gray-500"
        value={plazo}
        onChange={e => setPlazo(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Resumen <span className="text-indigo-600">de pagos</span>
      </h2>

      <p className="text-xl text-gray-500 text-center font-bold">{plazo} Meses</p>
      <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
      <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pago)} Mensuales</p>
      </div>
    </div>
  )
}

export default App
