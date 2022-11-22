import Intro from "./Intro";
import Side from "./Side";
import Bullet from "./Bullet";

function Landing(){

    return (
        <>
            <Intro />
            <Side  side="r" title="Funcionalidade 1" desc="Smooth Moves"/>
            <Side  side="l" title="Funcionalidade 2" desc="Definitely not eevil"/>
            <Bullet />
        </>
    );
}

export default Landing;