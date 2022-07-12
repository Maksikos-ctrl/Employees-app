import { Component } from 'react';
import './employees-list-item.css';


class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    };

    increaseIt = () => { // callback юзать нужно потому что у нас зависит настоящее состояние от прошлого
        this.setState(({increase, star}) => ({ // записивают аргумент диструкторивно чтобы потом не писать state.increase
            increase: !increase,
            star: !star
        }));
    }

    render() {
        const {name, salary} = this.props,
            {increase, star} = this.state;

        //! return false -  used to prevent something from happening

        let classIncrease = increase ? ' increase' : '',
            classStar = star ? ' like' : '';

        // let classNames = 'list-group-item d-flex justify-content-between';  // Ванино решение

        // if (increase) {
        //     classNames += ' increase';
        // } 

        return (
            <li className={'list-group-item d-flex justify-content-between ' + classIncrease + classStar}>
                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " onClick={this.increaseIt}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
        </li>
        );  
    }

   
};

export default  EmployeesListItem;