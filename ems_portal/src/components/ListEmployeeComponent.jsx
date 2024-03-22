import React from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function NavigatorFunction() {
    const navigate = useNavigate();

    return <ListEmployeeComponent navigate={navigate} />
}
class ListEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        this.goBack = this.goBack.bind(this);
        this.goForth = this.goForth.bind(this);
    }
    goBack() {
        this.props.navigate('/');
    }
    goForth() {
        this.props.navigate('/add-employee');
    }
    updateEmployee(id, employee) {
        this.props.navigate('/update-employee/' + id, { state: { employee } });
        const { firstName, lastName, email, phone } = employee;
        const emp = { firstName, lastName, email, phone };
        EmployeeService.updateEmployee(id, emp)
            .then(response => {
                console.log('Employee updated successfully');
            })
            .catch(error => {
                console.error('Error updating employee:', error);
            });
    }
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id);
        this.props.navigate('/employees')
    }
    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        });
    }
    render() {
        return (
            <div>
                <div className="p-1 m-1 d-flex justify-content-between">
                    <button className='btn bg-light' onClick={this.goBack}><FontAwesomeIcon icon={faBackward} /></button>
                    <button className='btn bg-light' onClick={this.goForth}><FontAwesomeIcon icon={faForward} /></button>
                </div>
                <h1 className='text-center p-5'>Employee List</h1>
                <div className="className row card shadow-lg">
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
                                            <td><button onClick={() => this.updateEmployee(employee.id, employee)} className='text-center btn btn-sm btn-info m-0 p-1'>Update</button></td>
                                            <td><button onClick={() => this.deleteEmployee(employee.id)} className='text-center btn btn-sm btn-danger m-0 p-1'>Delete</button></td>
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

export default NavigatorFunction;
