
function Side(props) {

    return (
        <>
            <div className="side">
            {props.side === 'l' ? <>
                <img src="skynet.gif" alt="logo" />
                <div className="side-text">
                    <h1> {props.title} </h1>
                    <h3>{props.desc}</h3>
                </div>
            </> : <>
                <div className="side-text">
                    <h1> {props.title} </h1>
                    <h3>{props.desc}</h3>
                </div>
                <img src="robot_dance.gif" alt="logo" />
            </>}
            </div>
        </>
    );
}

export default Side;