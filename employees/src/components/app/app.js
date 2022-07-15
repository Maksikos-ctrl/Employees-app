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
        
            ]
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

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id),
                prev = data[index], // получаем старый объект
                newItem = {...prev, increase: !prev.increase}, // значит что все свойства что были внутри объекта prev они развернуться и сформируют из этого новый объект. После , мы добовляем свойства и это значит что если эти свойства будут совпадать с тем что вот развернеться сдесь, то написаное после этого будут его заминять
                newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            
              
            return {
                data: newArr
            }   
        })
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }
    
    render() {
        return (
            <div className="app">
                <AppHeader />
                
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                  
                </div>
    
                <EmployeesList data={this.state.data} onDelete={this.removeItem} onToggleIncrease={this.onToggleIncrease} onToggleRise={this.onToggleRise}/>
                <EmployeeAddingForm onAdd={this.addingItem}/>
            </div>
        )
    }
}

export default App;
