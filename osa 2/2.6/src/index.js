import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
          { name: 'Arto Hellas', number: '040-123456' },
          { name: 'Martti Tienari', number: '040-123456' },
          { name: 'Arto Järvinen', number: '040-123456' },
          { name: 'Lea Kutvonen', number: '040-123456' }
        ],
        newName: '',
        newNumber: '',
        nameFilter: '',
    }
  }

  addPerson = (event) => {
    event.preventDefault()

    if (this.state.persons.filter(p => { return p.name === this.state.newName }).length === 0) {
      const person = {
        name: this.state.newName,
        number: this.state.newNumber,
      }
      const persons = this.state.persons.concat(person)
      this.setState({
        persons,
        newName: '',
        newNumber: '',
      })
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleNameFilterChange = (event) => {
    this.setState({ nameFilter: event.target.value })
  }

  render() {

    const filteredPersons = this.state.persons.filter(person => {
      return person.name.toLocaleLowerCase().indexOf(this.state.nameFilter.toLocaleLowerCase()) !== -1;
    })

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            rajaa näytettäviä: <input value={this.state.nameFilter} onChange={this.handleNameFilterChange} />
          </div>
          <div>
            nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {filteredPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
      </div>
    )
  }
}

export default App


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
