import React from 'react'

const AddPersonForm = (props) => {

      return (
          <form onSubmit={props.addPerson}>
          <div>
              nimi: <input value={props.name} onChange={props.handleNameChange} />
          </div>
          <div>
              numero: <input value={props.number} onChange={props.handleNumberChange} />
          </div>
          <div>
              <button type="submit">lisää</button>
          </div>
          </form>
      )
  }

  export default AddPersonForm