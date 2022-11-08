import Landing from './Landing';
import Appbar from '../utils/Appbar';
import './Landing.css';

function LandingPage(){

    return (
        <div className='container'>
            <Appbar/>
            <Landing/>
        </div>
    );
}

export default LandingPage;