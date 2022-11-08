import Manage from './Manage';
import Appbar from '../utils/Appbar';
import './manage.css';

function ManagePage(){

    return (
        <div className='container-mng'>
            <Appbar/>
            <Manage/>
        </div>
    );
}

export default ManagePage;