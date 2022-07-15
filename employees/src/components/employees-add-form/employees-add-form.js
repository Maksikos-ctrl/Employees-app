import { Component } from 'react';

import './employees-add-form.css';

class EmployeeAddingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    } 

    onValueChanging = (e) => { // расскриваем просто как обычний объект потому что мы не привязиваемся к тому что было введено в прошлом state
        this.setState({ // e.target.value - значение нашого input который был введён
            // prop: e.target.value 
            //TODO Таким способом можно записать свойство в объект  
            [e.target.name]: e.target.value,
            
        });
    }
    
    onSubmit = e => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        });
    }

    


    render() { //! Неуправляемий input это inputTypeFile когда юзер загружает в него какой-то файл
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Add new employee, please</h3>
                <form
                    className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What is his name?" name="name" value={name} onChange={this.onValueChanging}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?" name="salary" value={salary} onChange={this.onValueChanging}/>
        
                    <button type="submit"
                       className="btn btn-outline-light">Add</button>
                </form>
           </div>
        );  
    }
    
};

export default EmployeeAddingForm;