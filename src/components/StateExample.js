import React, { useState } from 'react'

const StateExample = () => {
     const [name,setName]= useState("Anushka")
     const handleChangeName=()=>{
          setName("Shivani")
     }
  return (
    <div>
     <h1>State Example</h1>
     <h1>Name is {name}</h1>
     <button onClick={handleChangeName}>ChangeName</button>
    </div>
  )
}

export default StateExample