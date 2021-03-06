import React, { Component } from 'react'

class Weather extends Component {

    mostrarResultado = () =>{

        const {name, weather, main} =this.props.resultado

        if(!name || !weather || !main) return null

        const kelvin = 273.15,
            urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`,
            alt = `Clima de ${name}`


        return (
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue center-align">
                        <span className="white-text">
                            <h2> Resultado clima de: {name} </h2>
                            <p className="temperatura">
                                Actual: { (main.temp - kelvin).toFixed(2)} &deg;C
                                <img src={urlIcon} alt={alt}/>
                            </p>
                            <p>Max. {(main.temp_max - kelvin).toFixed(2)} &deg;C</p>
                            <p>Min. {(main.temp_min - kelvin).toFixed(2)} &deg;C</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    render(){


        return (
            <div className="container">
                { this.mostrarResultado() }
            </div>
        )
    }
}

export default Weather