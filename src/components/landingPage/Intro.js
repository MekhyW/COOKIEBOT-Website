import axios from 'axios';
import {useEffect, useState} from 'react';
var frase_greeting = "Loading...";
var lang_greeting = "";

async function getFrase(){
    let promise = new Promise((resolve, reject) => {
        axios
          .get("https://www.greetingsapi.com/random")
          .then((response) => resolve(response.data));
    });
    let result = await promise;
    frase_greeting = result.greeting;
    lang_greeting = result.language;
}
async function callgetFrase(){
    await getFrase();
}
callgetFrase();

function Intro(){
    const [frase, setFrase] = useState(frase_greeting);
    const [lang, setLang] = useState(lang_greeting);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFrase(frase_greeting);
        setLang(lang_greeting);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="intro">
                <img src="landing_page_temporary.jpg" alt="logo"/>
                <h1> CookieBot </h1>
                <p>{frase}! That's hello in {lang}!</p>
            </div>
        </>
    );
}

export default Intro;