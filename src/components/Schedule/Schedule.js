import Day from "./Day";
import { useState, useEffect } from "react";
import axios from "axios";
window.Buffer = window.Buffer || require("buffer").Buffer; 


function Schedule(){

    const [data, setData] = useState([]);

    const getValues = (data) => {
        const reSch = /schedule: "(.*?)"/;
        const reDes = /description: "(.*?)"/;
        const reDat = /data: "(.*?)"/;
        const sch = data.match(reSch)[1];
        const des = data.match(reDes)[1];
        const dat = data.match(reDat)[1];
        const obj = {
            schedule: sch,
            description: des,
            data: dat
        }
        return obj;
    }

    const atualizaNotas = () => {
        axios
        .get("https://projeto-2-backend-cookiebot.herokuapp.com/posts/",{headers: {"Content-Type": "application/json", "Accept": "application/json"}})
        .then((response) => {
          const formatedData = Buffer.from(response.data, 'utf-8').toString();
          const dados = formatedData.split(/,(?=([^\"]*\"[^\"]*\")*[^\"]*$)/);
          const onlyEven = dados.filter((_, i) => i % 2 === 0);
          const values = onlyEven.map((item) => getValues(item));
          //console.log(values);
          setData(values);
        })
      }
    
      useEffect(()=>{
        atualizaNotas();
      }, []);

    return (
        <div className="data">
            <h1>Schedule</h1>
            {data.map((item) => {
              console.log(item);
              return <Day day={item} />
            })}
        </div>
    );
}

export default Schedule;