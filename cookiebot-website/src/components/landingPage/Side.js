
function Side(props) {

    return (
        <>
            <div className="side">
            {props.side === 'l' ? <>
                <img src="aa" alt="logo" />
                <div className="side-text">
                    <h1> {props.title} </h1>
                    <p>{props.desc}</p>
                </div>
            </> : <>
                <div className="side-text">
                    <h1> {props.title} </h1>
                    <p>{props.desc}</p>
                </div>
                <img src="aa" alt="logo" />
            </>}
            </div>
        </>
    );
}

export default Side;