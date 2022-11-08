
export default function Day(props) {


    return (
        <div className="job">
                <h2>{props.day.schedule}</h2>
                <h3>{props.day.description}</h3>
                <p>{props.day.data}</p>
        </div>
    );
}