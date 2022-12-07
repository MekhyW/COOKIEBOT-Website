import axios from 'axios';
import {useEffect, useState} from 'react';

function Intro(){
    const [frase, setFrase] = useState('Oi');
    const [lang, setLang] = useState('Portuguese');

    async function getFrase(){
        let promise = new Promise((resolve, reject) => {
            axios
              .get("https://www.greetingsapi.com/random")
              .then((response) => resolve(response.data));
        });
        let result = await promise;
        setFrase(result.greeting);
        setLang(result.language);
    }
    async function callgetFrase(){
        await getFrase();
    }

    useEffect(() => {
      const interval = setInterval(() => {
        callgetFrase();
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="intro">
                <div className='canvas'>
                    <img src="cookiebot.png" alt="logo"/>
                    <h1> CookieBot </h1>
                    <h2> Conversational AI, Infinite content and useful functionalities, for Telegram groups!</h2>
                    <p>{frase}! That's hello in {lang}!</p>
                    <div class="bubbles">
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                        <div class="bubble"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;