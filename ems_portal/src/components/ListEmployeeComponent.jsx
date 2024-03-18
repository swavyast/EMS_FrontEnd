import React from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        });
    }
    render() {
        return (
            <div>
                <h1 className='text-center p-5'>Employee List</h1>
                <div className="className row">
                    <table className="className table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Employee Contact</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

ListEmployeeComponent.propTypes = {};

export default ListEmployeeComponent;
