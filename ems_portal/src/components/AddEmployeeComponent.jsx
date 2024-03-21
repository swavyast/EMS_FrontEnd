import React from 'react';
import AddEmployeeService from '../services/AddEmployeeService'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NavigatorFunction(){
    const navigate =  useNavigate();

    return <AddEmployeeComponent navigate={navigate} />;
}
class AddEmployeeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname : '',
            lname : '',
            email : '',
            phone : ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    changeFirstNameHandler = (event) => {
        this.setState({fname : event.target.value});
    }
    changeLastNameHandler = (event) =>{
        this.setState({lname : event.target.value})
    }
    changeEmailHandler = (event) =>{
        this.setState({email : event.target.value})
    }
    changePhoneHandler = (event) =>{
        this.setState({phone : event.target.value})
    }
    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {fname : this.state.fname, lname : this.state.lname, email : this.state.email, phone : this.state.phone}
        console.log("employee => ", JSON.stringify(employee))
    }
    cancel(){
       this.props.navigate('/');
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="card col-md-4 offset-4 shadow-lg py-5">
                        <form action="/add-employee" method="post">
                            <h3 className='text-center mb-4'>Add Employee</h3>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="fname">First Name : </label>
                                <input className='form-input' type="text" name="fname" id="fname" value={this.state.fname} onChange={this.changeFirstNameHandler} />
                            </div>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="lname">Last Name : </label>
                                <input className='form-input' type="text" name="lname" id="lname" value={this.state.lname} onChange={this.changeLastNameHandler} />
                            </div>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="email">Email : </label>
                                <input className='form-input' type="email" name="email" id="email" value={this.state.email} onChange={this.changeEmailHandler} />
                            </div>
                            <div className="form-group col-md-4 offset-3">
                                <label htmlFor="phone">Phone : </label>
                                <input className='form-input me-auto' type="tel" name="phone" id="phone" value={this.state.phone} onChange={this.changePhoneHandler} />
                            </div>
                            <div className='form-group col-md-6 offset-3 mt-3 mb-0 px-4'>
                                <input className='btn btn-sm btn-outline-success px-3 mx-0' type="submit" value="Add" onClick={this.saveEmployee} />
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
