import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [shapes,setShapes] = useState([])
  const [selected,setSelected] = useState('square')
  const handleAddShape = () => {
    const oldShapes = [...shapes]
    oldShapes.push(selected.toLowerCase())
    setShapes(oldShapes)
    console.log(selected)
  }
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={(e)=>setSelected(e.target.value)} value={selected}>
          <option id="option-square">Square</option>
          <option id="option-circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapes.map((shape,idx)=><div className={shape} key={idx}>{idx}</div>)}
      </div>
    </div>
  )
}


export default App;
