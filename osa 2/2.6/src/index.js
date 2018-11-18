import React from 'react'
import ReactDOM from 'react-dom'
import Person from './components/Person'
import FilterForm from './components/FilterForm'
import AddPersonForm from './components/AddPersonForm';

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

  render() {
    const filteredPersons = this.state.persons.filter(person => {
      return person.name.toLocaleLowerCase().indexOf(this.state.nameFilter.toLocaleLowerCase()) !== -1;
    })

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <FilterForm parent={this} />
        <h3>Lisää henkilö</h3>
        <AddPersonForm parent={this} />
        <h2>Numerot</h2>
        {filteredPersons.map(person => <Person key={person.name} person={person} />)}
      </div>
    )
  }
}

export default App


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
