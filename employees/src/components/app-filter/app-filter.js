import './app-filter.css'

const AppFilter = (props) =>  {
   
    const btnsData = [
        {name: 'all', label:'All employees', colored: false},
        {name: 'rise', label:'Need to increase salary', colored: false},
        {name: 'moreThan1000', label:'Salary higher than 1000$', colored: false},
        {name: 'lessThan1000', label:'Salary less than 1000$', colored: true}
    ],
    btns = btnsData.map(({name, label, colored}) => {
        const active = props.filter === name, // if (props.filter === name) {return true;}
            clazz = active ? 'btn-light' : 'btn-outline-light',
            style = colored ? {color: 'red'} : null;
        return (
            <button className={`btn ${clazz}`}  type="button" key={name} onClick={() => props.onIncreaseSelect(name)} style={style}>{label}</button>
        )
    });

   

    return (
        <div className="btn-group">{btns} 
           
        </div>
    );
    
};

export default AppFilter;