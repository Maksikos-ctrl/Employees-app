import './app-filter.css'

const AppFilter = (props) =>  {
   
    const btnsData = [
        {name: 'all', label:'All employees'},
        {name: 'rise', label:'Need to increase salary'},
        {name: 'moreThan1000', label:'Salary higher than 1000$'},
        {name: 'lessThan1000', label:'Salary less than 1000$'}
    ],
    btns = btnsData.map(({name, label}) => {
        const active = props.filter === name, // if (props.filter === name) {return true;}
            clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button className={`btn ${clazz}`}  type="button" key={name} onClick={() => props.onIncreaseSelect(name)}>{label}</button>
        )
    });

   

    return (
        <div className="btn-group">{btns} 
           
        </div>
    );
    
};

export default AppFilter;