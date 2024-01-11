import React, {useState} from "react";
import Tours from "./Components/Tours";
import data from './data'
export default function App(){
  const [tours,setTours] = useState(data)
  function removeTour(id){
    const newTours = tours.filter( tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){

    return(
      <div className="Refresh h-[100vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold ">No Tours Left</h2>
        <button className="bg-slate-300 py-1 px-7 rounded-lg my-3 border-slate-800 border-2 hover:bg-slate-100" onClick= {() => setTours(data)}>
          Refresh
          </button>
      </div>
    )

  }
  return(
    <div className="flex flex-col justify-center items-center"> 
      <h2 className="text-6xl font-bold border-dashed border-blue-800 border-8 px-12 py-3 rounded-3xl my-12"> Plan with Vaibs</h2>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}
