import React from 'react'

const Kurssi = ({kurssi}) => {

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
  
    const Lukumaara = (props) => {
      
      return (
        <p>Yhteensä {props.osat.reduce((acc, val) => acc + val.tehtavia, 0)} tehtävää</p>
      )
    }
  
    return (
      <div>
        <Otsikko kurssi={kurssi.nimi} />
        <Sisalto osat={kurssi.osat} />
        <Lukumaara osat={kurssi.osat} />
      </div>
    )
  }

  export default Kurssi