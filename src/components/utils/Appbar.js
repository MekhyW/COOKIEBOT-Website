
function Appbar(){

    return (
        <>
            <div className="appbar">
                <a href="/" id="voltar"><img src='home.png'></img></a>
                <a href="/settings">Settings</a>
                <a href="/schedule">Schedule</a>
            </div>
        </>
    );
}

export default Appbar;