import Day from "./Day";
import { useState, useEffect } from "react";
import axios from "axios";

function Schedule(){

    const [data, setData] = useState([]);

    const atualizaNotas = () => {
        axios
        .get("http://projeto-2-backend-cookiebot.herokuapp.com/posts",{headers: {"Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Origin": "*"}})
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
      }
    
      useEffect(()=>{
        atualizaNotas();
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