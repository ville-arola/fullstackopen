import React from 'react'
import Person from './components/Person'
import FilterForm from './components/FilterForm'
import AddPersonForm from './components/AddPersonForm';
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          persons: [],
          newName: '',
          newNumber: '',
          nameFilter: '',
      }

      this.handleNameFilterChange = this.handleNameFilterChange.bind(this)
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleNumberChange = this.handleNumberChange.bind(this)
      this.addPerson = this.addPerson.bind(this)
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                this.setState({persons: response.data})
        })
    }

    handleNameFilterChange = (event) => {
        this.setState({ nameFilter: event.target.value })
    }

    handleNameChange = (event) => {
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        this.setState({ newNumber: event.target.value })
    }

    addPerson = (event) => {
        event.preventDefault()
        if (this.state.persons.filter(p => { return p.name === this.state.newName }).length === 0) {
            const person = {
                name: this.state.newName,
                number: this.state.newNumber,
            }
            axios
                .post('http://localhost:3001/persons', person)
                .then(response => {
                this.setState({
                    persons: this.state.persons.concat(response.data),
                    newName: '',
                    newNumber: '',
                })
            })
        }
    }
  
    render() {
      const filteredPersons = this.state.persons.filter(person => {
        return person.name.toLocaleLowerCase().indexOf(this.state.nameFilter.toLocaleLowerCase()) !== -1;
      })
  
      return (
        <div>
          <h2>Puhelinluettelo</h2>
          <FilterForm value={this.state.nameFilter}
                      handler = {this.handleNameFilterChange} />
          <h3>Lisää henkilö</h3>
          <AddPersonForm name = {this.state.newName}
                         number = {this.state.newNumber}
                         addPerson = {this.addPerson}
                         handleNameChange = {this.handleNameChange}
                         handleNumberChange = {this.handleNumberChange} />
          <h2>Numerot</h2>
          {filteredPersons.map(person => <Person key={person.name} person={person} />)}
        </div>
      )
    }
  }
  
  export default App
  