import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function HomePageWrapper() {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    return <HomePageComponent navigate={navigate} />; // Pass navigate as a prop to HomePageComponent
}

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addEmployee = this.addEmployee.bind(this);
        this.getEmployees = this.getEmployees.bind(this);
    }
    addEmployee(){
        this.props.navigate('/add-employee');
    }
    getEmployees(){
        this.props.navigate('/employees');
    }
    render() {
        return (
            <div>
                <h1 className='text-center text-dark'>HOME</h1>
                <button onClick={this.getEmployees} className='btn btn-dark text-white text-decoration-none p-1 m-1'>List Employees</button>
                <button onClick={this.addEmployee} className='btn btn-dark text-white text-decoration-none p-1 m-1'>Add Employee</button>
            </div>
        );
    }
}

HomePageComponent.propTypes = {
    navigate: PropTypes.func.isRequired
};

export default HomePageWrapper;
