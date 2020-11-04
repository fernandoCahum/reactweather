import React from 'react'

const Error = props => (
    <div className="container">
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="card-panel red darken-4 error">
                    {props.message}
                </div>
            </div>
        </div>
    </div>
)

export default Error