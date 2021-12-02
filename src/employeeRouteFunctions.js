import axios from 'axios'

const API = "http://localhost:8089/api/v1/employees"

class employeeRouteFunctions {
    getAllEmployees(){
        return axios.get(API)
    }

    createNewEmployee(employee){
        return axios.post(API, employee)
    }

    getEmployeeById(id){
        return axios.get(API + "/" + id)
    }

    updateEmployee(employee, id){
        return axios.put(API + "/" + id, employee)
    }

    deleteEmployeeById(id){
        return axios.delete(API + "/" + id)
    }
}

export default new employeeRouteFunctions()