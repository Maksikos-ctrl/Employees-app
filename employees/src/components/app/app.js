import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddingForm from '../employees-add-form/employees-add-form';
import './app.css'


//TODO Компоненты - это строительные блоки пользовательского интерфейса, которые делят весь пользовательский интерфейс на небольшие независимые части, которые можно использовать повторно

function App() {
    return (
        <div className="app">
            <AppHeader />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
              
            </div>

            <EmployeesList />
            <EmployeeAddingForm />
        </div>
    )
}

export default App;
