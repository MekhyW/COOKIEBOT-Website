import Intro from "./Intro";
import Side from "./Side";
import Bullet from "./Bullet";

function Landing(){

    return (
        <>
            <Intro />
            <Side  side="l" title="Ate cura doença" desc="Aooooooooooooooo potência"/>
            <Side  side="r" title="Irineu" desc="Você não sabe nem eu"/>
            <Bullet />
        </>
    );
}

export default Landing;