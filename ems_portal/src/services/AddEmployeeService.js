import axios from "axios";

const ADD_EMPLOYEE_API_URL = 'http://localhost:3000/add-employee'

class AddEmployeeService{
    addEmployee(){

        return axios.get(ADD_EMPLOYEE_API_URL);
    }
}

export default new AddEmployeeService()