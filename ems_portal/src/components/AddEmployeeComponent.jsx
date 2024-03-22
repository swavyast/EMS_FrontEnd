import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function NavigatorFunction() {
    const navigate = useNavigate();
    const { id } = useParams();

    return <AddEmployeeComponent navigate={navigate} id={id} />;
}
class AddEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    changeHandler(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    saveOrUpdateEmployee(e) {
        e.preventDefault();
        const { firstName, lastName, email, phone } = this.state;
        const employee = { firstName, lastName, email, phone };
        const { id } = this.props;
        console.log("employee => ", employee);
        if (id) {
            EmployeeService.updateEmployee(id, employee).then((res) => {
                this.props.navigate('/employees')
            });
        } else {
            EmployeeService.saveEmployee(employee).then((res) => {
                this.props.navigate('/employees');
            });
        }
    }
    cancel() {
        this.props.navigate('/');
    }
    componentDidMount() {
        const { id } = this.props;
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then((res) => {
                    const { firstName, lastName, email, phone } = res.data;
                    this.setState({ firstName, lastName, email, phone });
                })
                .catch((error) => {
                    console.error('Error fetching employee:', error);
                });
        }
    }
    render() {
        const { id } = this.props;
        return (
            <div>
                <div className="container mt-5">
                    <div className="card col-md-4 offset-4 shadow-lg py-5">
                        <form onSubmit={this.saveOrUpdateEmployee}>
                            <h3 className='text-center mb-4'> {id ? 'Update Employee' : 'Add Employee'}</h3>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="firstName">First Name : </label>
                                <input className='form-input' type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="lastName">Last Name : </label>
                                <input className='form-input' type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="email">Email : </label>
                                <input className='form-input' type="email" name="email" id="email" value={this.state.email} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="phone">Phone : </label>
                                <input className='form-input me-auto' type="tel" name="phone" id="phone" value={this.state.phone} onChange={this.changeHandler} />
                            </div>
                            <div className='form-group col-md-6 offset-3 mt-3 mb-0 px-4 d-flex'>
                                <input className='btn btn-sm btn-outline-success mx-0' type="submit" value={id ? 'Update' : 'Save'} onClick={this.saveOrUpdateEmployee} />
                                <input className='btn btn-sm btn-outline-danger mx-2' type="button" value="Cancel" onClick={this.cancel} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AddEmployeeComponent.propTypes = {};

export default NavigatorFunction;
