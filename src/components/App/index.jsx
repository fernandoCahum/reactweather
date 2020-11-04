import React, { Component } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css'

import Header from '../Header'
import Form from '../Form'
import Error from '../Error'
import Weather from '../Weather'

class App extends Component {

    state = {
        error : false,
        consulta : {},
        resultado: {}
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.consulta !== this.state.consulta){
            this.apiQuery()
        }
    }

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    apiQuery = () => {
        const {country, city} = this.state.consulta

        if(!country || !city) return null

        let appId = "6a3eb347090bf36648759b541d2966f3",
            url =`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`

        fetch(url)
            .then(respuesta =>{
                return respuesta.json()
            })
            .then(datos => {
                this.setState({
                    resultado : datos
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    dataQuery = response => {
        if(response.country === '' || response.city === '')
            this.setState({
                error : true
            })
        else this.setState({
            consulta : response,
            error : false
        })

    }


    render(){
        const error = this.state.error

        let resultado

        if(error){
            resultado = <Error message = "Ambos campos son obligatorios."/>
        }else {
            resultado = <Weather resultado = { this.state.resultado } />
        }

        return(
            <div className="App">
                <Header title= { 'Clima React' }/>
                <Form
                    dataQuery = {this.dataQuery}
                />
                {resultado}
            </div>
        )
    }

}

export default App