import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
export function App() {
    return (
        <section className="App">
            <TwitterFollowCard
                isFollowing
                userName="quienesfrankie"
                name="F r a n k i e"
            />
            <TwitterFollowCard
                isFollowing={false}
                userName="alvaromassive"
                name="alvaroO"
            />
            <TwitterFollowCard
                isFollowing
                userName="cucurella3"
                name="Marc Cucurella"
            />
            <TwitterFollowCard
                isFollowing={false}
                userName="_criscries"
                name="criscries"
            />
        </section>
    );
}
