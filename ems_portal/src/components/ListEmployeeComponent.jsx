import React from 'react';
import PropTypes from 'prop-types';

class ListEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        };
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Employee List</h1>
                <div className="className row">
                    <table className="className table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Employee Contact</th>
                                <th>Employee Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.fname}</td>
                                        <td>{employee.lname}</td>
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
