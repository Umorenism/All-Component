import { useState } from "react";
import  Model  from "../src/component/Model";
const ModelButton = ()=>{
  const [showModel,setShowModel]=useState(false)
return (
    <div className="w-full min-h-screen justify-center flex-col items-center bg-blue-700 flex ">
    <h1 className="mb-4 text-4xl text-white">Open Model</h1>
    
    <button className="bg-violet-500 py-2 px-10 w-[40%]" onClick={()=>setShowModel(true)}>open</button>
    {showModel &&  <Model  onClose={()=>setShowModel(false)}/>}
  </div>
)

}
export default ModelButton