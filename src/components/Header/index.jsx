import React from 'react'

const Header = props => (
    <div>
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="" className="brand-logo center">
                    { props.title }
                </a>
            </div>
        </nav>
    </div>
)

export default Header