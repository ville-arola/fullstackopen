import React from 'react'

class AddPersonForm extends React.Component {

    constructor(props) {
        super(props)
        this.parent = props.parent
    }
  
    addPerson = (event) => {
        event.preventDefault()
    
        if (this.parent.state.persons.filter(p => { return p.name === this.parent.state.newName }).length === 0) {
          const person = {
            name: this.parent.newName,
            number: this.parent.newNumber,
          }
          const persons = this.parent.state.persons.concat(person)
          this.parent.setState({
            persons,
            newName: '',
            newNumber: '',
          })
        }
      }
    
      handleNameChange = (event) => {
        this.parent.setState({ newName: event.target.value })
      }
    
      handleNumberChange = (event) => {
        this.parent.setState({ newNumber: event.target.value })
      }

      render() {
        return (
            <form onSubmit={this.addPerson}>
            <div>
                nimi: <input value={this.parent.state.newName} onChange={this.handleNameChange} />
            </div>
            <div>
                numero: <input value={this.parent.state.newNumber} onChange={this.handleNumberChange} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
            </form>
        )
    }
  }

  export default AddPersonForm