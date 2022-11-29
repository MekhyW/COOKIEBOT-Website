
function Day(props) {

    console.log(props.day);

    return (
        <div className="job">
                <h2>{props.day.schedule}</h2>
                <h3>{props.day.description}</h3>
                <p>{props.day.data}</p>
        </div>
    );
}

export default Day;