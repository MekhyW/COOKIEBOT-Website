import {Switch, Slider, TextField, Select, MenuItem} from '@mui/material'
import {useState} from 'react';
function Line(props){

    const [value, setValue] = useState(props.data);

    function handleChange(event){
        setValue(event.target.value);
        props.data[props.i] = event.target.value;
    }

    const confira = (e, a) => {
        switch(e){
            case 'slider':
                console.log(a);
                return <Slider value={value} onChange={handleChange} marks={a.mark === "time" ? [{value:0,label:"0 mS"},{value:3600, label:"3600 mS"}] : [{value:1,label:"1 stickers"},{value:30, label:"30 stickers"} ]} className="slider" valueLabelDisplay='auto'min={a.mini} max={a.maxi} step={a.step} sx={{width:"35%"}}/>
            case 'text':
                return <TextField required className="text" value={value} onChange={handleChange} multiline sx={{width:"35%"}}/>
            case 'select':
                return <Select value={value} onChange={handleChange} className="drop">  
                    <MenuItem value={"pt"}>Português</MenuItem>
                    <MenuItem value={"eng"}>English</MenuItem>
                    <MenuItem value={"esp"}>Español</MenuItem>
                    </Select>
            case 'switch':
                return <Switch value={value} onChange={handleChange} defaultChecked className="switch" size='large' />
            default:
                return <p>error</p>
        }
    }


    return (
        <div className="data-lin">
            <h2>{props.text}</h2>
            {confira(props.type,props.detalhes)}
        </div>
    );
}

export default Line;