import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1 className='text-center text-dark'>HOME</h1>
                <a href="http://localhost:3000/employees" className='btn btn-dark text-white text-decoration-none p-1 m-1'>List Employees</a>
                <a href="add-employee" className='btn btn-dark text-white text-decoration-none p-1 m-1'>Add Employees</a>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
