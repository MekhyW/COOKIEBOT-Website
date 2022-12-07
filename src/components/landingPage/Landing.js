import Intro from "./Intro";
import Side from "./Side";
import Bullet from "./Bullet";

function Landing(){

    return (
        <>
            <Intro />
            <Side  side="r" title="Answer ANY Messsage" desc="Come say Hi! No one ever knows what I will answer next, I'm always learning new things. Also works for stickers OwO"/>
            <Side  side="l" title="Memes and Content" desc="Thousands of drawing ideas, meme templates, built-in search engine. You are never running out of material again."/>
            <Side  side="r" title="The Easiest Publisher" desc="I can help repost your content in many groups that I am in for many days. You only have to press a single button, the rest is 100% automatic!"/>
            <Side  side="l" title="Protect your Chat" desc="Spammers and troll bots are smarter than ever. I can apply Captcha, restrict and automatically kick suspicious users out of the box"/>
            <Bullet />
        </>
    );
}

export default Landing;