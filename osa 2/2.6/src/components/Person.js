import React from 'react'

const Person = ({person, remove}) => {
  
    return (
      <div>
        <span>{person.name} {person.number}</span>
        <button onClick={remove}>Poista</button>
      </div>
    )
  }

  export default Person