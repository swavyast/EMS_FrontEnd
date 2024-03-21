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
