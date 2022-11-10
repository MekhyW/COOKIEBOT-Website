import Day from "./Day";
import { useState, useEffect } from "react";
import axios from "axios";

function Schedule(){

    const [data, setData] = useState([]);

    const atualizaNotas = () => {
        axios
        .get("https://projeto-2-backend-cookiebot.herokuapp.com/posts/",{headers: {"Content-Type": "application/json", "Accept": "application/json"}})
        .then((response) => {
          const dados = response.data;
          console.log(dados);
          const chunks = dados.split("\n");
          let vals = {};
          for (const chunk of chunks) {
            let stuff = chunk.split(/[\n}]/)[0];
            if (stuff.includes(":")){
              stuff = stuff.replace('[', "").replace(']', '').replace("{", "").replace(" ","");
              const key = stuff.split(":")[0]
              const value = stuff.split(":")[1]
              vals[key] = value;
            }
            else{
              continue;
            }
          }
          console.log(Object.keys(vals));
          console.log(Object.values(vals));
          setData(vals);
        })
      }
    
      useEffect(()=>{
        atualizaNotas();
      }, []);

    return (
        <div className="data">
            <h1>Schedule</h1>
            <Day day={data}/>
        </div>
    );
}

export default Schedule;