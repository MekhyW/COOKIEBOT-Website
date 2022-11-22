import {useEffect, useState} from 'react';


function Intro(){

    const frases = ["O bot mais supimpa do mercado!", "O bot mais legal do mercado!", "O bot mais legal do mundo!"];

    const [frase, setFrase] = useState(frases[0]);

    function choose(choices) {
        var index = Math.floor(Math.random() * choices.length);
        setFrase(choices[index]);
      }

      useEffect(() => {
        const interval = setInterval(() => {
          choose(frases);
        }, 5000);
      
        return () => clearInterval(interval);
      }, []);

    return (
        <>
            <div className="intro">
                <img src="landing_page_temporary.jpg" alt="logo"/>
                <h1> CookieBot </h1>
                <p>{frase}</p>
            </div>
        </>
    );
}

export default Intro;