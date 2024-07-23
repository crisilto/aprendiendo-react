import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
    {
        userName: 'cucurella3',
        name: 'Marc Cucurella',
        isFollowing: true
    },
    {
        userName: 'hugoduro14',
        name: 'Hugo Duro',
        isFollowing: false
    },
    {
        userName: 'daniolmo7',
        name: 'Dani Olmo',
        isFollowing: false
    },
    {
        userName: '5sergiob',
        name: 'Sergio Busquets',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing} >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    );
}
