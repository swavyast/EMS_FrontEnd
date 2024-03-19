import React from 'react';
import PropTypes from 'prop-types';

class AddEmployeeCompnent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-4 offset-4">
                        <form action="/add-employee" method="post">
                            <div className="form-group p-2">
                                <label htmlFor="fname">First Name : </label>
                                <input className='form-input' type="text" name="fname" id="fname" />
                            </div>
                            <div className="form-group p-2">
                                <label htmlFor="lname">Last Name : </label>
                                <input className='form-input' type="text" name="lname" id="lname" />
                            </div>
                            <div className="form-group p-2">
                                <label htmlFor="email">Email : </label>
                                <input className='form-input' type="email" name="email" id="email" />
                            </div>
                            <div className="form-group p-2">
                                <label htmlFor="phone">Phone : </label>
                                <input className='form-input me-auto' type="tel" name="phone" id="phone" />
                            </div>
                            <div className='btn-sm btn-success'>
                                <input type="submit" value="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AddEmployeeCompnent.propTypes = {};

export default AddEmployeeCompnent;
