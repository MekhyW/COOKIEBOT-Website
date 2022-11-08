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
            <Line text="Title" type="text" i="0" data={data.values[0]} />
            <Line text="Furbot" type="switch" i="1" data={data.values[1]} />
            <Line text="Sticker spam limit" i="2" type="slider" data={data.values[2]} detalhes={{"mini":1, "maxi":30,"step":1, "mark":"msg"}} />
            <Line text="No media time" i="3" type="slider" data={data.values[3]} detalhes={{"mini":0, "maxi":3600,"step":30, "mark":"time"}}/>
            <Line text="Captcha time" i="4" type="slider" data={data.values[4]} detalhes={{"mini":0, "maxi":3600,"step":30, "mark":"time"}}/>
            <Line text="Fun functions" i="5" type="switch" data={data.values[5]} />
            <Line text="Utility functions" i="6" type="switch" data={data.values[6]} />
            <Line text="SFW" type="switch" i="7" data={data.values[7]} />
            <Line text="Language" i="8" type="select" data={data.values[8]} />
            <Line text="Welcome message" i="9" type="text" data={data.values[9]} />
            <Line text="Rules message" i="10" type="text" data={data.values[10]}  />
            <Button className='submit' i="11" variant="contained" size="larger" onClick={() => {axios.post("http://projeto-2-backend-cookiebot.herokuapp.com/chatconfigs",{})}} data={data.values[2]} >Submit</Button>
        </form>
    );
}

export default Manage;