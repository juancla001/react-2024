import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'Miguel',
        name: 'Miguelo',
        isFollowing: true,
    },
    {
        userName: 'Dona',
        name: 'Donatello',
        isFollowing: false,
    },
    {
        userName: 'Leonardo',
        name: 'Leonardo',
        isFollowing: true,
    },
    {
        userName: 'Raphael',
        name: 'rapha',
        isFollowing: true,
    }
]

export function App() {

    return (
        <section className='section-app-twitter'>
            {
                users.map(({userName, name, isFollowing}) => (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}                                
                        </TwitterFollowCard>
                ))
            }
            
        </section>
    )
}