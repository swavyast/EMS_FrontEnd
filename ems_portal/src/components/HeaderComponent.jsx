import React from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className='me-auto'><a href="http://localhost:3000" className="navbar-brand p-2">EMS : Employee Management System</a></div>
                        <form class="form-inline my-2 my-lg-0 d-inline-flex">
                            <input class="form-control mr-sm-2 m-1" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-sm btn-outline-light m-1 p-1" type="submit">Search</button>
                        </form>
                    </nav>
                </header>
            </div>
        );
    }
}

HeaderComponent.propTypes = {};

export default HeaderComponent;
