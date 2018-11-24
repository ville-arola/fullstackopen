import React from 'react'
import Person from './components/Person'
import FilterForm from './components/FilterForm'
import AddPersonForm from './components/AddPersonForm';
import personService from './services/persons'

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
        personService.getAll()
            .then(persons => {
                this.setState({persons})
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
            personService.create(person)
                .then(person => {
                this.setState({
                    persons: this.state.persons.concat(person),
                    newName: '',
                    newNumber: '',
                })
            })
        }
    }

    removePerson = (id) => {
        return () => {
            var name = this.state.persons.find(person => {
                return person.id === id
            }).name;
            if (window.confirm('Poistetaanko ' + name + '?')) {
                personService.remove(id)
                    .then(removed => {
                        if (removed) {
                            this.setState({
                                persons: this.state.persons.filter(person => {
                                    return person.id !== id
                                })
                            })
                        }
                    })
            }
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
          {filteredPersons.map(person => <Person key={person.id} person={person} remove={this.removePerson(person.id)} />)}
        </div>
      )
    }
  }
  
  export default App
  