
import './app-header.css';

// Компоненти это отдельние кусочки нашего приложения которые мы будем переиспользовать и они у нас храняться в разних файлах и обязательно називаються с большой букви

const AppHeader = ({increased, employees}) => {
    return (
        <div className="app-header">
            <h1>Accounting for employees in the company of Maksikos-ctrl</h1>
            <h2>General amount of employees: {employees}</h2>
            <h2>Prize will receive: {increased}</h2>
        </div>
    );
};

export default AppHeader;