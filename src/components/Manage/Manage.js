import {useEffect, useState} from 'react';
import Line from './Line';
import {Button} from '@mui/material';
import axios from 'axios';


function Manage(){

    const [data, setData] = useState([]);

    const atualizaNotas = () => {
        axios
        .get("https://projeto-2-backend-cookiebot.herokuapp.com/chatconfigs/")
        .then((response) => {
          const dados = response.data.replace("True", 'true').replace("False", 'false').replace(" True", 'true').replace(" True", 'true').replace(" True", "true").replace(" False", 'false').replace(" False","false").replace(" False", "false");
          setData(eval(dados));
        })
      }
    
      useEffect(()=>{
        atualizaNotas();
      }, []);

  
    const updateData = (key, val) => {
        Object.defineProperty(data, key, {value:val} );
        setData(data);}

    return (
        <form className="data">
            <h1>Manage</h1>
            {data.map((item) => {
              console.log(item);
            return <>
            <div className='subset'>
              <h3>{item.title}</h3>
            </div>
            <Line text="Title" type="text"  data={item.title} set={updateData} />
            <Line text="Furbot" type="switch" data={item.furbots} set={updateData} />
            <Line text="Sticker spam limit" type="slider" data={item.sticker_spam_limit} detalhes={{"mini":1, "maxi":30,"step":1, "mark":"msg"}} set={updateData} />
            <Line text="No media time" type="slider" data={item.nomedia_time} detalhes={{"mini":0, "maxi":3600,"step":30, "mark":"time"}} set={updateData} />
            <Line text="Captcha time" type="slider" data={item.captcha_time} detalhes={{"mini":0, "maxi":3600,"step":30, "mark":"time"}} set={updateData} />
            <Line text="Fun functions" type="switch" data={item.fun_functions} set={updateData} />
            <Line text="Utility functions" type="switch" data={item.utility_functions} set={updateData} />
            <Line text="SFW" type="switch" data={item.sfw} set={updateData} />
            <Line text="Language" type="select" data={item.language} set={updateData} />
            <Line text="Welcome message" type="text" data={item.welcome_message} set={updateData} />
            <Line text="Rules message" type="text" data={item.rules_message} set={updateData}  />
            </>
            })}
            <Button className='submit' variant="contained" size="larger" onClick={() => {axios.post("http://projeto-2-backend-cookiebot.herokuapp.com/chatconfigs/",{})}} data={data} >Submit</Button>
        </form>
    );
}

export default Manage;