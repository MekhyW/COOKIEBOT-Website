import {Switch, Slider, TextField, Select} from '@mui/material'
function Line(props){

    const confira = (e, a) => {
        switch(e){
            case 'slider':
                return <Slider className="slider" valueLabelDisplay='auto' min={0} sx={{width:"35%"}}/>
            case 'text':
                return <TextField className="text"/>
            case 'select':
                return <Select className="drop"/>
            case 'switch':
                return <Switch defaultChecked className="switch"/>
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