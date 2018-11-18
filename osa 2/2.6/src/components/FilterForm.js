import React from 'react'

class FilterForm extends React.Component {

    constructor(props) {
        super(props)
        this.parent = props.parent
    }
  
    handleNameFilterChange = (event) => {
        this.parent.setState({ nameFilter: event.target.value })
    }

    render() {
        return (
            <div>
                rajaa näytettäviä: <input value={this.parent.nameFilter} onChange={this.handleNameFilterChange} />
            </div>
        )
    }
  }

  export default FilterForm