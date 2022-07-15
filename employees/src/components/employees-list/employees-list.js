
import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';


//TODO Алгоритм согласование нужен для оптимизации скорости роботи приложения

//?Выводи: React обновляе в интерфейсе только те элементы которые изменились

//? Помогает алгоритм согласование который сравнивает старые и новые копии DOM-дерева


const EmployeeList = ({data, onDelete, onToggleIncrease, onToggleRise}) => {

    //? Деструктуризация — относительно новый способ получения (извлечения) значений объекта или массива.

    const els = data.map(i => { //TODO c помощью рест-оператора {...i} = name={i.name} salary={i.salary}

        const {id, ...itemProps} = i; // деструкторизируем i

        return (
            // <EmployeesListItem name={i.name} salary={i.salary}/>
            <EmployeesListItem key={id} {...itemProps} onDelete={() => onDelete(id)} onToggleIncrease={() => onToggleIncrease(id)} onToggleRise={() => onToggleRise(id)}/>  
        );
    });

    console.log(els);


    return (
        <ul className="app-list list-group">
            {els}
        </ul>
    );
};


export default EmployeeList;