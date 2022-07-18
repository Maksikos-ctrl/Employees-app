import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        } 
    } 


    onUpdateSearch = (e) => { //! эта функция будет роботать локально
        const term = e.target.value;
        this.setState({term}); // установка локального состояния, i.e term: ""
        this.props.onUpdateSearch(term); //TODO а эта часть нам приходит из другого компонента
    }
   

    render() {
        return (
            <input type="text" className="form-control search-input" placeholder="Find employee" value={this.state.term} onChange={this.onUpdateSearch}/>
        );   
    }
    
};

export default SearchPanel;