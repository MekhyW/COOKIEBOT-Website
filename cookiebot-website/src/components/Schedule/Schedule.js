import Day from "./Day";
import { useState, useEffect } from "react";

function Schedule(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/posts/')
        .then(res => res.json())
        .then(data => setData(data));
    }, []);

    return (
        <div className="data">
            <h1>Schedule</h1>
            {data.map((day) => (
                <Day day={day}/>
            ))}
        </div>
    );
}

export default Schedule;