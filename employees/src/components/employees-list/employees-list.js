
import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';


const EmployeeList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    );
};


export default EmployeeList;