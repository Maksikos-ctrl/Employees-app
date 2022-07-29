import './employees-list-item.css';

//TODO Подъем состояния - это когда внутреннее состояние одного компонента мы поднимаем више по иерархии  
//? Важно уметь делать когда у нас данные храняться где-то в одном месте   

const EmployeesListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         star: false
    //     }
    // };

    // increaseIt = () => { // callback юзать нужно потому что у нас зависит настоящее состояние от прошлого
    //     this.setState(({increase, star}) => ({ // записивают аргумент диструкторивно чтобы потом не писать state.increase
    //         increase: !increase,
    //         star: !star
    //     }));
    // }

   
    const {name, salary, onDelete, onToggleProp, increase, rise, onSalaryChange} = props;
        // {increase, star} = this.state;

    //! return false -  used to prevent something from happening

    let classIncrease = increase ? ' increase' : '',
        classStar = rise ? ' like' : '';

    // let classNames = 'list-group-item d-flex justify-content-between';  // Ванино решение

    // if (increase) {
    //     classNames += ' increase';
    // } 

    return (
        <li className={'list-group-item d-flex justify-content-between ' + classIncrease + classStar}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise" onChange={onSalaryChange} style={{}}>{name}</span> 
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " onClick={onToggleProp} data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm " onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
    </li>
    );  
};

   


export default  EmployeesListItem;