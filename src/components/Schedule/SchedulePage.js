import Schedule from './Schedule';
import Appbar from '../utils/Appbar';
import './schedule.css';

function SchedulePage(){

    return (
        <div className='container-sch'>
            <Appbar/>
            <Schedule/>
        </div>
    );
}

export default SchedulePage;