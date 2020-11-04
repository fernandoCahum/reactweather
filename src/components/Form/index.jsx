import React, { Component } from 'react'

class Form extends Component {

    searchWeather = e => {
        e.preventDefault()

        let form = e.target,
            country = form.country.value,
            city = form.city.value,
            response = {
                country,
                city
            }

        this.props.dataQuery(response)
        form.reset()
    }

    render() {
        return(
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.searchWeather} >
                            <div className="input-field col s12 m8 l4 offset-m2 ">
                                <input type="text" id="city" name="city" />
                                <label className="white-text" htmlFor="city"> Ciudad: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 bg-color">
                                <select name="country">
                                    <option value="" defaultValue > Elige un País.</option>
                                    <option value="AR"> Argentina.</option>
                                    <option value="MX"> México.</option>
                                    <option value="ES"> España.</option>
                                    <option value="US"> Estados Unidos.</option>
                                    <option value="PE"> Perú.</option>
                                    <option value="CR"> Costa Rica.</option>
                                    <option value="CO"> Colombia.</option>
                                </select>
                                <label htmlFor="country" className="white-text" > País: </label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" className="waves-effect waves-light btn-large yellow accent-4" value="Buscar.."/>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Form
