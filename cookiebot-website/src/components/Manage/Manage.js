import {useEffect, useState} from 'react';
import Line from './Line';

function Manage(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/notes')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <div className="data">
            <h1>Manage</h1>
            <Line text="Title" type="text" />
            <Line text="Furbot" type="switch" />
            <Line text="Sticker spam limit" type="slider" />
            <Line text="No media time" type="slider" />
            <Line text="Captcha time" type="slider" />
            <Line text="Fun functions" type="switch" />
            <Line text="Utility functions" type="switch" />
            <Line text="SFW" type="switch" />
            <Line text="Language" type="select" />
            <Line text="Welcome message" type="text" />
            <Line text="Rules message" type="text" />
        </div>
    );
}

export default Manage;