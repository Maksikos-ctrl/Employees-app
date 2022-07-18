import { Component } from 'react'; 

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddingForm from '../employees-add-form/employees-add-form';
import './app.css'


//TODO Компоненты - это строительные блоки пользовательского интерфейса, которые делят весь пользовательский интерфейс на небольшие независимые части, которые можно использовать повторно

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Denis Knight', salary: 1250, increase: true, rise: true, id: 1},
                {name: 'Max Chernikov', salary: 10000, increase: false, rise: false, id: 2},
                {name: 'Artem Pavlov', salary: 3000, increase: true, rise: false, id: 3},
                {name: 'Ilya Kyva', salary: 2000, increase: false, rise: false, id: 4},
        
            ],
            term: '',
            beIncreased: ''
        }
        this.maxId = 5;
    }

    removeItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(el => el.id === id); //? мы id каждого пользователя будем сравнивать с id которое у нас приходит из метода
            //TODO иммутабельним називаеться объект когда он не может быть изминен после своего создания, появидлся у нас в коде obj и всё
            //! Если мы изменяем state на прямую, то мы можем столкнуться с багами
            // data.splice(index, 1); // удаляем элемент по индексу 1, но этот способ протеворечт иммутабельности

            // 1.правильний способ
 
            // before = data.slice(0, index), //? главный элемент который мы нашдли мы пропускаем
            // after = data.slice(index + 1), /TODO и после него начинаем копировать ещё кусочек массива начиная со следующего элемента и до конца массива
            
            // newArr = [...before, ...after]; // розворачиваем верхние массиви в одном

            // 2.правильний способ
            
            

            return {
                data: data.filter(item => item.id !== id)
                // data: newArr
            }
        });

       
    };

    addingItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return { data: newArr }
        });
    } 

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(item => item.id === id),
        //         prev = data[index], // получаем старый объект
        //         newItem = {...prev, increase: !prev.increase}, // значит что все свойства что были внутри объекта prev они развернуться и сформируют из этого новый объект. После , мы добовляем свойства и это значит что если эти свойства будут совпадать с тем что вот развернеться сдесь, то написаное после этого будут его заминять
        //         newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            
              
        //     return {
        //         data: newArr
        //     }   
        // })

        this.setState(({data}) => ({
            data: data.map(i => { 
                if (i.id === id) {
                    return {...i, [prop]: !i[prop]} // возвращаем объект который содержит всю эту сущность
                }
                return i;
            })  
        }));
    }


    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }  

        return items.filter(item => {
            return item.name.indexOf(term) > -1; //? Возвращаем только те элементы которые имме.т имя у каждого элемента массива, потом прохоимся по строке методом indexOf
        });
    };

    searchWhomBeIncreased = (items, beIncreased) => {
        switch (beIncreased) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'higherThan1000':
                return items.filter(item => item.salary > 1000);  
            case 'lessThan1000':
                return items.filter(item => item.salary < 1000);     
            default: 
                return items;       
        }
    }


    onUpdateSearch = (term) => {
        this.setState({term});
    }

    // onUpdateIncrease = (beIncreased) => {
    //     this.setState({beIncreased});
    // }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(i => { 
    //             if (i.id === id) {
    //                 return {...i, rise: !i.rise} // возвращаем объект который содержит всю эту сущность
    //             }
    //             return i;
    //         })  
    //     }));
    // }


    onIncreaseSelect = (beIncreased) => {
        this.setState({beIncreased});
    };


    onSalaryChange = (id, val) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: val.replace(/\D/g, '')}
                }
                return item;
            })
            
        }));
    }

        
    render() {
        const { data, term, beIncreased } =  this.state,
            employees = this.state.data.length, // general amount of employees
            increased = this.state.data.filter(item => item.increase).length,
            visibleData = this.searchWhomBeIncreased(this.searchEmp(data, term), beIncreased);
           
        return (
            <div className="app">
                <AppHeader employees={employees} increased={increased}/>
                
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter beIncreased={beIncreased} onIncreaseSelect={this.onIncreaseSelect}/>
                  
                </div>
    
                <EmployeesList data={visibleData} onDelete={this.removeItem} onToggleProp={this.onToggleProp} onSalaryChange={this.onSalaryChange}/>
                <EmployeeAddingForm onAdd={this.addingItem}/>
            </div>
        )
    }
}

export default App;
