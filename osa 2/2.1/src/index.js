import React from 'react'
import ReactDOM from 'react-dom'


const Kurssi = (props) => {

  const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
  }

  const Sisalto = (props) => {
      const Osa = (props) => {
          return (
              <p>{props.osa.nimi} {props.osa.tehtavia}</p>
          )
      }

      return (
          <div>
            {props.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
          </div>
        )
  }

  return ([
    <Otsikko kurssi={props.kurssi.nimi} />,
    <Sisalto osat={props.kurssi.osat} />,
    ])
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
