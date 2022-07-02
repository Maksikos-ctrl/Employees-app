import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddingForm from '../employees-add-form/employees-add-form';
import './app.css'


//TODO Компоненты - это строительные блоки пользовательского интерфейса, которые делят весь пользовательский интерфейс на небольшие независимые части, которые можно использовать повторно

function App() {

    const data = [
        {name: 'Denis Knight', salary: 1250, increase: true, id: 1},
        {name: 'Max Chernikov', salary: 10000, increase: false, id: 2},
        {name: 'Artem Pavlov', salary: 3000, increase: true, id: 3},
        {name: 'Ilya Kyva', salary: 2000, increase: false, id: 4},

    ];

    return (
        <div className="app">
            <AppHeader />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
              
            </div>

            <EmployeesList data={data}/>
            <EmployeeAddingForm />
        </div>
    )
}

export default App;
