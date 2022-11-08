import {useEffect, useState} from 'react';
import Line from './Line';
import {Button} from '@mui/material';
import axios from 'axios';


function Manage(){

    const [data, setData] = useState([]);

    const atualizaNotas = () => {
        axios
        .get("http://projeto-2-backend-cookiebot.herokuapp.com/chatconfigs")
        .then((response) => {
          
          setData(response.data);
        })
      }
    
      useEffect(()=>{
        atualizaNotas();
      }, []);

    return (
        <form className="data">
            <h1>Manage</h1>
            <Line text="Title" type="text" data={data.values[0]} />
            <Line text="Furbot" type="switch" data={data.values[1]} />
            <Line text="Sticker spam limit" type="slider" data={data.values[2]} detalhes={{"mini":1, "maxi":30,"step":1, "mark":"msg"}} />
            <Line text="No media time" type="slider" data={data.values[3]} detalhes={{"mini":0, "maxi":3600,"step":30, "mark":"time"}}/>
            <Line text="Captcha time" type="slider" data={data.values[4]} detalhes={{"mini":0, "maxi":3600,"step":30, "mark":"time"}}/>
            <Line text="Fun functions" type="switch" data={data.values[5]} />
            <Line text="Utility functions" type="switch" data={data.values[6]} />
            <Line text="SFW" type="switch" data={data.values[7]} />
            <Line text="Language" type="select" data={data.values[8]} />
            <Line text="Welcome message" type="text" data={data.values[9]} />
            <Line text="Rules message" type="text" data={data.values[10]}  />
            <Button className='submit' variant="contained" size="larger" data={data.values[2]} >Submit</Button>
        </form>
    );
}

export default Manage;