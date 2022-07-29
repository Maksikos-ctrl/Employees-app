import { Component } from 'react';

// import './employees-add-form.css';
import './employees-add-form.css';

// super даёт доступ к прототипу базового класса, позволяя вызывать его методы.

class EmployeeAddingForm extends Component {
    
    state = {
        name: '',
        salary: ''
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
       
        if (this.state.name.length >= 3 && this.state.salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                err: false
            });
        } else {
            this.setState({
                err: true
            })
        }
        
    }


    static onLog = () => {
        console.log('jjj');
    };


    static logged = 'on';

    


    render() { //! Неуправляемий input это inputTypeFile когда юзер загружает в него какой-то файл
        const {name, salary, err} = this.state;

        let classErr = err ? ' red' : '';
        return (
            <div className="app-add-form">
                <h3>Add new employee, please</h3>
                <form
                    className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text"
                        className={"form-control new-post-label " + classErr}
                        placeholder="What is his name?" name="name" value={name} onChange={this.onValueChanging}/>
                    <input type="number"
                        className={"form-control new-post-label" + classErr} 
                        placeholder="Salary in $?" name="salary" value={salary} onChange={this.onValueChanging}/>
        
                    <button type="submit"
                       className="btn btn-outline-light">Add</button>
                </form>
           </div>
        );  
    }
    
};

EmployeeAddingForm.onLog();
console.log(EmployeeAddingForm.logged);

export default EmployeeAddingForm;