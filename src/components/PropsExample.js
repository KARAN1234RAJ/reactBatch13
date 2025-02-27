import React from 'react'

const PropsExample = (props) => {
     console.log(props);
     
  return (
    <div>
     <h1>Hello {props.name} welcome to { props.city}</h1>
    </div>
  )
}

export default PropsExample